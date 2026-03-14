# 🛡️ Safe Web Helper for Elderly

**Helping seniors navigate the internet safely by inspecting links and QR codes before they click.**

Safe Web Helper is a web-based tool designed specifically for elderly users. It provides a high-contrast, multi-lingual, and simplified interface to check if a website link or QR code is safe. It uses a combination of automated safety checks and AI-powered visual analysis to detect scams, impersonation, and malicious content.

## ✨ Key Features

*   **Elderly-Friendly UI:** High-contrast buttons, large fonts, and a simple step-by-step wizard.
*   **Multi-language Support:** Full translations for **English, Chinese (中文), Malay (Melayu), and Tamil (தமிழ்)**.
*   **Smart "Trust Card":** A large, easy-to-read status card (e.g., "Official SG Website", "DANGER: Harmful Site").
*   **Safe Website Snapshots:** Uses [Playwright](https://playwright.dev/) to take a "safe picture" of the website so users can see what it looks like without actually visiting it.
*   **AI Safety Assistant:** Uses **Gemini 2.5 Flash** to analyze the website's visual brand and detect if it is imitating a real Singaporean bank or government agency.
*   **"Read Aloud" Advice:** Integrated Text-to-Speech (TTS) to read safety reports aloud for better accessibility.
*   **Domain Age Checker:** Flags websites that are less than 30 days old—a common sign of temporary scam sites.
*   **QR Code Scanner:** Decodes links from posters, flyers, or uploaded images for safety verification.
*   **Google Safe Browsing:** Integrated with Google's database of known malicious URLs.

---

## 🚀 Installation & Setup

### 1. Prerequisites
*   [Python 3.9+](https://www.python.org/downloads/)
*   [Conda](https://docs.conda.io/en/latest/) (Recommended for environment management)
*   **A Google Gemini API Key** (Get it from [Google AI Studio](https://aistudio.google.com/))

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/safe-browsing-helper.git
cd safe-browsing-helper
```

### 3. Set Up Environment
```bash
# Create and activate the conda environment
conda create -n gemini python=3.10
conda activate gemini

# Install Python dependencies
pip install -r requirements.txt

# Install Playwright browsers and dependencies
playwright install chromium
playwright install-deps
```

### 4. Install Unicode Fonts (Linux Only)
To ensure Tamil, Hindi, and Chinese characters render correctly in screenshots:
```bash
sudo apt-get update
sudo apt-get install -y fonts-indic fonts-noto-cjk fonts-noto-color-emoji
```

### 5. Configuration
Create a `.env` file in the project root and add your Google API key:
```env
GOOGLE_API_KEY=your_gemini_api_key_here
```

---

## 🏃 Running the Application

1.  Start the FastAPI server:
    ```bash
    python main.py
    ```
2.  Open your browser and go to: `http://localhost:8000`

---

## 🛠️ Tech Stack

*   **Backend:** [FastAPI](https://fastapi.tiangolo.com/) (Python)
*   **AI/Analysis:**
    *   `google-genai` (Gemini 2.5 Flash) for visual brand analysis.
    *   `pysafebrowsing` for Google Safe Browsing API.
    *   `python-whois` for domain age verification.
*   **Security Tools:**
    *   `playwright` + `playwright-stealth` for sandboxed snapshots.
*   **Frontend:** HTML5, Vanilla CSS (Accessibility-focused), JavaScript.
*   **QR Processing:** `opencv-python` + `pyzbar`.

---

## 📂 Project Structure

*   `main.py`: The core FastAPI backend handling safety analysis and AI brand matching.
*   `static/`: The frontend files (HTML, CSS, JS).
*   `README.md`: Project roadmap and implementation notes.
*   `.env`: Secure storage for API keys.

---

## 🛡️ Safety Disclaimer
This tool is a helper to identify common web scams. It should be used as a supplementary safety check. Always encourage elderly users to verify suspicious links with trusted family members or official helplines.

---

## 📜 License
[MIT License](LICENSE)
