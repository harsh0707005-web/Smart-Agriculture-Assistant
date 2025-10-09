// Use shared API_BASE if available, otherwise default to localhost
const API_BASE = (typeof window !== 'undefined' && window.api && window.api.API_BASE) ? window.api.API_BASE : 'http://localhost:5001';

async function getRecommendedCrop(nitrogen, phosphorus) {
  try {
    const res = await fetch(`${API_BASE}/api/crop/recommend`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nitrogen, phosphorus }),
    });

    if (!res.ok) throw new Error("Failed to fetch crop recommendation");

    const data = await res.json();

    if (data.recommendedCrop) {
      console.log("✅ Recommended Crop:", data.recommendedCrop);
      return data.recommendedCrop;
    } else {
      console.log("⚠ No recommendation received");
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
  return null;
}