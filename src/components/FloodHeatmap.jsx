import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import { faL } from "@fortawesome/free-solid-svg-icons";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const locations = [
  { name: "Agusan", lat: 8.484, lon: 124.648 },
  { name: "Baikingon", lat: 8.456, lon: 124.603 },
  { name: "Balulang", lat: 8.458, lon: 124.632 },
  { name: "Bayabas", lat: 8.477, lon: 124.611 },
  { name: "Bayanga", lat: 8.39, lon: 124.68 },
  { name: "Bonbon", lat: 8.462, lon: 124.618 },
  { name: "Bugo", lat: 8.504, lon: 124.698 },
  { name: "Bulua", lat: 8.474, lon: 124.582 },
  { name: "Camaman-an", lat: 8.472, lon: 124.651 },
  { name: "Canitoan", lat: 8.472, lon: 124.599 },
  { name: "Carmen", lat: 8.482, lon: 124.636 },
  { name: "Consolacion", lat: 8.487, lon: 124.65 },
  { name: "Cugman", lat: 8.52, lon: 124.679 },
  { name: "Dansolihon", lat: 8.39, lon: 124.58 },
  { name: "F.S. Catanico", lat: 8.49, lon: 124.668 },
  { name: "Gusa", lat: 8.503, lon: 124.668 },
  { name: "Indahag", lat: 8.45, lon: 124.678 },
  { name: "Iponan", lat: 8.476, lon: 124.563 },
  { name: "Kauswagan", lat: 8.502, lon: 124.63 },
  { name: "Lapasan", lat: 8.491, lon: 124.658 },
  { name: "Lumbia", lat: 8.41, lon: 124.56 },
  { name: "Macabalan", lat: 8.495, lon: 124.657 },
  { name: "Macasandig", lat: 8.468, lon: 124.655 },
  { name: "Nazareth", lat: 8.462, lon: 124.647 },
  { name: "Pagatpat", lat: 8.478, lon: 124.571 },
  { name: "Patag", lat: 8.485, lon: 124.58 },
  { name: "Puntod", lat: 8.5, lon: 124.65 },
  { name: "Tablon", lat: 8.54, lon: 124.72 },
  { name: "Taglimao", lat: 8.35, lon: 124.6 },
  { name: "Tignapoloan", lat: 8.32, lon: 124.62 },
];

const FloodHeatmap = () => {
  const mapContainer = useRef(null);
  const [loading, setLoading] = useState(false);

  const fetchRainRisk = async (lat, lon) => {
    try {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      const res = await axios.get(url);
      const list = res.data.list;

      const maxRain = list.slice(0, 4).reduce((max, item) => {
        const rain = item.rain?.["3h"] || 0;
        return rain > max ? rain : max;
      }, 0);

      // Assign risk level based on max rain
      let risk = 0;
      if (maxRain < 1) risk = 0.2; // green
      else if (maxRain < 5) risk = 0.5; // yellow
      else if (maxRain < 15) risk = 0.75; // orange
      else risk = 1.0; // red
      setLoading(false);
      return { risk, maxRain };
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    const initMap = async () => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        // style: "mapbox://styles/mapbox/standard",
        config: {
          basemap: {
            lightPreset: "day",
            showPointOfInterestLabels: false,
          },
        },
        center: [124.6498, 8.4803],
        zoom: 12,
        pitch: 60,
        bearing: -20,
        antialias: true,
      });

      const features = await Promise.all(
        locations.map(async ({ lat, lon, name }) => {
          const { risk, maxRain } = await fetchRainRisk(lat, lon);
          return {
            type: "Feature",
            properties: { name, risk, rain: maxRain },
            geometry: {
              type: "Point",
              coordinates: [lon, lat],
            },
          };
        })
      );

      const geojson = {
        type: "FeatureCollection",
        features,
      };

      map.on("load", () => {
        map.addSource("weather-risk", {
          type: "geojson",
          data: geojson,
        });

        map.addLayer({
          id: "rain-risk-3d",
          type: "circle",
          source: "weather-risk",
          paint: {
            "circle-radius": 18,
            "circle-color": [
              "interpolate",
              ["linear"],
              ["get", "risk"],
              0,
              "#00FF00", // Green
              0.4,
              "#FFFF00", // Yellow
              0.7,
              "#FFA500", // Orange
              1,
              "#FF0000", // Red
            ],
            "circle-opacity": 0.85,
            "circle-stroke-color": "#000",
            "circle-stroke-width": 1,
          },
        });
      });
    };

    initMap();
  }, []);

  return (
    <div>
      <div ref={mapContainer} style={{ height: "600px", width: "100%" }} />
    </div>
  );
};

export default FloodHeatmap;
