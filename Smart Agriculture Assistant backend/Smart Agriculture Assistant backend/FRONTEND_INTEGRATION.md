# Frontend Integration Guide
## फ्रंटएंड एकत्रीकरण मार्गदर्शक

Complete guide to connect your frontend to the Smart Agriculture Assistant Backend API.

## Backend API URL

```
http://localhost:5001/api
```

## CORS Configuration

The backend already has CORS enabled for all origins. Your frontend can make requests from any domain during development.

---

## Integration Methods

### 1. Using Fetch API (Vanilla JavaScript)

```javascript
// Example: Crop Recommendation
async function getCropRecommendation() {
  const data = {
    nitrogen: 90,
    phosphorus: 42,
    potassium: 43,
    temperature: 20.5,
    humidity: 82,
    ph: 6.5,
    rainfall: 202,
    language: 'mr'
  };

  try {
    const response = await fetch('http://localhost:5001/api/crops/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Recommended Crops:', result.recommended_crops);
    console.log('Confidence:', result.confidence);
    console.log('Explanation:', result.explanation);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
```

### 2. Using Axios (React/Vue/Angular)

First, install axios:
```bash
npm install axios
```

**React Example:**

```javascript
import axios from 'axios';
import { useState } from 'react';

const API_URL = 'http://localhost:5001/api';

function CropRecommendation() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('mr');

  const getCropRecommendation = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/crops/recommend`, {
        ...formData,
        language: language
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      nitrogen: parseFloat(e.target.nitrogen.value),
      phosphorus: parseFloat(e.target.phosphorus.value),
      potassium: parseFloat(e.target.potassium.value),
      temperature: parseFloat(e.target.temperature.value),
      humidity: parseFloat(e.target.humidity.value),
      ph: parseFloat(e.target.ph.value),
      rainfall: parseFloat(e.target.rainfall.value)
    };
    getCropRecommendation(formData);
  };

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="mr">मराठी</option>
        <option value="hi">हिंदी</option>
      </select>

      <form onSubmit={handleSubmit}>
        <input name="nitrogen" type="number" placeholder="Nitrogen" required />
        <input name="phosphorus" type="number" placeholder="Phosphorus" required />
        <input name="potassium" type="number" placeholder="Potassium" required />
        <input name="temperature" type="number" placeholder="Temperature" required />
        <input name="humidity" type="number" placeholder="Humidity" required />
        <input name="ph" type="number" step="0.1" placeholder="pH" required />
        <input name="rainfall" type="number" placeholder="Rainfall" required />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Recommendation'}
        </button>
      </form>

      {result && (
        <div>
          <h3>Recommended Crops:</h3>
          <ul>
            {result.recommended_crops.map((crop, index) => (
              <li key={index}>{crop}</li>
            ))}
          </ul>
          <p>Confidence: {(result.confidence * 100).toFixed(0)}%</p>
          <p>{result.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default CropRecommendation;
```

### 3. API Service Class (Recommended for Large Projects)

Create a service file: `services/api.js`

```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

class AgricultureAPI {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Crop Recommendation
  async getCropRecommendation(data) {
    try {
      const response = await this.api.post('/crops/recommend', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Soil Analysis
  async analyzeSoil(data) {
    try {
      const response = await this.api.post('/soil/analyze', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Fertilizer Recommendation
  async getFertilizerRecommendation(data) {
    try {
      const response = await this.api.post('/fertilizer/recommend', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Pest Control
  async getPestControl(data) {
    try {
      const response = await this.api.post('/pest/control', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Market Price
  async getMarketPrice(data) {
    try {
      const response = await this.api.post('/market/price', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Weather Information
  async getWeatherInfo(data) {
    try {
      const response = await this.api.post('/weather/info', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Error Handler
  handleError(error) {
    if (error.response) {
      // Server responded with error
      return {
        message: error.response.data.error || 'Server error',
        message_mr: error.response.data.error_mr || 'सर्व्हर त्रुटी',
        status: error.response.status
      };
    } else if (error.request) {
      // Request made but no response
      return {
        message: 'No response from server',
        message_mr: 'सर्व्हरकडून प्रतिसाद नाही'
      };
    } else {
      // Error in request setup
      return {
        message: error.message,
        message_mr: 'विनंती त्रुटी'
      };
    }
  }
}

export default new AgricultureAPI();
```

**Usage in Component:**

```javascript
import api from './services/api';

// In your component
const handleGetRecommendation = async () => {
  try {
    const result = await api.getCropRecommendation({
      nitrogen: 90,
      phosphorus: 42,
      potassium: 43,
      temperature: 20.5,
      humidity: 82,
      ph: 6.5,
      rainfall: 202,
      language: 'mr'
    });
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};
```

---

## Complete Frontend Examples

### HTML + JavaScript (Simple)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agriculture Assistant</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            background: #22c55e;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background: #16a34a;
        }
        .result {
            margin-top: 20px;
            padding: 20px;
            background: #f0fdf4;
            border-left: 4px solid #22c55e;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>🌾 Smart Agriculture Assistant</h1>
    
    <div class="form-group">
        <label>Language / भाषा:</label>
        <select id="language">
            <option value="en">English</option>
            <option value="mr">मराठी</option>
            <option value="hi">हिंदी</option>
        </select>
    </div>

    <form id="cropForm">
        <div class="form-group">
            <label>Nitrogen (kg/ha):</label>
            <input type="number" id="nitrogen" required step="0.1">
        </div>
        <div class="form-group">
            <label>Phosphorus (kg/ha):</label>
            <input type="number" id="phosphorus" required step="0.1">
        </div>
        <div class="form-group">
            <label>Potassium (kg/ha):</label>
            <input type="number" id="potassium" required step="0.1">
        </div>
        <div class="form-group">
            <label>Temperature (°C):</label>
            <input type="number" id="temperature" required step="0.1">
        </div>
        <div class="form-group">
            <label>Humidity (%):</label>
            <input type="number" id="humidity" required step="0.1">
        </div>
        <div class="form-group">
            <label>pH:</label>
            <input type="number" id="ph" required step="0.1" min="0" max="14">
        </div>
        <div class="form-group">
            <label>Rainfall (mm):</label>
            <input type="number" id="rainfall" required step="0.1">
        </div>
        <button type="submit">Get Crop Recommendation</button>
    </form>

    <div id="result"></div>

    <script>
        const API_URL = 'http://localhost:5001/api';

        document.getElementById('cropForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const data = {
                nitrogen: parseFloat(document.getElementById('nitrogen').value),
                phosphorus: parseFloat(document.getElementById('phosphorus').value),
                potassium: parseFloat(document.getElementById('potassium').value),
                temperature: parseFloat(document.getElementById('temperature').value),
                humidity: parseFloat(document.getElementById('humidity').value),
                ph: parseFloat(document.getElementById('ph').value),
                rainfall: parseFloat(document.getElementById('rainfall').value),
                language: document.getElementById('language').value
            };

            try {
                const response = await fetch(`${API_URL}/crops/recommend`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                
                document.getElementById('result').innerHTML = `
                    <div class="result">
                        <h3>Recommended Crops:</h3>
                        <ul>
                            ${result.recommended_crops.map(crop => `<li>${crop}</li>`).join('')}
                        </ul>
                        <p><strong>Confidence:</strong> ${(result.confidence * 100).toFixed(0)}%</p>
                        <p>${result.explanation}</p>
                    </div>
                `;
            } catch (error) {
                document.getElementById('result').innerHTML = `
                    <div class="result" style="background: #fee2e2; border-color: #ef4444;">
                        <p>Error: ${error.message}</p>
                    </div>
                `;
            }
        });
    </script>
</body>
</html>
```

---

## Environment Configuration

### For Development

Create `.env` file in your frontend project:

```env
REACT_APP_API_URL=http://localhost:5001/api
```

Or for Vue:
```env
VUE_APP_API_URL=http://localhost:5001/api
```

### For Production

Update to your production backend URL:
```env
REACT_APP_API_URL=https://your-backend-domain.com/api
```

---

## Testing the Connection

### 1. Start Backend Server
```bash
cd "Smart Agriculture Assistant backend"
npm run dev
```

Server should be running on `http://localhost:5001`

### 2. Test with Browser Console

Open browser console (F12) and run:

```javascript
fetch('http://localhost:5001/api/crops/recommend', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nitrogen: 90,
    phosphorus: 42,
    potassium: 43,
    temperature: 20.5,
    humidity: 82,
    ph: 6.5,
    rainfall: 202,
    language: 'mr'
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

---

## Common Issues & Solutions

### 1. CORS Error
**Error:** `Access to fetch has been blocked by CORS policy`

**Solution:** CORS is already enabled in your backend. If you still face issues, check if backend is running.

### 2. Network Error
**Error:** `Failed to fetch` or `Network Error`

**Solution:** 
- Ensure backend is running on port 5001
- Check firewall settings
- Verify the URL is correct

### 3. 404 Not Found
**Error:** `404 Not Found`

**Solution:**
- Check the endpoint URL
- Ensure you're using `/api/` prefix
- Verify route exists in backend

### 4. 400 Bad Request
**Error:** `Missing required fields`

**Solution:**
- Check all required fields are sent
- Verify data types (numbers should be parsed)
- Check field names match exactly

---

## Quick Start Checklist

- [ ] Backend server is running on port 5001
- [ ] Test health endpoint: `http://localhost:5001/health`
- [ ] CORS is enabled (already done)
- [ ] Frontend has correct API URL
- [ ] All required fields are sent in requests
- [ ] Error handling is implemented
- [ ] Language parameter is included

---

## Next Steps

1. **Create your frontend** using React, Vue, Angular, or plain HTML/JS
2. **Use the API service class** for clean code organization
3. **Implement error handling** for better user experience
4. **Add loading states** while waiting for API responses
5. **Test all endpoints** before deployment

---

**Need Help?**

Check the `README.md` and `API_TESTING.md` files for more details about API endpoints and testing.

**Happy Coding! 🚀**
