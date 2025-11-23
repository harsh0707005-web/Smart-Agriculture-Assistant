import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // 👈 Added for MongoDB


// Import routes
import cropRoutes from "./routes/cropRoutes.js";
import fertilizerRoutes from "./routes/fertilizerRoutes.js";
import marketRoutes from "./routes/marketRoutes.js";
import pestRoutes from "./routes/pestRoutes.js";
import soilRoutes from "./routes/soilRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();

// CORS Configuration - Allow all origins
app.use(cors({
  origin: '*', // Allow all origins (for development)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// 🔗 MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/smartAgri")
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 🌾 All API routes
app.use("/api/crop", cropRoutes);
app.use("/api/fertilizer", fertilizerRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/pest", pestRoutes);
app.use("/api/soil", soilRoutes);
app.use("/api/weather", weatherRoutes);

// 🔬 Disease Detection Endpoint (Image Upload)
app.post("/detect", (req, res) => {
  try {
    // For now, return demo response
    // In production, this would use ML model for disease detection
    const diseaseData = {
      disease: "Early Blight",
      confidence: 0.87,
      severity: "Moderate",
      treatment: "Apply copper-based fungicide. Remove affected leaves. Ensure proper spacing.",
      prevention: "Crop rotation, resistant varieties, proper irrigation",
      symptoms: ["Dark spots with concentric rings", "Yellowing leaves", "Leaf drop"],
      affected_crops: ["Tomato", "Potato", "Pepper"]
    };
    
    res.json(diseaseData);
  } catch (error) {
    res.status(500).json({ 
      error: "Internal server error", 
      message: error.message 
    });
  }
});

// 🚀 Start server
const PORT = 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
