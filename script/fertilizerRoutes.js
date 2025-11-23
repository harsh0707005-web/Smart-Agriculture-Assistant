// Use shared API_BASE if available, otherwise default to backend IP
const API_BASE = (typeof window !== 'undefined' && window.CONFIG) ? 
  `http://${window.CONFIG.BACKEND_IP}:${window.CONFIG.BACKEND_PORT}` : 
  'http://10.175.34.239:5001';

async function getFertilizerRecommendation(crop, nitrogen, phosphorus, potassium) {
  try {
    const res = await fetch(`${API_BASE}/api/fertilizer/recommend`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ crop, nitrogen, phosphorus, potassium }),
    });

    if (!res.ok) throw new Error("Failed to fetch fertilizer recommendation");

    const data = await res.json();

    if (data.recommendedFertilizer) {
      console.log(`Fertilizer for ${crop}:`, data.recommendedFertilizer);
      return data.recommendedFertilizer;
    } else {
      console.log("⚠ No fertilizer recommendation received");
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
  return null;
}