import React, { useEffect, useState } from "react";
import { format, subDays } from "date-fns";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const openWeatherAPIKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const coordinates = {
  "Agusan": { lat: 8.484, lon: 124.648 },
  "Baikingon": { lat: 8.456, lon: 124.603 },
  "Balulang": { lat: 8.458, lon: 124.632 },
  "Bayabas": { lat: 8.477, lon: 124.611 },
  "Bayanga": { lat: 8.39, lon: 124.68 },
  "Bonbon": { lat: 8.462, lon: 124.618 },
  "Bugo": { lat: 8.504, lon: 124.698 },
  "Bulua": { lat: 8.474, lon: 124.582 },
  "Camaman-an": { lat: 8.472, lon: 124.651 },
  "Canitoan": { lat: 8.472, lon: 124.599 },
  "Carmen": { lat: 8.482, lon: 124.636 },
  "Consolacion": { lat: 8.487, lon: 124.65 },
  "Cugman": { lat: 8.52, lon: 124.679 },
  "Dansolihon": { lat: 8.39, lon: 124.58 },
  "F.S. Catanico": { lat: 8.49, lon: 124.668 },
  "Gusa": { lat: 8.503, lon: 124.668 },
  "Indahag": { lat: 8.45, lon: 124.678 },
  "Iponan": { lat: 8.476, lon: 124.563 },
  "Kauswagan": { lat: 8.502, lon: 124.63 },
  "Lapasan": { lat: 8.491, lon: 124.658 },
  "Lumbia": { lat: 8.41, lon: 124.56 },
  "Macabalan": { lat: 8.495, lon: 124.657 },
  "Macasandig": { lat: 8.468, lon: 124.655 },
  "Nazareth": { lat: 8.462, lon: 124.647 },
  "Pagatpat": { lat: 8.478, lon: 124.571 },
  "Patag": { lat: 8.485, lon: 124.58 },
  "Puntod": { lat: 8.5, lon: 124.65 },
  "Tablon": { lat: 8.54, lon: 124.72 },
  "Taglimao": { lat: 8.35, lon: 124.6 },
  "Tignapoloan": { lat: 8.32, lon: 124.62 },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function FloodProbabilityByRegionLineChart() {
  const [floodProbability, setFloodProbability] = useState([]);
  const barangays = [
    "Agusan",
    "Baikingon",
    "Balulang",
    "Bayabas",
    "Bayanga",
    "Bonbon",
    "Bugo",
    "Bulua",
    "Camaman-an",
    "Canitoan",
    "Carmen",
    "Consolacion",
    "Cugman",
    "Dansolihon",
    "F.S. Catanico",
    "Gusa",
    "Indahag",
    "Iponan",
    "Kauswagan",
    "Lapasan",
    "Lumbia",
    "Macabalan",
    "Macasandig",
    "Nazareth",
    "Pagatpat",
    "Patag",
    "Puntod",
    "Tablon",
    "Taglimao",
    "Tignapoloan",
  ];

  function calculateFloodProbability(rain, humidity, weather) {
    let probability = 0;

    if (rain) probability += rain * 10;
    if (humidity > 80) probability += 20;
    if (weather.includes("thunderstorm") || weather.includes("heavy rain"))
      probability += 30;
    if (probability > 100) probability = 100;

    return probability;
  }

  async function fetchFloodData() {
    let floodData = [];
    let fullData = [];
    for (const barangay of barangays) {
      const { lat, lon } = coordinates[barangay];
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            lat,
            lon,
            appid: openWeatherAPIKey,
            units: "metric",
          },
        });

        const weatherData = response.data;
        fullData.push(weatherData);
        const rain = weatherData.rain ? weatherData.rain["1h"] || 0 : 0;
        const humidity = weatherData.main.humidity;
        const weatherDesc = weatherData.weather[0].description;

        const floodProbability = calculateFloodProbability(
          rain,
          humidity,
          weatherDesc
        );
        console.log(
          `Flood Probability: ${floodProbability}, Barangay: ${barangay}`
        );
        floodData.push(floodProbability);
      } catch (error) {
        console.error(`Error fetching data for ${barangay}:`, error.message);
      }
    }
    setFloodProbability(floodData);
    console.log(floodData);
    console.log(fullData);
    return floodData;
  }

  const options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        stacked: true,
        ticks: {
          font: {
            size: 7,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 7,
          },
        },
      },
    },
  };

  const data = {
    labels: barangays,
    datasets: [
      {
        label: "",
        backgroundColor: "#1E6091",
        data: floodProbability,
        borderColor: "#1E6091",
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    fetchFloodData();
  }, []);
  return <Line data={data} options={options} />;
}
