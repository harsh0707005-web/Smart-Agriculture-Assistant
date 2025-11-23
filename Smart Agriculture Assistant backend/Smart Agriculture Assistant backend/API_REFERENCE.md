# Complete API Reference
## सर्व API संदर्भ

Total APIs: **19** (6 Backend + 13 Frontend)

---

## 🔧 Configuration

```javascript
const BACKEND_IP = 'localhost'; // or '10.226.13.239' for network
const BACKEND_PORT = '5001';
```

---

## ✅ EXISTING BACKEND APIs (6)

### 1. Crop Recommendation
```javascript
await window.agricultureAPI.getCropRecommendation({
    nitrogen: 90,
    phosphorus: 42,
    potassium: 43,
    temperature: 20.5,
    humidity: 82,
    ph: 6.5,
    rainfall: 202
});
```
**Endpoint:** `POST /api/crops/recommend`

### 2. Soil Analysis
```javascript
await window.agricultureAPI.getSoilAnalysis({
    nitrogen: 45,
    phosphorus: 25,
    potassium: 35,
    ph: 5.8,
    soil_type: 'clay'
});
```
**Endpoint:** `POST /api/soil/analyze`

### 3. Fertilizer Recommendation
```javascript
await window.agricultureAPI.getFertilizerRecommendation({
    crop: 'rice',
    soil_type: 'loamy',
    nitrogen: 50,
    phosphorus: 40,
    potassium: 45,
    growth_stage: 'vegetative'
});
```
**Endpoint:** `POST /api/fertilizer/recommend`

### 4. Pest Control
```javascript
await window.agricultureAPI.getPestControl({
    crop: 'cotton',
    pest_description: 'white insects on leaves'
});
```
**Endpoint:** `POST /api/pest/control`

### 5. Market Price
```javascript
await window.agricultureAPI.getMarketPrice('rice', 'Maharashtra');
```
**Endpoint:** `POST /api/market/price`

### 6. Weather Information
```javascript
await window.agricultureAPI.getWeatherInfo('Mumbai');
```
**Endpoint:** `POST /api/weather/info`

---

## 🆕 NEW FRONTEND APIs (13)

### 7. Analyze Crop Image
```javascript
const formData = new FormData();
formData.append('image', fileInput.files[0]);
await window.agricultureAPI.analyzeCropImage(formData);
```
**Endpoint:** `POST /crop-diagnosis`

### 8. Contact Expert
```javascript
await window.agricultureAPI.contactExpertAPI({
    name: 'Farmer Name',
    phone: '9876543210',
    cropType: 'Rice',
    issue: 'Pest problem'
});
```
**Endpoint:** `POST /contact-expert`

### 9. Nearby Stores
```javascript
await window.agricultureAPI.getNearbyStores(12.9716, 77.5946);
```
**Endpoint:** `GET /nearby-stores?lat={lat}&lon={lon}`

### 10. Common Crop Issues
```javascript
await window.agricultureAPI.getCommonCropIssues();
```
**Endpoint:** `GET /common-issues`

### 11. All Government Schemes
```javascript
await window.agricultureAPI.getAllSchemes();
```
**Endpoint:** `GET /schemes`

### 12. Schemes by Category
```javascript
await window.agricultureAPI.getSchemesByCategory('subsidy');
```
**Endpoint:** `GET /schemes?category={type}`

### 13. Apply for Scheme
```javascript
await window.agricultureAPI.applyForScheme({
    farmerId: '12345',
    schemeId: 'PM-KISAN',
    documents: []
});
```
**Endpoint:** `POST /apply-scheme`

### 14. Check Eligibility
```javascript
await window.agricultureAPI.checkSchemeEligibility({
    farmerId: '12345',
    landSize: 2.5,
    income: 50000
});
```
**Endpoint:** `POST /eligibility`

### 15. Market Prices (List)
```javascript
await window.agricultureAPI.getMarketPrices();
```
**Endpoint:** `GET /market-prices`

### 16. Search Market Prices
```javascript
await window.agricultureAPI.searchMarketPrices('tomato');
```
**Endpoint:** `GET /market-prices/search?query={query}`

### 17. Price Trends
```javascript
await window.agricultureAPI.getPriceTrends('rice');
```
**Endpoint:** `GET /price-trends?crop={cropName}`

### 18. Set Price Alert
```javascript
await window.agricultureAPI.setPriceAlert({
    crop: 'onion',
    targetPrice: 2000,
    phone: '9876543210'
});
```
**Endpoint:** `POST /price-alert`

### 19. Market News
```javascript
await window.agricultureAPI.getMarketNews();
```
**Endpoint:** `GET /market-news`

---

## 🌐 Language Support

All APIs automatically use the current language:
- `en` - English
- `hi` - Hindi (हिंदी)
- `mr` - Marathi (मराठी)

Change language:
```javascript
toggleLanguage(); // Cycles through languages
```

---

## 🔍 Health Check

```javascript
const isHealthy = await window.agricultureAPI.checkBackendHealth();
```
**Endpoint:** `GET /health`

---

## 📝 Usage in HTML

```html
<script src="script.js"></script>
<script>
    // Use any API
    async function loadData() {
        const crops = await window.agricultureAPI.getCropRecommendation({
            nitrogen: 90,
            phosphorus: 42,
            potassium: 43,
            temperature: 20.5,
            humidity: 82,
            ph: 6.5,
            rainfall: 202
        });
        console.log(crops);
    }
</script>
```

---

## ⚠️ Important Notes

1. **Backend must be running** on port 5001
2. **CORS is enabled** for all origins
3. **All POST requests** require `Content-Type: application/json`
4. **Image uploads** use `FormData` (no Content-Type header)
5. **Language is automatic** based on `currentLang` variable

---

## 🚀 Quick Start

1. Start backend:
```bash
npm run dev
```

2. Include script in HTML:
```html
<script src="script.js"></script>
```

3. Use APIs:
```javascript
window.agricultureAPI.getCropRecommendation(data);
```

---

**Total: 19 API Functions Ready to Use! 🎉**
