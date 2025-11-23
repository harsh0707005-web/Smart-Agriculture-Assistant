import express from "express";
const router = express.Router();

// GET: Get market prices (old endpoint)
router.get("/prices", (req, res) => {
  try {
    const prices = [
      { crop: "Rice", pricePerQuintal: 2800 },
      { crop: "Wheat", pricePerQuintal: 2400 },
      { crop: "Maize", pricePerQuintal: 2200 },
    ];

    res.json({ prices });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", message: error.message });
  }
});

// GET: Get market prices (new endpoint for frontend)
router.get("/market-prices", (req, res) => {
  try {
    const marketPrices = {
      tomato: { price: 25, change: +5, market: "Bangalore APMC" },
      onion: { price: 18, change: -2, market: "Mysore Mandi" },
      potato: { price: 22, change: +3, market: "Hassan Market" },
      rice: { price: 2800, change: +50, market: "Mandya APMC" },
      wheat: { price: 2200, change: -30, market: "Tumkur Mandi" }
    };

    res.json(marketPrices);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", message: error.message });
  }
});

export default router;
