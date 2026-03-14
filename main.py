from fastapi import FastAPI, UploadFile, File, Form
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, Response
import tldextract
import validators
import cv2
import numpy as np
from pyzbar.pyzbar import decode
import uvicorn
from playwright.async_api import async_playwright
from playwright_stealth import Stealth
from pysafebrowsing import SafeBrowsing
import whois
from datetime import datetime
import io
from google import genai
from google.genai import types
from PIL import Image
import os
from dotenv import load_dotenv

# Load from .env file
load_dotenv()

app = FastAPI()

# --- GOOGLE API SETUP ---
# Reads from the GOOGLE_API_KEY variable in your .env file
SAFE_BROWSING_API_KEY = os.getenv('GOOGLE_API_KEY', 'YOUR_GOOGLE_API_KEY')
s = SafeBrowsing(SAFE_BROWSING_API_KEY)

# Configure New Gemini Client
client = genai.Client(api_key=SAFE_BROWSING_API_KEY)

import socket

def get_domain_age_info(domain):
    try:
        # We'll use a 10s timeout. If it's a very slow server, we'll mark it as unknown.
        # We explicitly handle the parser exceptions.
        try:
            if hasattr(whois, 'whois'):
                w = whois.whois(domain, timeout=10)
            else:
                w = whois(domain, timeout=10)
        except (whois.parser.WhoisDomainNotFoundError, AttributeError):
            # AttributeError might happen if whois.parser isn't initialized or similar
            return {"error": "not_found", "message": "This website address was not found in our records. It might be very new!"}
        except socket.timeout:
            return {"error": "timeout", "message": "WHOIS check timed out. We couldn't verify the age."}
        except Exception as e:
            if "No route to host" in str(e) or "Connection refused" in str(e):
                return {"error": "connection_error", "message": "Could not connect to the verification server."}
            print(f"DEBUG WHOIS Inner Error: {e}")
            return {"error": "server_error"}
            
        creation_date = w.creation_date
        if isinstance(creation_date, list):
            creation_date = creation_date[0]
            
        if creation_date:
            # Fix: Ensure both datetimes are naive (remove timezone) before subtraction
            if creation_date.tzinfo is not None:
                creation_date = creation_date.replace(tzinfo=None)
            
            now_naive = datetime.now().replace(tzinfo=None)
            days_old = (now_naive - creation_date).days
            
            return {
                "creation_date": creation_date.strftime("%Y-%m-%d"),
                "days_old": days_old,
                "is_new": days_old < 30 
            }
        else:
            # Some TLDs don't provide creation date in a standard way
            return {"error": "no_date", "message": "Age information is hidden or unavailable for this site."}

    except Exception as e:
        print(f"DEBUG WHOIS Outer Error: {e}")
        return {"error": "unknown"}

def is_dynamic_dns(domain, suffix):
    """Checks if the site is a dynamic DNS provider which is common for scams."""
    dynamic_dns_domains = {
        "ddns.net", "duckdns.org", "no-ip.com", "no-ip.org", "no-ip.biz", 
        "hopto.org", "zapto.org", "sytes.net", "serveblog.net", "serveftp.com"
    }
    full_domain = f"{domain}.{suffix}".lower()
    return full_domain in dynamic_dns_domains

def is_singapore_official(domain, suffix):
    """Heuristic to check if a domain belongs to a real SG Gov or Bank entity."""
    # Official SG Gov sites ALWAYS use .gov.sg
    if suffix == "gov.sg":
        return True, "govt", "✅ This is an official Singapore Government website."
    
    # Common SG Banks
    official_banks = {
        "dbs.com.sg": "DBS Bank",
        "dbs.com": "DBS Bank",
        "posb.com.sg": "POSB Bank",
        "ocbc.com": "OCBC Bank",
        "uob.com.sg": "UOB Bank",
        "uobgroup.com": "UOB Bank",
        "standardchartered.com.sg": "Standard Chartered",
        "hsbc.com.sg": "HSBC Bank"
    }
    
    full_domain = f"{domain}.{suffix}".lower()
    if full_domain in official_banks:
        return True, "bank", f"✅ This is the official website for {official_banks[full_domain]}."
    
    return False, None, None

async def ai_brand_check(screenshot_bytes, actual_domain, extra_info=""):
    try:
        print(f"DEBUG: Starting AI Analysis for {actual_domain}...")
        
        prompt = f"""
        Look at this website screenshot and analyze it for an elderly person who wants to stay safe online.
        You are an expert at spotting "Singapore-specific" scams.
        
        1. **Brand Impersonation Check:** Does this website look like it is trying to be a famous company or brand? 
           **PAY SPECIAL ATTENTION TO SINGAPOREAN BRANDS/AGENCIES:**
           - Government: Singpass, SPF (Police), ICA, MAS, MOH, CPF, IRAS, MSF.
           - Banks: DBS, POSB, OCBC, UOB, Standard Chartered, HSBC.
           - Services: SingPost, SP Group, Grab, Shopee, Lazada, Carousell.
           
           If YES, explain which brand it is imitating and why.
           If NO, explain that it looks unique.
        
        2. **Website Identity:** Based on the visual look, what is the main purpose of this site? (e.g., "This looks like a login page for a bank," "This is a shopping site.")
        
        3. **Safety Advice:** Give 2-3 very clear, simple safety tips for a senior citizen. 
           - Mention that official Singapore government websites always show a 🦁 Merlion or 🏛️ Crest in our tool and end with ".gov.sg".
           - Mention that official banks show a 🏦 Bank icon in our tool.
           - Remind them that banks never ask for passwords via SMS links.
        
        {extra_info}
        The website address (domain) shown in the browser is: {actual_domain}
        
        Compare the visual brand with this domain. If the brand is a Singaporean bank/agency but the domain is NOT their official one (e.g. "dbs-security-check.com" instead of "dbs.com.sg"), WARN THE USER STRONGLY!
        """
        
        # New API format for images
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=[
                prompt,
                types.Part.from_bytes(data=screenshot_bytes, mime_type='image/jpeg')
            ]
        )
        
        print(f"DEBUG: AI Analysis complete.")
        return response.text
    except Exception as e:
        print(f"DEBUG AI Analysis ERROR: {str(e)}")
        return f"AI Error: {str(e)}"

async def capture_stealth_screenshot(url):
    async with async_playwright() as p:
        browser = await p.chromium.launch(args=["--disable-blink-features=AutomationControlled"])
        # Set a realistic User-Agent to look like a real browser
        user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
        context = await browser.new_context(
            viewport={'width': 1280, 'height': 800},
            user_agent=user_agent,
            java_script_enabled=True,
            ignore_https_errors=True,
            extra_http_headers={
                "Accept-Language": "en-US,en;q=0.9",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            }
        )
        page = await context.new_page()
        # Apply stealth scripts using the correct Stealth class method
        await Stealth().apply_stealth_async(page)
        
        try:
            # Change: Use "load" instead of "networkidle" which is too strict for many sites
            try:
                await page.goto(url, timeout=30000, wait_until="load")
            except Exception as e:
                print(f"DEBUG: Navigation timeout/error, attempting to screenshot anyway: {e}")
            
            # Wait longer for redirects (especially JS-based ones)
            await page.wait_for_timeout(5000)
            
            final_url = page.url
            screenshot_bytes = await page.screenshot(type='jpeg', quality=80)
            await browser.close()
            return screenshot_bytes, final_url
        except Exception as e:
            await browser.close()
            # If everything fails, provide a more descriptive error
            raise Exception(f"Could not reach the website: {str(e)}")

@app.post("/analyze-url")
async def analyze_url(url: str = Form(...)):
    print(f"DEBUG: Analyzing URL: {url}")
    processed_url = url.strip()
    # Check prefix in a case-insensitive way
    if not processed_url.lower().startswith(('http://', 'https://')):
        processed_url = 'https://' + processed_url
    
    # Optional: Normalize the protocol to lowercase for better compatibility
    if processed_url.lower().startswith('http://'):
        processed_url = 'http://' + processed_url[7:]
    elif processed_url.lower().startswith('https://'):
        processed_url = 'https://' + processed_url[8:]
    
    if not validators.url(processed_url):
        return {"error": "Invalid URL format."}
    
    try:
        # 1. TLD Analysis
        extracted = tldextract.extract(processed_url)
        domain_name = f"{extracted.domain}.{extracted.suffix}"
        
        # 2. Domain Age Check (WHOIS)
        age_info = get_domain_age_info(domain_name)
        
        # 3. Singapore Specific Check
        is_official, official_type, official_msg = is_singapore_official(extracted.domain, extracted.suffix)
        
        # 4. Dynamic DNS Check
        is_dynamic = is_dynamic_dns(extracted.domain, extracted.suffix)
        if is_dynamic:
            # If it's a dynamic DNS provider, we force a warning because the specific subdomain's age is unknown
            age_info = {
                "error": "dynamic_dns", 
                "message": f"⚠️ DANGER: This is a 'Dynamic Address' ({extracted.domain}.{extracted.suffix}). Anyone can create these for free. Scammers love using them to hide!"
            }

        # 5. Google Safe Browsing Check
        is_malicious = False
        malicious_details = "Checking safety status..."
        
        if SAFE_BROWSING_API_KEY != 'YOUR_GOOGLE_API_KEY':
            res = s.lookup_urls([processed_url])
            if res[processed_url]['malicious']:
                is_malicious = True
                malicious_details = f"⚠️ WARNING: Google says this site is dangerous!"
            else:
                if is_official:
                    malicious_details = official_msg
                else:
                    malicious_details = "✅ Google says this site is clean."
        else:
            if is_official:
                malicious_details = official_msg
            else:
                malicious_details = "ℹ️ Google safety check is not set up yet."

        return {
            "subdomain": extracted.subdomain,
            "domain": extracted.domain,
            "suffix": extracted.suffix,
            "full_url": processed_url,
            "is_malicious": is_malicious,
            "safety_status": malicious_details,
            "age_info": age_info,
            "is_official": is_official,
            "official_type": official_type,
            "warning": "Check if the domain name in the yellow box is correct."
        }
    except Exception as e:
        return {"error": str(e)}

@app.get("/ai-analyze")
async def get_ai_analysis(url: str):
    try:
        screenshot_bytes, final_url = await capture_stealth_screenshot(url)
        
        extracted = tldextract.extract(final_url)
        actual_domain = f"{extracted.domain}.{extracted.suffix}"
        
        # If it redirected, mention that to the AI
        ai_context = ""
        if final_url.rstrip('/') != url.rstrip('/'):
            ai_context = f"Note: The site redirected from {url} to {final_url}. Analyze the brand of the FINAL site."

        ai_report = await ai_brand_check(screenshot_bytes, actual_domain, ai_context)
        return {"report": ai_report, "final_url": final_url}
    except Exception as e:
        return {"error": str(e)}

@app.get("/screenshot")
async def get_screenshot(url: str):
    try:
        screenshot_bytes, _ = await capture_stealth_screenshot(url)
        return Response(content=screenshot_bytes, media_type="image/jpeg")
    except Exception as e:
        return {"error": str(e)}

@app.post("/decode-qr")
async def decode_qr(file: UploadFile = File(...)):
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    decoded_objects = decode(img)
    results = []
    for obj in decoded_objects:
        results.append(obj.data.decode("utf-8"))
    
    if not results:
        return {"error": "No QR code found in the image."}
    
    return {"urls": results}

app.mount("/", StaticFiles(directory="static", html=True), name="static")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
