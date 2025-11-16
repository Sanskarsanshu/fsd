import axios from "axios";

export const getUserLocation = async () => {
  try {
    const res = await axios.get("https://ipapi.co/json/");
    return {
      city: res.data.city,
      state: res.data.region,
      lat: res.data.latitude,
      lon: res.data.longitude
    };
  } catch (err) {
    console.error("Location API error:", err);
    return null;
  }
};
