async function getWeather(location) {
  try {
    const res = await fetch(`${API_BASE}/api/weather/${encodeURIComponent(location)}`);
    if (!res.ok) throw new Error("Failed to fetch weather data");

    const data = await res.json();

    if (data.temperature) {
      console.log(`🌤 Weather in ${location}:`);
      console.log(`Temperature: ${data.temperature}°C`);
      console.log(`Humidity: ${data.humidity}%`);
      console.log(`Condition: ${data.condition}`);
      return data;
    } else {
      console.log("⚠ No weather info available");
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
  return null;
}