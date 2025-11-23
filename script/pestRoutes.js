// Use shared API_BASE if available, otherwise default to backend IP
const API_BASE = (typeof window !== 'undefined' && window.CONFIG) ? 
  `http://${window.CONFIG.BACKEND_IP}:${window.CONFIG.BACKEND_PORT}` : 
  'http://10.98.15.239:5001';

async function detectPest(crop, symptoms) {
  try {
    const res = await fetch(`${API_BASE}/api/pest/detect`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ crop, symptoms }),
    });

    if (!res.ok) throw new Error("Failed to detect pest");

    const data = await res.json();

    if (data.pest && data.pest !== "No pest detected") {
      console.log(`🐛 Pest detected in ${crop}:`, data.pest);
      return data.pest;
    } else {
      console.log("✅ No pest found");
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
  return null;
}