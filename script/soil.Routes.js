// Use shared API_BASE if available, otherwise default to backend IP
const API_BASE = (typeof window !== 'undefined' && window.CONFIG) ? 
  `http://${window.CONFIG.BACKEND_IP}:${window.CONFIG.BACKEND_PORT}` : 
  'http://10.98.15.239:5001';

async function analyzeSoil(ph, organicCarbon) {
  try {
    const res = await fetch(`${API_BASE}/api/soil/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ph, organicCarbon }),
    });

    if (!res.ok) throw new Error("Failed to analyze soil");

    const data = await res.json();

    if (data.soilQuality) {
      console.log("✅ Soil Quality:", data.soilQuality);
      return data.soilQuality;
    } else {
      console.log("⚠ No soil analysis result found");
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
  return null;
}