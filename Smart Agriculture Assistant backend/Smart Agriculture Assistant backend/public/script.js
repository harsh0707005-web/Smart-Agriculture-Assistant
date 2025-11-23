// ----------------------------
// Backend Configuration
// ----------------------------
const BACKEND_IP = 'localhost'; // Change to '10.226.13.239' for network access
const BACKEND_PORT = '5001';
const API_BASE_URL = `http://${BACKEND_IP}:${BACKEND_PORT}/api`;

function apiUrl(path) {
    return `http://${BACKEND_IP}:${BACKEND_PORT}${path}`;
}

// ----------------------------
// 🌾 EXISTING BACKEND APIs (6)
// ----------------------------

// 1. Crop Recommendation
async function getCropRecommendation(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/crops/recommend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, language: currentLang })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting crop recommendation:', error);
        throw error;
    }
}

// 2. Soil Analysis
async function getSoilAnalysis(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/soil/analyze`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, language: currentLang })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error analyzing soil:', error);
        throw error;
    }
}

// 3. Fertilizer Recommendation
async function getFertilizerRecommendation(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/fertilizer/recommend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, language: currentLang })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting fertilizer recommendation:', error);
        throw error;
    }
}

// 4. Pest Control
async function getPestControl(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/pest/control`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, language: currentLang })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting pest control info:', error);
        throw error;
    }
}

// 5. Market Price
async function getMarketPrice(crop, location = null) {
    try {
        const response = await fetch(`${API_BASE_URL}/market/price`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ crop, location, language: currentLang })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting market price:', error);
        throw error;
    }
}

// 6. Weather Information
async function getWeatherInfo(location) {
    try {
        const response = await fetch(`${API_BASE_URL}/weather/info`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location, language: currentLang })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting weather info:', error);
        throw error;
    }
}

// ----------------------------
// 🌾 NEW FRONTEND APIs (13)
// ----------------------------

// 1️⃣ Crop Diagnosis - Analyze uploaded crop image
async function analyzeCropImage(formData) {
    try {
        const res = await fetch(apiUrl('/crop-diagnosis'), {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        console.log("Crop Diagnosis Result:", data);
        return data;
    } catch (err) {
        console.error("Error analyzing crop:", err);
        throw err;
    }
}

// 2️⃣ Contact Expert - Connect farmer to expert
async function contactExpertAPI(farmerData) {
    try {
        const res = await fetch(apiUrl('/contact-expert'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(farmerData)
        });
        const data = await res.json();
        console.log("Expert Contact:", data);
        return data;
    } catch (err) {
        console.error("Error contacting expert:", err);
        throw err;
    }
}

// 3️⃣ Nearby Stores - Find agricultural supply stores
async function getNearbyStores(lat, lon) {
    try {
        const res = await fetch(apiUrl(`/nearby-stores?lat=${lat}&lon=${lon}`));
        const data = await res.json();
        console.log("Nearby Stores:", data);
        return data;
    } catch (err) {
        console.error("Error fetching stores:", err);
        throw err;
    }
}

// 4️⃣ Common Issues - Get list of common crop issues
async function getCommonCropIssues() {
    try {
        const res = await fetch(apiUrl('/common-issues'));
        const data = await res.json();
        console.log("Common Crop Issues:", data);
        return data;
    } catch (err) {
        console.error("Error fetching common issues:", err);
        throw err;
    }
}

// 5️⃣ All Schemes - Fetch government schemes
async function getAllSchemes() {
    try {
        const res = await fetch(apiUrl('/schemes'));
        const data = await res.json();
        console.log("All Schemes:", data);
        return data;
    } catch (err) {
        console.error("Error fetching schemes:", err);
        throw err;
    }
}

// 6️⃣ Schemes by Category - Filter schemes
async function getSchemesByCategory(type) {
    try {
        const res = await fetch(apiUrl(`/schemes?category=${type}`));
        const data = await res.json();
        console.log(`Schemes in Category (${type}):`, data);
        return data;
    } catch (err) {
        console.error("Error fetching category schemes:", err);
        throw err;
    }
}

// 7️⃣ Apply Scheme - Submit application
async function applyForScheme(schemeData) {
    try {
        const res = await fetch(apiUrl('/apply-scheme'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(schemeData)
        });
        const data = await res.json();
        console.log("Scheme Application Response:", data);
        return data;
    } catch (err) {
        console.error("Error applying for scheme:", err);
        throw err;
    }
}

// 8️⃣ Check Eligibility - Verify farmer eligibility
async function checkSchemeEligibility(farmerInfo) {
    try {
        const res = await fetch(apiUrl('/eligibility'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(farmerInfo)
        });
        const data = await res.json();
        console.log("Eligibility Result:", data);
        return data;
    } catch (err) {
        console.error("Error checking eligibility:", err);
        throw err;
    }
}

// 9️⃣ Market Prices - Get live prices
async function getMarketPrices() {
    try {
        const res = await fetch(apiUrl('/market-prices'));
        const data = await res.json();
        console.log("Market Prices:", data);
        return data;
    } catch (err) {
        console.error("Error fetching market prices:", err);
        throw err;
    }
}

// 🔟 Search Market Prices - Search by name/market
async function searchMarketPrices(query) {
    try {
        const res = await fetch(apiUrl(`/market-prices/search?query=${query}`));
        const data = await res.json();
        console.log("Search Market Prices:", data);
        return data;
    } catch (err) {
        console.error("Error searching market prices:", err);
        throw err;
    }
}

// 11️⃣ Price Trends - Get historical trends
async function getPriceTrends(cropName) {
    try {
        const res = await fetch(apiUrl(`/price-trends?crop=${cropName}`));
        const data = await res.json();
        console.log("Price Trends:", data);
        return data;
    } catch (err) {
        console.error("Error fetching price trends:", err);
        throw err;
    }
}

// 12️⃣ Price Alert - Set notifications
async function setPriceAlert(alertData) {
    try {
        const res = await fetch(apiUrl('/price-alert'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(alertData)
        });
        const data = await res.json();
        console.log("Price Alert Set:", data);
        return data;
    } catch (err) {
        console.error("Error setting price alert:", err);
        throw err;
    }
}

// 13️⃣ Market News - Fetch agricultural news
async function getMarketNews() {
    try {
        const res = await fetch(apiUrl('/market-news'));
        const data = await res.json();
        console.log("Market News:", data);
        return data;
    } catch (err) {
        console.error("Error fetching market news:", err);
        throw err;
    }
}

// ----------------------------
// Backend Health Check
// ----------------------------
async function checkBackendHealth() {
    try {
        const response = await fetch(`http://${BACKEND_IP}:${BACKEND_PORT}/health`);
        const data = await response.json();
        console.log('✅ Backend is healthy:', data);
        return true;
    } catch (error) {
        console.error('❌ Backend is not responding:', error);
        return false;
    }
}

// ----------------------------
// Language Translations
// ----------------------------
const translations = {
    en: {
        appTitle: "🌱 Smart Agriculture Assistant",
        appSubtitle: "Your Expert Farming Companion",
        heroTitle: "Empowering Farmers with AI Technology",
        heroDescription: "Get instant crop diagnosis, market prices, and government subsidy information!",
        langText: "हिन्दी"
    },
    hi: {
        appTitle: "🌱 स्मार्ट कृषि सहायक",
        appSubtitle: "आपका विशेषज्ञ कृषि साथी",
        heroTitle: "AI तकनीक के साथ किसानों को सशक्त बनाना",
        heroDescription: "तुरंत फसल निदान, बाजार की कीमतें और सरकारी सब्सिडी की जानकारी प्राप्त करें!",
        langText: "मराठी"
    },
    mr: {
        appTitle: "🌱 स्मार्ट शेती सहाय्यक",
        appSubtitle: "तुमचा तज्ञ शेती साथीदार",
        heroTitle: "AI तंत्रज्ञानासह शेतकऱ्यांना सशक्त करणे",
        heroDescription: "तत्काळ पीक निदान, बाजार भाव आणि सरकारी अनुदान माहिती मिळवा!",
        langText: "English"
    }
};

// Current language state
let currentLang = 'en';
const languages = ['en', 'hi', 'mr'];
let currentLangIndex = 0;

// ----------------------------
// Initialization
// ----------------------------
document.addEventListener('DOMContentLoaded', function () {
    console.log('🌾 Smart Agriculture Assistant loaded!');
    
    // Check backend health
    checkBackendHealth();
    
    // Load saved language
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && languages.includes(savedLang)) {
        currentLang = savedLang;
        currentLangIndex = languages.indexOf(currentLang);
        updateLanguage();
    }
    
    initializeExpertForm();
    
    // Modal close on outside click
    window.onclick = function (event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) modal.style.display = 'none';
        });
    };
});

// ----------------------------
// Language Functions
// ----------------------------
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
        if (element) element.textContent = elements[key];
    });
}

// ----------------------------
// Expert Form
// ----------------------------
function initializeExpertForm() {
    const expertForm = document.querySelector('.expert-form');
    if (expertForm) {
        expertForm.addEventListener('submit', function (e) {
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

// ----------------------------
// UI Helper Functions
// ----------------------------
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) element.innerHTML = '<div class="loading">⏳ Loading...</div>';
}

function hideLoading(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) element.innerHTML = content;
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

function handleImageUpload(inputElement, previewElement) {
    const file = inputElement.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewElement.src = e.target.result;
            previewElement.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function navigateTo(page) {
    window.location.href = page;
}

function goBack() {
    window.history.back();
}

// ----------------------------
// Export All APIs Globally
// ----------------------------
window.agricultureAPI = {
    // Existing Backend APIs (6)
    getCropRecommendation,
    getSoilAnalysis,
    getFertilizerRecommendation,
    getPestControl,
    getMarketPrice,
    getWeatherInfo,
    
    // New Frontend APIs (13)
    analyzeCropImage,
    contactExpertAPI,
    getNearbyStores,
    getCommonCropIssues,
    getAllSchemes,
    getSchemesByCategory,
    applyForScheme,
    checkSchemeEligibility,
    getMarketPrices,
    searchMarketPrices,
    getPriceTrends,
    setPriceAlert,
    getMarketNews,
    
    // Utility
    checkBackendHealth
};

console.log('✅ All 19 API functions loaded! Access via window.agricultureAPI');
console.log('📡 Backend:', `http://${BACKEND_IP}:${BACKEND_PORT}`);
