// ----------------------------
// Backend Configuration
// ----------------------------
const BACKEND_IP = '10.226.13.239'; // Kiran's laptop IP (change to 'localhost' for local testing)
const BACKEND_PORT = '5001';        // Backend port
const API_BASE_URL = `http://${BACKEND_IP}:${BACKEND_PORT}/api`;

function apiUrl(path) {
    return `http://${BACKEND_IP}:${BACKEND_PORT}${path}`;
}

// Language translations
const translations = {
    en: {
        appTitle: "🌱 Smart Agriculture Assistant",
        appSubtitle: "Your Expert Farming Companion",
        heroTitle: "Empowering Farmers with AI Technology",
        heroDescription: "Get instant crop diagnosis, market prices, and government subsidy information - all in your local language!",
        statFarmers: "Farmers Helped",
        statAccuracy: "Diagnosis Accuracy",
        statSupport: "Available",
        featuresTitle: "Our Services",
        diagnosisTitle: "Crop Diagnosis",
        diagnosisDesc: "Upload photos of your crops and get instant AI-powered disease diagnosis with treatment recommendations.",
        diagnosisAction: "Diagnose Now →",
        marketTitle: "Market Prices",
        marketDesc: "Get real-time market prices for your crops across different mandis and make informed selling decisions.",
        marketAction: "Check Prices →",
        subsidiesTitle: "Government Subsidies",
        subsidiesDesc: "Discover available government schemes, subsidies, and financial assistance programs for farmers.",
        subsidiesAction: "Explore Schemes →",
        weatherTitle: "Weather Forecast",
        weatherDesc: "Get accurate weather forecasts and farming advisories to plan your agricultural activities.",
        weatherAction: "View Weather →",
        quickTitle: "Quick Actions",
        emergencyBtn: "Emergency Help",
        photoBtn: "Take Photo",
        expertBtn: "Contact Expert",
        footerAbout: "About Us",
        footerDesc: "Empowering farmers with technology to improve crop yields and farming decisions.",
        footerContact: "Contact",
        footerSupport: "Support",
        footerHours: "Available 24/7",
        footerLang: "Multiple Languages",
        footerCopy: "© 2024 Smart Agriculture Assistant. Made for farmers, by farmers.",
        emergencyTitle: "Emergency Agricultural Help",
        pestControl: "Pest Control Emergency",
        diseaseOutbreak: "Disease Outbreak",
        weatherAlert: "Weather Alert",
        expertContactTitle: "Contact Agricultural Expert",
        submitExpert: "Request Expert Call",
        langText: "हिन्दी"
    },
    hi: {
        appTitle: "🌱 स्मार्ट कृषि सहायक",
        appSubtitle: "आपका विशेषज्ञ कृषि साथी",
        heroTitle: "AI तकनीक के साथ किसानों को सशक्त बनाना",
        heroDescription: "तुरंत फसल निदान, बाजार की कीमतें और सरकारी सब्सिडी की जानकारी प्राप्त करें - सब कुछ आपकी स्थानीय भाषा में!",
        statFarmers: "सहायता प्राप्त किसान",
        statAccuracy: "निदान सटीकता",
        statSupport: "उपलब्ध",
        featuresTitle: "हमारी सेवाएं",
        diagnosisTitle: "फसल निदान",
        diagnosisDesc: "अपनी फसलों की तस्वीरें अपलोड करें और उपचार सुझावों के साथ तुरंत AI-संचालित रोग निदान प्राप्त करें।",
        diagnosisAction: "अब निदान करें →",
        marketTitle: "बाजार की कीमतें",
        marketDesc: "विभिन्न मंडियों में अपनी फसलों की वास्तविक समय की बाजार कीमतें प्राप्त करें और सूचित बिक्री निर्णय लें।",
        marketAction: "कीमतें जांचें →",
        subsidiesTitle: "सरकारी सब्सिडी",
        subsidiesDesc: "किसानों के लिए उपलब्ध सरकारी योजनाओं, सब्सिडी और वित्तीय सहायता कार्यक्रमों की खोज करें।",
        subsidiesAction: "योजनाएं देखें →",
        weatherTitle: "मौसम पूर्वानुमान",
        weatherDesc: "अपनी कृषि गतिविधियों की योजना बनाने के लिए सटीक मौसम पूर्वानुमान और कृषि सलाह प्राप्त करें।",
        weatherAction: "मौसम देखें →",
        quickTitle: "त्वरित कार्य",
        emergencyBtn: "आपातकालीन सहायता",
        photoBtn: "फोटो लें",
        expertBtn: "विशेषज्ञ से संपर्क करें",
        footerAbout: "हमारे बारे में",
        footerDesc: "फसल उत्पादन और कृषि निर्णयों में सुधार के लिए तकनीक के साथ किसानों को सशक्त बनाना।",
        footerContact: "संपर्क",
        footerSupport: "सहायता",
        footerHours: "24/7 उपलब्ध",
        footerLang: "कई भाषाएं",
        footerCopy: "© 2024 स्मार्ट कृषि सहायक। किसानों के लिए, किसानों द्वारा बनाया गया।",
        emergencyTitle: "आपातकालीन कृषि सहायता",
        pestControl: "कीट नियंत्रण आपातकाल",
        diseaseOutbreak: "रोग प्रकोप",
        weatherAlert: "मौसम चेतावनी",
        expertContactTitle: "कृषि विशेषज्ञ से संपर्क करें",
        submitExpert: "विशेषज्ञ कॉल का अनुरोध करें",
        langText: "मराठी"
    },
    mr: {
        appTitle: "🌱 स्मार्ट शेती सहाय्यक",
        appSubtitle: "तुमचा तज्ञ शेती साथीदार",
        heroTitle: "AI तंत्रज्ञानासह शेतकऱ्यांना सशक्त करणे",
        heroDescription: "तत्काळ पीक निदान, बाजार भाव आणि सरकारी अनुदान माहिती मिळवा - सर्व काही तुमच्या स्थानिक भाषेत!",
        statFarmers: "मदत केलेले शेतकरी",
        statAccuracy: "निदान अचूकता",
        statSupport: "उपलब्ध",
        featuresTitle: "आमच्या सेवा",
        diagnosisTitle: "पीक निदान",
        diagnosisDesc: "तुमच्या पिकांचे फोटो अपलोड करा आणि उपचार शिफारशींसह तत्काळ AI-चालित रोग निदान मिळवा।",
        diagnosisAction: "आता निदान करा →",
        marketTitle: "बाजार भाव",
        marketDesc: "विविध मंडींमध्ये तुमच्या पिकांचे रिअल-टाइम बाजार भाव मिळवा आणि माहितीपूर्ण विक्री निर्णय घ्या।",
        marketAction: "भाव तपासा →",
        subsidiesTitle: "सरकारी अनुदान",
        subsidiesDesc: "शेतकऱ्यांसाठी उपलब्ध सरकारी योजना, अनुदान आणि आर्थिक सहाय्य कार्यक्रम शोधा।",
        subsidiesAction: "योजना पहा →",
        weatherTitle: "हवामान अंदाज",
        weatherDesc: "तुमच्या शेती क्रियाकलापांची योजना करण्यासाठी अचूक हवामान अंदाज आणि शेती सल्ला मिळवा।",
        weatherAction: "हवामान पहा →",
        quickTitle: "त्वरित कृती",
        emergencyBtn: "आपत्कालीन मदत",
        photoBtn: "फोटो काढा",
        expertBtn: "तज्ञाशी संपर्क करा",
        footerAbout: "आमच्याबद्दल",
        footerDesc: "पीक उत्पादन आणि शेती निर्णयांमध्ये सुधारणा करण्यासाठी तंत्रज्ञानासह शेतकऱ्यांना सशक्त करणे।",
        footerContact: "संपर्क",
        footerSupport: "सहाय्य",
        footerHours: "24/7 उपलब्ध",
        footerLang: "अनेक भाषा",
        footerCopy: "© 2024 स्मार्ट शेती सहाय्यक। शेतकऱ्यांसाठी, शेतकऱ्यांनी बनवलेले।",
        emergencyTitle: "आपत्कालीन शेती मदत",
        pestControl: "कीड नियंत्रण आपत्काल",
        diseaseOutbreak: "रोग प्रसार",
        weatherAlert: "हवामान चेतावणी",
        expertContactTitle: "शेती तज्ञाशी संपर्क करा",
        submitExpert: "तज्ञ कॉलची विनंती करा",
        langText: "English"
    }
};

// Current language state
let currentLang = 'en';
const languages = ['en', 'hi', 'mr'];
let currentLangIndex = 0;

// ============================================
// BACKEND API FUNCTIONS
// ============================================

/**
 * Get Crop Recommendation from Backend
 */
async function getCropRecommendation(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/crops/recommend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                language: currentLang
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting crop recommendation:', error);
        throw error;
    }
}

/**
 * Get Soil Analysis from Backend
 */
async function getSoilAnalysis(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/soil/analyze`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                language: currentLang
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error analyzing soil:', error);
        throw error;
    }
}

/**
 * Get Fertilizer Recommendation from Backend
 */
async function getFertilizerRecommendation(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/fertilizer/recommend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                language: currentLang
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting fertilizer recommendation:', error);
        throw error;
    }
}

/**
 * Get Pest Control Information from Backend
 */
async function getPestControl(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/pest/control`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                language: currentLang
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting pest control info:', error);
        throw error;
    }
}

/**
 * Get Market Prices from Backend
 */
async function getMarketPrice(crop, location = null) {
    try {
        const response = await fetch(`${API_BASE_URL}/market/price`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                crop: crop,
                location: location,
                language: currentLang
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting market price:', error);
        throw error;
    }
}

/**
 * Get Weather Information from Backend
 */
async function getWeatherInfo(location) {
    try {
        const response = await fetch(`${API_BASE_URL}/weather/info`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                location: location,
                language: currentLang
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error getting weather info:', error);
        throw error;
    }
}

/**
 * Check Backend Health
 */
async function checkBackendHealth() {
    try {
        const response = await fetch('http://localhost:5001/health');
        const data = await response.json();
        console.log('✅ Backend is healthy:', data);
        return true;
    } catch (error) {
        console.error('❌ Backend is not responding:', error);
        return false;
    }
}

// ============================================
// EXAMPLE USAGE FUNCTIONS
// ============================================

/**
 * Example: Get crop recommendation with form data
 */
async function handleCropRecommendationForm(formData) {
    showLoading('resultContainer');
    
    try {
        const result = await getCropRecommendation({
            nitrogen: parseFloat(formData.nitrogen),
            phosphorus: parseFloat(formData.phosphorus),
            potassium: parseFloat(formData.potassium),
            temperature: parseFloat(formData.temperature),
            humidity: parseFloat(formData.humidity),
            ph: parseFloat(formData.ph),
            rainfall: parseFloat(formData.rainfall)
        });

        displayCropRecommendation(result);
    } catch (error) {
        displayError('resultContainer', error.message);
    }
}

/**
 * Example: Get soil analysis
 */
async function handleSoilAnalysisForm(formData) {
    showLoading('soilResultContainer');
    
    try {
        const result = await getSoilAnalysis({
            nitrogen: parseFloat(formData.nitrogen),
            phosphorus: parseFloat(formData.phosphorus),
            potassium: parseFloat(formData.potassium),
            ph: parseFloat(formData.ph),
            soil_type: formData.soilType
        });

        displaySoilAnalysis(result);
    } catch (error) {
        displayError('soilResultContainer', error.message);
    }
}

/**
 * Example: Get market prices for multiple crops
 */
async function loadMarketPrices() {
    const crops = ['rice', 'wheat', 'cotton', 'onion', 'potato'];
    const pricesContainer = document.getElementById('marketPrices');
    
    if (!pricesContainer) return;
    
    showLoading('marketPrices');
    
    try {
        const pricePromises = crops.map(crop => getMarketPrice(crop, 'Maharashtra'));
        const prices = await Promise.all(pricePromises);
        
        displayMarketPrices(prices);
    } catch (error) {
        displayError('marketPrices', error.message);
    }
}

// ============================================
// DISPLAY FUNCTIONS
// ============================================

function displayCropRecommendation(result) {
    const container = document.getElementById('resultContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="result-card success">
            <h3>🌾 ${currentLang === 'mr' ? 'शिफारस केलेली पिके' : currentLang === 'hi' ? 'अनुशंसित फसलें' : 'Recommended Crops'}</h3>
            <ul class="crop-list">
                ${result.recommended_crops.map(crop => `<li>✓ ${crop}</li>`).join('')}
            </ul>
            <p class="confidence">
                <strong>${currentLang === 'mr' ? 'आत्मविश्वास' : currentLang === 'hi' ? 'विश्वास' : 'Confidence'}:</strong> 
                ${(result.confidence * 100).toFixed(0)}%
            </p>
            <p class="explanation">${result.explanation}</p>
        </div>
    `;
}

function displaySoilAnalysis(result) {
    const container = document.getElementById('soilResultContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="result-card success">
            <h3>🌍 ${currentLang === 'mr' ? 'माती आरोग्य' : currentLang === 'hi' ? 'मिट्टी स्वास्थ्य' : 'Soil Health'}: ${result.soil_health}</h3>
            
            <div class="section">
                <h4>${currentLang === 'mr' ? 'कमतरता' : currentLang === 'hi' ? 'कमियां' : 'Deficiencies'}:</h4>
                <ul>
                    ${result.deficiencies.map(d => `<li>⚠️ ${d}</li>`).join('')}
                </ul>
            </div>
            
            <div class="section">
                <h4>${currentLang === 'mr' ? 'शिफारसी' : currentLang === 'hi' ? 'सिफारिशें' : 'Recommendations'}:</h4>
                <ul>
                    ${result.recommendations.map(r => `<li>✓ ${r}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function displayMarketPrices(prices) {
    const container = document.getElementById('marketPrices');
    if (!container) return;
    
    container.innerHTML = prices.map(price => `
        <div class="price-card">
            <h4>${price.crop}</h4>
            <p class="price">${price.current_price}</p>
            <p class="trend">${price.price_trend}</p>
            <p class="location">📍 ${price.location}</p>
            <p class="advisory">${price.market_advisory}</p>
        </div>
    `).join('');
}

// ============================================
// UI HELPER FUNCTIONS
// ============================================

function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '<div class="loading">⏳ Loading...</div>';
    }
}

function displayError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div class="result-card error">
                <h3>❌ Error</h3>
                <p>${message}</p>
                <p class="hint">Make sure the backend server is running on http://localhost:5001</p>
            </div>
        `;
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌾 Smart Agriculture Assistant loaded!');
    
    // Check backend health
    checkBackendHealth().then(isHealthy => {
        if (isHealthy) {
            console.log('✅ Connected to backend successfully!');
        } else {
            console.warn('⚠️ Backend is not available. Some features may not work.');
        }
    });
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && languages.includes(savedLang)) {
        currentLang = savedLang;
        currentLangIndex = languages.indexOf(currentLang);
        updateLanguage();
    }
    
    // Initialize expert form submission
    initializeExpertForm();
    
    // Add click outside modal to close
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// ============================================
// LANGUAGE FUNCTIONS
// ============================================

function toggleLanguage() {
    currentLangIndex = (currentLangIndex + 1) % languages.length;
    currentLang = languages[currentLangIndex];
    localStorage.setItem('preferredLanguage', currentLang);
    updateLanguage();
}

function updateLanguage() {
    const elements = translations[currentLang];
    
    Object.keys(elements).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = elements[key];
        }
    });
}

// ============================================
// NAVIGATION & MODAL FUNCTIONS
// ============================================

function navigateTo(page) {
    window.location.href = page;
}

function goBack() {
    window.history.back();
}

function showEmergencyHelp() {
    document.getElementById('emergencyModal').style.display = 'block';
}

function showExpertContact() {
    document.getElementById('expertModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// ============================================
// EXPERT FORM
// ============================================

function initializeExpertForm() {
    const expertForm = document.querySelector('.expert-form');
    if (expertForm) {
        expertForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('farmerName').value,
                phone: document.getElementById('farmerPhone').value,
                cropType: document.getElementById('cropType').value,
                issue: document.getElementById('issueDescription').value
            };
            
            const successMessages = {
                en: `Thank you ${formData.name}! An agricultural expert will call you within 30 minutes at ${formData.phone}.`,
                hi: `धन्यवाद ${formData.name}! एक कृषि विशेषज्ञ 30 मिनट के भीतर ${formData.phone} पर आपको कॉल करेगा।`,
                mr: `धन्यवाद ${formData.name}! एक शेती तज्ञ 30 मिनिटांत ${formData.phone} वर तुम्हाला कॉल करेल।`
            };
            
            alert(successMessages[currentLang]);
            
            closeModal('expertModal');
            expertForm.reset();
        });
    }
}

// ============================================
// IMAGE UPLOAD
// ============================================

function handleImageUpload(inputElement, previewElement) {
    const file = inputElement.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewElement.src = e.target.result;
            previewElement.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// ============================================
// EXPORT FOR GLOBAL USE
// ============================================

// Make functions available globally
window.agricultureAPI = {
    getCropRecommendation,
    getSoilAnalysis,
    getFertilizerRecommendation,
    getPestControl,
    getMarketPrice,
    getWeatherInfo,
    checkBackendHealth
};

console.log('✅ Agriculture API functions loaded. Access via window.agricultureAPI');
// Example: Crop Recommendation API
async function getCropRecommendation() {
  const response = await fetch('http://10.226.13.239:5001/api/crops/recommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nitrogen: 90,
      phosphorus: 40,
      potassium: 40,
      temperature: 25,
      humidity: 80,
      ph: 6.5,
      rainfall: 200
    })
  });

  const data = await response.json();
  console.log('Recommended Crop:', data);
}
