import express from "express";
const router = express.Router();

// POST: Detect pest type from crop and symptoms
router.post("/detect", (req, res) => {
  try {
    const { crop, symptoms } = req.body;

    // Validation
    if (!crop || !symptoms) {
      return res.status(400).json({ 
        error: "crop and symptoms are required" 
      });
    }

    if (!Array.isArray(symptoms)) {
      return res.status(400).json({ 
        error: "symptoms must be an array" 
      });
    }

    let pest = "No pest detected";
    if (crop === "Rice" && symptoms.includes("brown spots")) pest = "Brown Planthopper";
    else if (crop === "Wheat" && symptoms.includes("yellowing")) pest = "Aphids";

    res.json({ pest });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", message: error.message });
  }
});

export default router;
