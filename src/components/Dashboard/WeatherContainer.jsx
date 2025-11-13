import { useEffect, useState } from "react";
import useWeather from "../../hooks/useWeather";
import WeatherCard from "./WeatherCard";

export default function WeatherContainer() {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState("");

  // Get GPS location on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
        setError("Location access denied. Using default location (Hubli–Dharwad).");

        // Default if user denies location
        setCoords({
          lat: 15.3647,
          lon: 75.1240,
        });
      }
    );
  }, []);

  // Wait for GPS permissions
  if (!coords) return <p className="text-center">Detecting your location…</p>;

  const { lat, lon } = coords;
  const { weather, loading } = useWeather(lat, lon);

  if (loading) return <p className="text-center">Fetching weather…</p>;
  if (!weather) return <p>Error loading weather</p>;

  return (
    <div>
      {error && (
        <p className="text-red-500 text-center mb-2 text-sm">{error}</p>
      )}
      <WeatherCard weather={weather} />
    </div>
  );
}
