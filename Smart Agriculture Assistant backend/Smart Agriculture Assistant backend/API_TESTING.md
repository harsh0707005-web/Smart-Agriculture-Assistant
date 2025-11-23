# API Testing Guide
## API चाचणी मार्गदर्शक

Quick guide to test all API endpoints.

## Prerequisites

1. Server should be running on `http://localhost:5001`
2. Use Postman, cURL, or any HTTP client

## Test Endpoints

### 1. Health Check
```bash
curl http://localhost:5001/health
```

### 2. Root Endpoint
```bash
curl http://localhost:5001/
```

### 3. Crop Recommendation (English)
```bash
curl -X POST http://localhost:5001/api/crops/recommend \
  -H "Content-Type: application/json" \
  -d '{
    "nitrogen": 90,
    "phosphorus": 42,
    "potassium": 43,
    "temperature": 20.5,
    "humidity": 82,
    "ph": 6.5,
    "rainfall": 202,
    "language": "en"
  }'
```

### 4. Crop Recommendation (Marathi)
```bash
curl -X POST http://localhost:5001/api/crops/recommend \
  -H "Content-Type: application/json" \
  -d '{
    "nitrogen": 90,
    "phosphorus": 42,
    "potassium": 43,
    "temperature": 20.5,
    "humidity": 82,
    "ph": 6.5,
    "rainfall": 202,
    "language": "mr"
  }'
```

### 5. Soil Analysis
```bash
curl -X POST http://localhost:5001/api/soil/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "nitrogen": 45,
    "phosphorus": 25,
    "potassium": 35,
    "ph": 5.8,
    "soil_type": "clay",
    "language": "mr"
  }'
```

### 6. Fertilizer Recommendation
```bash
curl -X POST http://localhost:5001/api/fertilizer/recommend \
  -H "Content-Type: application/json" \
  -d '{
    "crop": "rice",
    "soil_type": "loamy",
    "nitrogen": 50,
    "phosphorus": 40,
    "potassium": 45,
    "growth_stage": "vegetative",
    "language": "mr"
  }'
```

### 7. Pest Control
```bash
curl -X POST http://localhost:5001/api/pest/control \
  -H "Content-Type: application/json" \
  -d '{
    "crop": "cotton",
    "pest_description": "white insects",
    "language": "mr"
  }'
```

### 8. Market Price
```bash
curl -X POST http://localhost:5001/api/market/price \
  -H "Content-Type: application/json" \
  -d '{
    "crop": "onion",
    "location": "Pune",
    "language": "mr"
  }'
```

### 9. Weather Information
```bash
curl -X POST http://localhost:5001/api/weather/info \
  -H "Content-Type: application/json" \
  -d '{
    "location": "Mumbai",
    "language": "mr"
  }'
```

## Postman Collection

You can import these as a Postman collection:

1. Open Postman
2. Click Import
3. Copy and paste the following JSON:

```json
{
  "info": {
    "name": "Smart Agriculture API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Crop Recommendation",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"nitrogen\": 90,\n  \"phosphorus\": 42,\n  \"potassium\": 43,\n  \"temperature\": 20.5,\n  \"humidity\": 82,\n  \"ph\": 6.5,\n  \"rainfall\": 202,\n  \"language\": \"mr\"\n}"
        },
        "url": {"raw": "http://localhost:5001/api/crops/recommend"}
      }
    },
    {
      "name": "Soil Analysis",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"nitrogen\": 45,\n  \"phosphorus\": 25,\n  \"potassium\": 35,\n  \"ph\": 5.8,\n  \"soil_type\": \"clay\",\n  \"language\": \"mr\"\n}"
        },
        "url": {"raw": "http://localhost:5001/api/soil/analyze"}
      }
    }
  ]
}
```

## Expected Response Times

- Health Check: < 10ms
- Crop Recommendation: < 50ms
- Soil Analysis: < 50ms
- Other endpoints: < 100ms

## Common Issues

### Port Already in Use
```bash
# Kill process on port 5000
npx kill-port 5000
```

### CORS Error
- Make sure CORS is enabled in server.js
- Check if frontend is making requests to correct URL

### Module Not Found
```bash
# Reinstall dependencies
npm install
```

## Success Criteria

✅ All endpoints return 200 status code
✅ Responses are in correct language
✅ Data validation works (400 for missing fields)
✅ Error messages are bilingual
✅ Server handles concurrent requests

---

Happy Testing! 🧪
