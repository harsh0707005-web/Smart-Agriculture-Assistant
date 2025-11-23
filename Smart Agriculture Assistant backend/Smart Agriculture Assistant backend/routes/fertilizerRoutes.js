import express from "express";
const router = express.Router();

// POST: Recommend fertilizer based on crop and soil nutrients
router.post("/recommend", (req, res) => {
  try {
    const { crop, nitrogen, phosphorus, potassium } = req.body;

    // Validation
    if (!crop) {
      return res.status(400).json({ 
        error: "crop is required" 
      });
    }

    if (nitrogen === undefined || phosphorus === undefined || potassium === undefined) {
      return res.status(400).json({ 
        error: "nitrogen, phosphorus, and potassium are required" 
      });
    }

    if (typeof nitrogen !== 'number' || typeof phosphorus !== 'number' || typeof potassium !== 'number') {
      return res.status(400).json({ 
        error: "nitrogen, phosphorus, and potassium must be numbers" 
      });
    }

    let recommendedFertilizer = "Urea";
    if (crop === "Rice") recommendedFertilizer = "DAP";
    else if (crop === "Wheat") recommendedFertilizer = "NPK 10:26:26";

    res.json({ recommendedFertilizer });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", message: error.message });
  }
});

export default router;
