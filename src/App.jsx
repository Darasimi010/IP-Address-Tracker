import { useEffect, useState } from "react";
import "./App.css";
import MapSection from "./components/MapSection";
import SearchSection from "./components/SearchSection";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function App() {
  const [ipData, setIpData] = useState(null);
  const [query, setQuery] = useState("");

  const fetchIpData = async (ip = "") => {
    const apiKey = import.meta.env.VITE_IPIFY_API_KEY;
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
    const response = await fetch(url);
    const data = await response.json();
    setIpData(data);
  };

  useEffect(() => {
    fetchIpData();
  }, []);

  return (
    <>
      <SearchSection
        query={query}
        setQuery={setQuery}
        fetchIpData={fetchIpData}
      />
      <MapSection
        ipData={ipData}
        MapContainer={MapContainer}
        TileLayer={TileLayer}
        Marker={Marker}
        Popup={Popup}
      />
    </>
  );
}

export default App;
