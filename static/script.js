// --- NEW: Multi-language Support ---
const translations = {
    'en': {
        'app-title': '🛡️ Safe Web Helper',
        'app-subtitle': 'Helping you check links and QR codes safely.',
        'landing-title': 'What would you like to do today?',
        'wizard-link-text': 'I have a link from a message',
        'wizard-link-subtext': 'SMS, WhatsApp, or Email',
        'wizard-qr-text': 'I want to scan a QR code',
        'wizard-qr-subtext': 'On a poster or flyer',
        'btn-back': 'Go Back',
        'link-tool-title': 'Check a Website Link',
        'link-tool-desc': 'Use this if you have a web address from a text message, email, or WhatsApp.',
        'url-input-placeholder': 'Enter or paste the website link here...',
        'btn-check-link': 'Check This Link',
        'analysis-result-title': 'Analysis Result:',
        'btn-show-preview': 'Show Safe Preview',
        'qr-tool-title': 'Check a QR Code',
        'qr-tool-desc': 'Point your camera at a QR code or upload a photo of one.',
        'btn-start-scan': '📷 Use Camera to Scan',
        'btn-stop-scan': 'Stop Camera',
        'separator-or': 'OR UPLOAD A PHOTO',
        'btn-check-photo': 'Check Uploaded Photo',
        'qr-result-title': 'Link found in QR code:',
        'btn-check-qr-link': 'Check This Link Above',
        'preview-title': 'Safe Website Snapshot',
        'preview-disclaimer': 'This is a safe picture of the website. You cannot click anything here for your safety.',
        'ai-box-title': '🤖 AI Safety Assistant Says:',
        'btn-tts-hear': 'Hear the Advice',
        'btn-tts-stop': 'Stop Reading',
        'ai-waiting': 'Waiting for AI to look at the site...',
        'loading-text': 'Taking a safe picture... please wait...',
        'btn-close-snapshot': 'Close Snapshot',
        'action-title': '💡 What should I do?',
        'action-danger-1': 'Do NOT enter your password or NRIC.',
        'action-danger-2': 'Close this website immediately.',
        'action-danger-3': 'If you gave money, call your bank NOW.',
        'action-safe-1': 'This site is verified as safe.',
        'action-safe-2': 'You can proceed normally.',
        'action-warning-1': 'Be careful. This is not an official site.',
        'action-warning-2': 'Do not share secrets if you are unsure.',
        'action-warning-3': 'Ask a family member to help check this.',
        'action-established-1': 'This is an established website (old and well-known).',
        'action-established-2': 'It is not an official Singapore government site.',
        'action-established-3': 'Only share info if you trust this brand.'
    },
    'zh': {
        'app-title': '🛡️ 网络安全助手',
        'app-subtitle': '帮助您安全地检查链接和二维码。',
        'landing-title': '您今天想做什么？',
        'wizard-link-text': '我收到一条包含链接的消息',
        'wizard-link-subtext': '短信、微信或电子邮件',
        'wizard-qr-text': '我想扫描二维码',
        'wizard-qr-subtext': '在海报或传单上',
        'btn-back': '返回',
        'link-tool-title': '检查网站链接',
        'link-tool-desc': '如果您从短信、电子邮件或微信收到网址，请使用此功能。',
        'url-input-placeholder': '在此输入或粘贴网站链接...',
        'btn-check-link': '检查此链接',
        'analysis-result-title': '分析结果：',
        'btn-show-preview': '显示安全预览',
        'qr-tool-title': '检查二维码',
        'qr-tool-desc': '将相机对准二维码或上传二维码照片。',
        'btn-start-scan': '📷 使用相机扫描',
        'btn-stop-scan': '停止相机',
        'separator-or': '或上传照片',
        'btn-check-photo': '检查上传的照片',
        'qr-result-title': '二维码中发现的链接：',
        'btn-check-qr-link': '检查上面的链接',
        'preview-title': '安全网站快照',
        'preview-disclaimer': '这是网站的安全图片。为了您的安全，您不能点击这里的任何内容。',
        'ai-box-title': '🤖 AI 安全助手说：',
        'btn-tts-hear': '听取建议',
        'btn-tts-stop': '停止播放',
        'ai-waiting': '正在等待 AI 查看网站...',
        'loading-text': '正在拍摄安全图片... 请稍候...',
        'btn-close-snapshot': '关闭快照',
        'action-title': '💡 我该怎么办？',
        'action-danger-1': '切勿输入您的密码或身份证号码 (NRIC)。',
        'action-danger-2': '立即关闭此网站。',
        'action-danger-3': '如果您已经转账，请立即联系您的银行。',
        'action-safe-1': '此网站已验证为安全。',
        'action-safe-2': '您可以正常继续。',
        'action-warning-1': '请小心。这不是官方网站。',
        'action-warning-2': '如果您不确定，请勿分享秘密。',
        'action-warning-3': '请家人帮忙检查此网站。',
        'action-established-1': '这是一个老牌网站（历史悠久且知名）。',
        'action-established-2': '这不是新加坡官方政府网站。',
        'action-established-3': '仅在您信任该品牌时分享信息。'
    },
    'ms': {
        'app-title': '🛡️ Pembantu Web Selamat',
        'app-subtitle': 'Membantu anda menyemak pautan dan kod QR dengan selamat.',
        'landing-title': 'Apa yang anda ingin lakukan hari ini?',
        'wizard-link-text': 'Saya mempunyai pautan daripada mesej',
        'wizard-link-subtext': 'SMS, WhatsApp, atau E-mel',
        'wizard-qr-text': 'Saya ingin mengimbas kod QR',
        'wizard-qr-subtext': 'Pada poster atau risalah',
        'btn-back': 'Kembali',
        'link-tool-title': 'Semak Pautan Laman Web',
        'link-tool-desc': 'Gunakan ini jika anda mempunyai alamat web daripada mesej teks, e-mel, atau WhatsApp.',
        'url-input-placeholder': 'Masukkan atau tampal pautan laman web di sini...',
        'btn-check-link': 'Semak Pautan Ini',
        'analysis-result-title': 'Keputusan Analisis:',
        'btn-show-preview': 'Tunjukkan Pratonton Selamat',
        'qr-tool-title': 'Semak Kod QR',
        'qr-tool-desc': 'Halakan kamera anda pada kod QR atau muat naik foto kod QR.',
        'btn-start-scan': '📷 Gunakan Kamera untuk Mengimbas',
        'btn-stop-scan': 'Hentikan Kamera',
        'separator-or': 'ATAU MUAT NAIK FOTO',
        'btn-check-photo': 'Semak Foto yang Dimuat Naik',
        'qr-result-title': 'Pautan ditemui dalam kod QR:',
        'btn-check-qr-link': 'Semak Pautan Di Atas',
        'preview-title': 'Paparan Laman Web Selamat',
        'preview-disclaimer': 'Ini adalah gambar selamat laman web tersebut. Anda tidak boleh menekan apa-apa di sini demi keselamatan anda.',
        'ai-box-title': '🤖 Pembantu Keselamatan AI Berkata:',
        'btn-tts-hear': 'Dengar Nasihat',
        'btn-tts-stop': 'Berhenti Mendengar',
        'ai-waiting': 'Menunggu AI untuk melihat laman web...',
        'loading-text': 'Mengambil gambar selamat... sila tunggu...',
        'btn-close-snapshot': 'Tutup Paparan',
        'action-title': '💡 Apa yang patut saya lakukan?',
        'action-danger-1': 'JANGAN masukkan kata laluan atau NRIC anda.',
        'action-danger-2': 'Tutup laman web ini dengan segera.',
        'action-danger-3': 'Jika anda telah memberikan wang, hubungi bank anda SEKARANG.',
        'action-safe-1': 'Laman web ini disahkan selamat.',
        'action-safe-2': 'Anda boleh meneruskan seperti biasa.',
        'action-warning-1': 'Berhati-hati. Ini bukan laman web rasmi.',
        'action-warning-2': 'Jangan berkongsi maklumat sulit jika anda tidak pasti.',
        'action-warning-3': 'Minta ahli keluarga membantu menyemak ini.',
        'action-established-1': 'Ini adalah laman web yang mantap (lama dan terkenal).',
        'action-established-2': 'Ia bukan laman web rasmi kerajaan Singapura.',
        'action-established-3': 'Hanya kongsi maklumat jika anda mempercayai jenama ini.'
    },
    'ta': {
        'app-title': '🛡️ பாதுகாப்பான இணைய உதவியாளர்',
        'app-subtitle': 'இணைப்புகள் மற்றும் QR குறியீடுகளைப் பாதுகாப்பாகச் சரிபார்க்க உதவுகிறது.',
        'landing-title': 'இன்று நீங்கள் என்ன செய்ய விரும்புகிறீர்கள்?',
        'wizard-link-text': 'செய்தியிலிருந்து எனக்கு ஒரு இணைப்பு உள்ளது',
        'wizard-link-subtext': 'SMS, WhatsApp அல்லது மின்னஞ்சல்',
        'wizard-qr-text': 'நான் ஒரு QR குறியீட்டை ஸ்கேன் செய்ய விரும்புகிறேன்',
        'wizard-qr-subtext': 'ஒரு போஸ்டர் அல்லது துண்டுப் பிரசுரத்தில்',
        'btn-back': 'பின்செல்',
        'link-tool-title': 'இணையதள இணைப்பைச் சரிபார்க்கவும்',
        'link-tool-desc': 'உங்களிடம் குறுஞ்செய்தி, மின்னஞ்சல் அல்லது வாட்ஸ்அப்பிலிருந்து இணைய முகவரி இருந்தால் இதைப் பயன்படுத்தவும்.',
        'url-input-placeholder': 'இணையதள இணைப்பை இங்கே உள்ளிடவும் அல்லது ஒட்டவும்...',
        'btn-check-link': 'இந்த இணைப்பைச் சரிபார்க்கவும்',
        'analysis-result-title': 'ஆய்வு முடிவு:',
        'btn-show-preview': 'பாதுகாப்பான மாதிரியைக் காட்டு',
        'qr-tool-title': 'QR குறியீட்டைச் சரிபார்க்கவும்',
        'qr-tool-desc': 'உங்கள் கேமராவை QR குறியீட்டில் காட்டவும் அல்லது அதன் புகைப்படத்தைப் பதிவேற்றவும்.',
        'btn-start-scan': '📷 ஸ்கேன் செய்ய கேமராவைப் பயன்படுத்தவும்',
        'btn-stop-scan': 'கேமராவை நிறுத்தவும்',
        'separator-or': 'அல்லது ஒரு புகைப்படத்தைப் பதிவேற்றவும்',
        'btn-check-photo': 'பதிவேற்றிய புகைப்படத்தைச் சரிபார்க்கவும்',
        'qr-result-title': 'QR குறியீட்டில் கண்டறியப்பட்ட இணைப்பு:',
        'btn-check-qr-link': 'மேலே உள்ள இணைப்பைச் சரிபார்க்கவும்',
        'preview-title': 'பாதுகாப்பான இணையதளப் படம்',
        'preview-disclaimer': 'இது இணையதளத்தின் பாதுகாப்பான படம். உங்கள் பாதுகாப்பிற்காக இங்கே எதையும் கிளிக் செய்ய முடியாது.',
        'ai-box-title': '🤖 AI பாதுகாப்பு உதவியாளர் கூறுகிறார்:',
        'btn-tts-hear': 'ஆலோசனையைக் கேளுங்கள்',
        'btn-tts-stop': 'கேட்பதை நிறுத்துங்கள்',
        'ai-waiting': 'AI இணையதளத்தைப் பார்க்கும் வரை காத்திருக்கிறது...',
        'loading-text': 'பாதுகாப்பான படத்தை எடுக்கிறது... தயவுசெய்து காத்திருக்கவும்...',
        'btn-close-snapshot': 'படத்தை மூடு',
        'action-title': '💡 நான் என்ன செய்ய வேண்டும்?',
        'action-danger-1': 'உங்கள் கடவுச்சொல் அல்லது NRIC ஐ உள்ளிட வேண்டாம்.',
        'action-danger-2': 'இந்த இணையதளத்தை உடனடியாக மூடவும்.',
        'action-danger-3': 'நீங்கள் பணம் கொடுத்திருந்தால், உடனே உங்கள் வங்கியை அழைக்கவும்.',
        'action-safe-1': 'இந்த தளம் பாதுகாப்பானது என சரிபார்க்கப்பட்டது.',
        'action-safe-2': 'நீங்கள் சாதாரணமாக தொடரலாம்.',
        'action-warning-1': 'கவனமாக இருங்கள். இது அதிகாரப்பூர்வ தளம் அல்ல.',
        'action-warning-2': 'உங்களுக்குத் தெரியாவிட்டால் ரகசியங்களைப் பகிர வேண்டாம்.',
        'action-warning-3': 'இதைச் சரிபார்க்க உதவ குடும்ப உறுப்பினரிடம் கேளுங்கள்.',
        'action-established-1': 'இது ஒரு புகழ்பெற்ற இணையதளம் (பழையது மற்றும் நன்கு அறியப்பட்டது).',
        'action-established-2': 'இது அதிகாரப்பூர்வ சிங்கப்பூர் அரசாங்க இணையதளம் அல்ல.',
        'action-established-3': 'இந்த பிராண்டை நீங்கள் நம்பினால் மட்டுமே தகவலைப் பகிரவும்.'
    }
};

let currentLang = 'en';

function changeLanguage(lang) {
    currentLang = lang;
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update all placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // If reading, stop it
    stopReading();
}

// --- NEW: Wizard Navigation ---
function showSection(sectionId) {
    // Stop any ongoing TTS when changing screens
    stopReading();

    // Hide all main top-level sections
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('linkTool').classList.add('hidden');
    document.getElementById('qrTool').classList.add('hidden');
    document.getElementById('previewSection').classList.add('hidden');

    // Show the requested section
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.remove('hidden');
        
        // If leaving QR tool, stop the scanner
        if (sectionId !== 'qrTool') {
            stopScanner();
        }
    }
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- NEW: Real-time QR Scanner Logic ---
let html5QrCode = null;

async function startScanner() {
    const startBtn = document.getElementById('startScanBtn');
    const stopBtn = document.getElementById('stopScanBtn');
    const qrResult = document.getElementById('qrResult');
    const qrUrl = document.getElementById('qrUrl');

    if (!html5QrCode) {
        html5QrCode = new Html5Qrcode("reader");
    }

    startBtn.innerText = "Initializing camera...";
    
    try {
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };
        
        await html5QrCode.start(
            { facingMode: "environment" }, // Prioritize back camera
            config,
            (decodedText) => {
                // SUCCESS CALLBACK
                stopScanner();
                qrResult.classList.remove('hidden');
                qrUrl.innerText = decodedText;
                useQrUrl(); // Automatically start analysis
                
                // Vibrate for feedback if supported
                if (navigator.vibrate) {
                    navigator.vibrate(200);
                }
            },
            (errorMessage) => {
                // ignore scanning errors
            }
        );

        startBtn.classList.add('hidden');
        stopBtn.classList.remove('hidden');

    } catch (err) {
        console.error("Camera Error:", err);
        alert("Could not open camera. Please check your browser permissions.");
        startBtn.innerText = "📷 Use Camera to Scan";
    }
}

async function stopScanner() {
    const startBtn = document.getElementById('startScanBtn');
    const stopBtn = document.getElementById('stopScanBtn');

    if (html5QrCode && html5QrCode.isScanning) {
        try {
            await html5QrCode.stop();
        } catch (err) {
            console.error("Stop error:", err);
        }
    }
    
    startBtn.classList.remove('hidden');
    startBtn.innerText = "📷 Use Camera to Scan";
    stopBtn.classList.add('hidden');
}

async function analyzeURL() {
    const urlInput = document.getElementById('urlInput').value;
    const checkBtn = document.getElementById('checkBtn');

    if (!urlInput) {
        alert("Please enter a website link first!");
        return;
    }

    // --- Loading Feedback ---
    const originalBtnText = checkBtn.innerText;
    checkBtn.innerText = "🔍 Checking... Please Wait...";
    checkBtn.disabled = true;
    checkBtn.style.opacity = "0.7";

    const formData = new FormData();
    formData.append('url', urlInput);

    try {
        const response = await fetch('analyze-url', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        // Restore button
        checkBtn.innerText = originalBtnText;
        checkBtn.disabled = false;
        checkBtn.style.opacity = "1";

        if (data.error) {
            alert("Analysis Error: " + data.error);
            return;
        }

        const urlAnalysis = document.getElementById('urlAnalysis');
        const urlParts = document.getElementById('urlParts');
        const urlWarning = document.getElementById('urlWarning');
        const trustCard = document.getElementById('trustCard');
        
        urlAnalysis.classList.remove('hidden');
        
        // --- Trust Card Logic ---
        trustCard.classList.remove('hidden');
        let trustHtml = "";
        let trustClass = "warning";

        if (data.is_malicious) {
            trustClass = "danger";
            trustHtml = `
                <span class="status-icon">🚨</span>
                <div>DANGER: Harmful Site</div>
                <div class="status-action">Close this page immediately</div>
            `;
        } else if (data.is_official) {
            trustClass = "safe";
            if (data.official_type === "govt") {
                trustHtml = `
                    <span class="status-icon">🦁</span>
                    <div>Official SG Website</div>
                    <div class="status-action">This is a verified government site</div>
                `;
            } else if (data.official_type === "bank") {
                trustHtml = `
                    <span class="status-icon">🏦</span>
                    <div>Official Bank Site</div>
                    <div class="status-action">This is a verified bank website</div>
                `;
            } else {
                trustHtml = `
                    <span class="status-icon">✅</span>
                    <div>Official Website</div>
                    <div class="status-action">This is a verified safe site</div>
                `;
            }
        } else if (data.age_info && (data.age_info.is_new || data.age_info.error === "not_found" || data.age_info.error === "dynamic_dns")) {
            trustClass = "danger";
            trustHtml = `
                <span class="status-icon">⚠️</span>
                <div>Suspicious Site</div>
                <div class="status-action">Likely a fake or brand new site</div>
            `;
        } else if (data.age_info && !data.age_info.error && !data.age_info.is_new && !data.is_malicious) {
            trustClass = "established";
            trustHtml = `
                <span class="status-icon">🌐</span>
                <div>Established Website</div>
                <div class="status-action">Not an official SG site. Verify the brand.</div>
            `;
        } else {
            trustClass = "warning";
            trustHtml = `
                <span class="status-icon">❓</span>
                <div>Unknown Website</div>
                <div class="status-action">Proceed with caution</div>
            `;
        }
        trustCard.className = `trust-card ${trustClass}`;
        trustCard.innerHTML = trustHtml;

        // Show Domain Age
        let ageHtml = "";
        if (data.age_info && !data.age_info.error) {
            const ageClass = data.age_info.is_new ? 'malicious' : 'safe';
            const ageMessage = data.age_info.is_new 
                ? `⚠️ DANGER: This website is brand NEW (${data.age_info.days_old} days old). Scammers often use new sites!` 
                : `✅ This website is established (Created: ${data.age_info.creation_date}).`;
            
            ageHtml = `<div class="safety-badge ${ageClass}">${ageMessage}</div>`;
        } else if (data.age_info && data.age_info.error) {
            let errorMsg = data.age_info.message || "Could not verify age.";
            let badgeClass = "malicious"; // Default to suspicious for safety
            
            if (data.age_info.error === "not_found") {
                errorMsg = "⚠️ DANGER: This website address was not found. It might be a brand new fake site!";
                badgeClass = "malicious";
            } else if (data.age_info.error === "timeout" || data.age_info.error === "connection_error") {
                errorMsg = "ℹ️ Verification system busy. We couldn't check the age right now.";
                badgeClass = "warning"; 
            } else if (data.age_info.error === "no_date") {
                errorMsg = "⚠️ Registration info is hidden. Many legitimate sites do this, but be extra careful!";
                badgeClass = "warning"; 
            }
            
            ageHtml = `<div class="safety-badge ${badgeClass}">${errorMsg}</div>`;
        } else {
            // Treat 'Unknown' as high risk for elderly safety
            ageHtml = `<div class="safety-badge malicious">⚠️ HIGH RISK: Could not find registration info for this site. Legitimate websites are always registered. This is very suspicious!</div>`;
        }

        // Show Google Safety Status
        let safetyClass = data.is_malicious ? 'malicious' : 'safe';
        if (data.is_official) safetyClass = 'safe';

        urlWarning.innerHTML = `
            ${ageHtml}
            <div class="safety-badge ${safetyClass}">
                ${data.safety_status}
            </div>
            <p>${data.warning}</p>
        `;
        
        // Highlight the domain clearly
        urlParts.innerHTML = `
            ${data.subdomain ? data.subdomain + '.' : ''}<span class="domain-part">${data.domain}</span>.${data.suffix}
        `;

        // Store the URL for preview
        window.currentUrl = data.full_url;

        // --- NEW: Populate "What should I do?" ---
        const whatToDo = document.getElementById('whatToDo');
        const actionList = document.getElementById('actionList');
        whatToDo.classList.remove('hidden');
        actionList.innerHTML = ""; // Clear old actions

        let actions = [];
        if (data.is_malicious || (data.age_info && (data.age_info.is_new || data.age_info.error === "not_found" || data.age_info.error === "dynamic_dns"))) {
            actions = [
                { key: 'action-danger-1', class: 'danger-text' },
                { key: 'action-danger-2', class: 'danger-text' },
                { key: 'action-danger-3', class: 'danger-text' }
            ];
        } else if (data.is_official) {
            actions = [
                { key: 'action-safe-1', class: 'safe-text' },
                { key: 'action-safe-2', class: 'safe-text' }
            ];
        } else if (data.age_info && !data.age_info.error && !data.age_info.is_new && !data.is_malicious) {
            // Established sites (not official, but well-known/old)
            actions = [
                { key: 'action-established-1', class: '' },
                { key: 'action-established-2', class: '' },
                { key: 'action-established-3', class: '' }
            ];
        } else {
            actions = [
                { key: 'action-warning-1', class: '' },
                { key: 'action-warning-2', class: '' },
                { key: 'action-warning-3', class: '' }
            ];
        }

        actions.forEach(act => {
            const li = document.createElement('li');
            li.innerText = translations[currentLang][act.key];
            if (act.class) li.className = act.class;
            actionList.appendChild(li);
        });

        document.getElementById('previewSection').classList.add('hidden');
        document.getElementById('previewBtn').innerText = "Show Safe Snapshot";

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong while checking the link.");
    }
}

async function decodeQR() {
    const qrInput = document.getElementById('qrInput');
    if (!qrInput.files[0]) {
        alert("Please select a QR code image first!");
        return;
    }

    const formData = new FormData();
    formData.append('file', qrInput.files[0]);

    try {
        const response = await fetch('decode-qr', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        if (data.error) {
            alert(data.error);
            return;
        }

        const qrResult = document.getElementById('qrResult');
        const qrUrl = document.getElementById('qrUrl');
        
        qrResult.classList.remove('hidden');
        qrUrl.innerText = data.urls[0];

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong while checking the QR code.");
    }
}

function useQrUrl() {
    const qrUrl = document.getElementById('qrUrl').innerText;
    document.getElementById('urlInput').value = qrUrl;
    showSection('linkTool'); // Switch view so user sees analysis
    analyzeURL();
}

function togglePreview() {
    const previewSection = document.getElementById('previewSection');
    const snapshotImg = document.getElementById('safeSnapshot');
    const btn = document.getElementById('previewBtn');
    const loading = document.getElementById('loading');
    const aiReport = document.getElementById('aiReport');

    if (previewSection.classList.contains('hidden')) {
        previewSection.classList.remove('hidden');
        loading.classList.remove('hidden');
        snapshotImg.src = "";
        btn.innerText = "Close Snapshot";
        aiReport.innerText = "🤖 AI is looking at the website's appearance... please wait...";
        
        // 1. Fetch snapshot image
        snapshotImg.onload = () => {
            loading.classList.add('hidden');
        };
        snapshotImg.src = `screenshot?url=${encodeURIComponent(window.currentUrl)}`;
        
        // 2. Fetch AI Analysis in parallel
        fetchAIAnalysis(window.currentUrl);

        previewSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        hidePreview();
    }
}

async function fetchAIAnalysis(url) {
    const aiReport = document.getElementById('aiReport');
    try {
        const response = await fetch(`ai-analyze?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        if (data.report) {
            // Use marked library to convert markdown to nice HTML
            aiReport.innerHTML = marked.parse(data.report);
        } else if (data.error) {
            aiReport.innerText = "🤖 AI Error: " + data.error;
        } else {
            aiReport.innerText = "Could not complete AI analysis.";
        }
    } catch (e) {
        aiReport.innerText = "AI Analysis failed to connect to server.";
    }
}

function hidePreview() {
    const previewSection = document.getElementById('previewSection');
    const snapshotImg = document.getElementById('safeSnapshot');
    const btn = document.getElementById('previewBtn');

    stopReading();
    previewSection.classList.add('hidden');
    snapshotImg.src = "";
    btn.innerText = "Show Safe Snapshot";
}

// --- NEW: Read Aloud (Text-to-Speech) Logic ---
let synth = window.speechSynthesis;
let utterance = null;
let isReading = false;

function toggleReadAloud() {
    const aiReport = document.getElementById('aiReport');
    
    if (isReading) {
        stopReading();
    } else {
        // We use textContent or innerText to avoid reading HTML tags (from Markdown parsing)
        const textToRead = aiReport.innerText;
        if (!textToRead || textToRead.includes("Waiting for AI") || textToRead.includes("looking at the website")) {
            console.log("Nothing to read yet.");
            return;
        }
        startReading(textToRead);
    }
}

function startReading(text) {
    const btn = document.getElementById('readAloudBtn');
    const span = btn.querySelector('span');
    
    // Cancel any current speech
    synth.cancel();
    
    utterance = new SpeechSynthesisUtterance(text);
    
    // Set language based on current selection
    const langMap = {
        'en': 'en-US',
        'zh': 'zh-CN',
        'ms': 'ms-MY',
        'ta': 'ta-IN'
    };
    utterance.lang = langMap[currentLang] || 'en-US';
    
    // Set properties for better elderly accessibility
    utterance.rate = 0.9; // Slightly slower than default
    utterance.pitch = 1.0;
    
    utterance.onstart = () => {
        isReading = true;
        span.innerText = translations[currentLang]['btn-tts-stop'];
        btn.classList.add('reading');
    };
    
    utterance.onend = () => {
        isReading = false;
        span.innerText = translations[currentLang]['btn-tts-hear'];
        btn.classList.remove('reading');
    };
    
    utterance.onerror = (event) => {
        console.error("SpeechSynthesisUtterance error", event);
        stopReading();
    };

    synth.speak(utterance);
}

function stopReading() {
    const btn = document.getElementById('readAloudBtn');
    if (synth) {
        synth.cancel();
    }
    isReading = false;
    if (btn) {
        const span = btn.querySelector('span');
        if (span) span.innerText = translations[currentLang]['btn-tts-hear'];
        btn.classList.remove('reading');
    }
}
