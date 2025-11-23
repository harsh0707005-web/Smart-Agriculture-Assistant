import express from "express";
const router = express.Router();

// POST: Analyze soil quality
router.post("/analyze", (req, res) => {
  try {
    const { ph, organicCarbon } = req.body;

    // Validation
    if (ph === undefined || organicCarbon === undefined) {
      return res.status(400).json({ 
        error: "pH and organicCarbon are required" 
      });
    }

    if (typeof ph !== 'number' || typeof organicCarbon !== 'number') {
      return res.status(400).json({ 
        error: "pH and organicCarbon must be numbers" 
      });
    }

    let soilQuality = "Moderate";
    if (ph >= 6.5 && ph <= 7.5 && organicCarbon > 0.75) soilQuality = "Good";
    else if (ph < 6.0) soilQuality = "Acidic";

    res.json({ soilQuality });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", message: error.message });
  }
});

export default router;
