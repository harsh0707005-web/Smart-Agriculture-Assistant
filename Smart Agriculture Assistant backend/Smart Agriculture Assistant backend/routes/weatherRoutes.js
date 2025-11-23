import express from "express";
const router = express.Router();

// GET: Provide weather info for a given location (old endpoint)
router.get("/:location", (req, res) => {
  try {
    const { location } = req.params;

    if (!location) {
      return res.status(400).json({ 
        error: "location is required" 
      });
    }

    // Demo weather data
    const weatherData = {
      location,
      temperature: 31,
      humidity: 68,
      condition: "Sunny",
    };

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", message: error.message });
  }
});

// GET: Weather data for frontend (new endpoint)
router.get("/", (req, res) => {
  try {
    const weatherData = {
      current: {
        temperature: 28,
        humidity: 65,
        rainfall: 0,
        windSpeed: 12,
        condition: "Partly Cloudy"
      },
      forecast: [
        { day: "Today", temp: "28°C", condition: "Partly Cloudy", rain: "10%" },
        { day: "Tomorrow", temp: "30°C", condition: "Sunny", rain: "5%" },
        { day: "Day 3", temp: "26°C", condition: "Rainy", rain: "80%" },
        { day: "Day 4", temp: "24°C", condition: "Cloudy", rain: "40%" },
        { day: "Day 5", temp: "29°C", condition: "Sunny", rain: "0%" }
      ],
      advisory: "Good conditions for spraying pesticides. Avoid irrigation for next 2 days due to expected rainfall."
    };

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", message: error.message });
  }
});

export default router;
