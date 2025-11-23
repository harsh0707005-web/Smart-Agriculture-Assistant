import express from "express";
const router = express.Router();

// POST: Recommend crop based on soil nutrients
router.post("/recommend", (req, res) => {
  try {
    const { nitrogen, phosphorus } = req.body;

    // Validation
    if (nitrogen === undefined || phosphorus === undefined) {
      return res.status(400).json({ 
        error: "nitrogen and phosphorus are required" 
      });
    }

    if (typeof nitrogen !== 'number' || typeof phosphorus !== 'number') {
      return res.status(400).json({ 
        error: "nitrogen and phosphorus must be numbers" 
      });
    }

    // Simple demo logic
    let recommendedCrop = "Rice";
    if (nitrogen < 20 && phosphorus < 15) recommendedCrop = "Wheat";
    else if (nitrogen > 60 && phosphorus > 30) recommendedCrop = "Maize";

    res.json({ recommendedCrop });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", message: error.message });
  }
});

export default router;
