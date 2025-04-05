import React, { useEffect, useState } from "react";
import IoTWaterLevelCharts from "../components/IoTWaterLevelCharts";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleRadiation,
  faEye,
  faSatelliteDish,
  faServer,
  faUser,
  faGear,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

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

const barangayPopulation = {
  "Agusan": 12500,
  "Baikingon": 4800,
  "Balulang": 26000,
  "Bayabas": 4500,
  "Bayanga": 3900,
  "Bonbon": 7500,
  "Bugo": 10800,
  "Bulua": 26500,
  "Camaman-an": 12000,
  "Canitoan": 18700,
  "Carmen": 31500,
  "Consolacion": 13400,
  "Cugman": 9300,
  "Dansolihon": 3200,
  "F.S. Catanico": 2800,
  "Gusa": 14800,
  "Indahag": 10200,
  "Iponan": 9500,
  "Kauswagan": 19400,
  "Lapasan": 12400,
  "Lumbia": 13400,
  "Macabalan": 12300,
  "Macasandig": 17000,
  "Nazareth": 18200,
  "Pagatpat": 8600,
  "Patag": 8800,
  "Puntod": 10500,
  "Tablon": 8700,
  "Taglimao": 3400,
  "Tignapoloan": 2900,
};

function MobileDashboard({
  severityColors,
  returnSeverityColor,
  alerts,
  insights,
}) {
  return (
    <>
      <div className="pt-[15px]">
        <div className="flex justify-between items-center mb-[18px]">
          <div className="text-[10px]">
            <span className="text-gray-600">Pages / </span>
            <span className="text-black">Dashboard</span>
          </div>
          <div className="flex justify-evenly items-center gap-[30px]">
            <div className="flex justify-center items-center h-[20px] w-[20px]">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="flex justify-center items-center h-[20px] w-[20px]">
              <FontAwesomeIcon icon={faGear} />
            </div>
            <div className="flex justify-center items-center h-[20px] w-[20px]">
              <FontAwesomeIcon icon={faBell} />
            </div>
          </div>
        </div>
        <div className="mb-[20px]">
          <span className="font-bold text-[14px]">Dashboard</span>
        </div>
        <div className="flex justify-between gap-[40px] mb-[40px]">
          <div className="flex items-center justify-between w-full pr-[15px] h-[75px] rounded-[15px] drop-shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <span className="text-gray-600 font-bold text-[10px] mb-[5px]">
                  Alerts
                </span>
                <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white mb-[5px]">
                  <FontAwesomeIcon
                    style={{ width: "32px", height: "32px" }}
                    icon={faCircleRadiation}
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="font-bold text-[10px]">1,000</span>
                  <span className="font-bold text-[8px] text-[#14AE5C]">
                    +50%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full pr-[15px] h-[75px] rounded-[15px] drop-shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <span className="text-gray-600 font-bold text-[10px] mb-[5px]">
                  Insights
                </span>
                <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white mb-[5px]">
                  <FontAwesomeIcon
                    style={{ width: "32px", height: "32px" }}
                    icon={faEye}
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="font-bold text-[10px]">1,000</span>
                  <span className="font-bold text-[8px] text-[#14AE5C]">
                    +50%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full pr-[15px] h-[75px] rounded-[15px] drop-shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <span className="text-gray-600 font-bold text-[10px] mb-[5px]">
                  Sensors
                </span>
                <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white mb-[5px]">
                  <FontAwesomeIcon
                    style={{ width: "32px", height: "32px" }}
                    icon={faSatelliteDish}
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="font-bold text-[10px]">1,000</span>
                  <span className="font-bold text-[8px] text-[#14AE5C]">
                    +50%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full pr-[15px] h-[75px] rounded-[15px] drop-shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <span className="text-gray-600 font-bold text-[10px] mb-[5px]">
                  API
                </span>
                <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white mb-[5px]">
                  <FontAwesomeIcon
                    style={{ width: "32px", height: "32px" }}
                    icon={faServer}
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="font-bold text-[10px]">1,000</span>
                  <span className="font-bold text-[8px] text-[#14AE5C]">
                    +50%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] mb-[30px]">
          <div className="w-full h-auto bg-white shadow-md rounded-2xl border border-gray-200">
            <h2 className="text-[8px] font-semibold my-[20px] ml-[20px]">
              Latest Alerts
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-[0.25px] border-t-[#808080] text-gray-700 text-[8px]">
                    <th className="py-2 pr-[10px] text-left"></th>
                    <th className="py-2 pr-[10px] text-left">Timestamp</th>
                    <th className="py-2 pr-[10px] text-left">Trigger Source</th>
                    <th className="py-2 pr-[10px] text-left">Status</th>
                    <th className="py-2 pr-[10px] text-left">Alert Level</th>
                  </tr>
                </thead>
                <tbody>
                  {alerts.map((alert, index) => (
                    <tr
                      key={index}
                      className="transition border-b-[0.20px] border-t-[#808080] hover:bg-gray-50 text-[6px]"
                    >
                      <td className="flex justify-end items-center py-[10px] px-[10px]">
                        <div
                          className="w-[10px] h-[10px] rounded-full"
                          style={{
                            backgroundColor: severityColors[alert.level],
                          }}
                        ></div>
                      </td>
                      <td className="py-[10px] pr-[10px]">{alert.timestamp}</td>
                      <td className="py-[10px] pr-[10px]">{alert.source}</td>
                      <td className="py-[10px] pr-[10px]">{alert.status}</td>
                      <td className="py-[10px] pr-[10px]">{alert.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center my-[26px] text-[8px]">
              <button className="transition text-gray-500 cursor-pointer font-semibold hover:underline">
                See All Alerts
              </button>
            </div>
          </div>
          <div className="w-full h-auto bg-white shadow-md rounded-2xl border border-gray-200">
            <h2 className="text-[8px] font-semibold my-[20px] ml-[20px]">
              Latest Insights
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-[0.25px] border-t-[#808080] text-gray-700 text-[8px]">
                    <th className="py-2 pr-[10px] text-left"></th>
                    <th className="py-2 pr-[10px] text-left">Region</th>
                    <th className="py-2 pr-[10px] text-left">Forecast Date</th>
                    <th className="py-2 pr-[10px] text-left">River Flow %</th>
                    <th className="py-2 pr-[10px] text-left">
                      Affected Population
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {insights.map((insight, index) => (
                    <tr
                      key={index}
                      className="transition border-b-[0.20px] border-t-[#808080] hover:bg-gray-50 text-[6px]"
                    >
                      <td className="flex justify-end items-center py-[10px] px-[10px]">
                        <div
                          className="w-[10px] h-[10px] rounded-full"
                          style={{
                            backgroundColor: returnSeverityColor(
                              insight.river_flow_probability
                            ),
                          }}
                        ></div>
                      </td>
                      <td className="py-[10px] pr-[10px]">{insight.region}</td>
                      <td className="py-[10px] pr-[10px]">
                        {insight.forecast_date}
                      </td>
                      <td className="py-[10px] pr-[10px]">
                        {insight.river_flow_probability}
                      </td>
                      <td className="py-[10px] pr-[10px]">
                        {insight.affected_population}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center my-[26px] text-[8px]">
              <button className="transition text-gray-500 cursor-pointer font-semibold hover:underline">
                See All Insights
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[40px] mb-[40px]">
          <div className="w-full h-auto bg-white shadow-md rounded-2xl border border-gray-200">
            <h1 className="my-[20px] ml-[24px] text-[8px] font-bold">
              Average Water Level
            </h1>
            <div className="mx-[28px] mb-[24px] text-[4px]">
              <IoTWaterLevelCharts />
            </div>
            <div className="text-center my-[26px] text-[7px]">
              <button className="transition text-gray-500 cursor-pointer font-semibold hover:underline">
                See Full Report
              </button>
            </div>
          </div>
          <div className="w-full h-auto bg-white shadow-md rounded-2xl border border-gray-200">
            <h1 className="my-[30px] ml-[30px] text-[12px] font-bold">
              Alerts
            </h1>
            <div className="mx-[35px] mb-[24px] text-[7px]">
              <IoTWaterLevelCharts />
            </div>
            <div className="text-center my-[26px] text-[7px]">
              <button className="transition text-gray-500 cursor-pointer font-semibold hover:underline">
                See Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Dashboard({ device }) {
  const [riverFlowProbabilityPerBarangay, setRiverFlowProbabilityPerBarangay] =
    useState([]);
  const [top5RiverFlowBarangays, setTop5RiverFlowBarangays] = useState([]);

  const severityColors = {
    Minor: "green",
    Moderate: "yellow",
    Severe: "orange",
    Critical: "red",
  };

  const returnSeverityColor = (riverFlowProbability) => {
    if (75 < riverFlowProbability) {
      return "red";
    } else if (50 < riverFlowProbability && riverFlowProbability <= 75) {
      return "orange";
    } else if (25 < riverFlowProbability && riverFlowProbability <= 50) {
      return "yellow";
    } else {
      return "green";
    }
  };

  const alerts = [
    {
      timestamp: "2025-03-01T10:30:00Z",
      source: "IoT Sensor",
      status: "Unacknowledged",
      level: "Minor",
    },
    {
      timestamp: "2025-03-01T10:15:00Z",
      source: "Data Insights",
      status: "Resolved",
      level: "Moderate",
    },
    {
      timestamp: "2025-03-01T09:28:00Z",
      source: "Data Insights",
      status: "Acknowledged",
      level: "Severe",
    },
    {
      timestamp: "2025-03-01T08:17:00Z",
      source: "Weather Prediction Model",
      status: "Unacknowledged",
      level: "Critical",
    },
    {
      timestamp: "2025-03-01T07:29:00Z",
      source: "Manual Report",
      status: "Unacknowledged",
      level: "Severe",
    },
  ];

  const insights = [
    {
      region: "Macanhan",
      forecast_date: "2025-03-02",
      river_flow_probability: 20,
      affected_population: "50,000",
    },
    {
      region: "Carmen",
      forecast_date: "2025-03-02",
      river_flow_probability: 80,
      affected_population: "60,000",
    },
    {
      region: "Camaman-an",
      forecast_date: "2025-03-02",
      river_flow_probability: 37,
      affected_population: "15,000",
    },
    {
      region: "Osmena",
      forecast_date: "2025-03-02",
      river_flow_probability: 56,
      affected_population: "40,000",
    },
    {
      region: "Kauswagan",
      forecast_date: "2025-03-02",
      river_flow_probability: 23,
      affected_population: "38,000",
    },
  ];

  useEffect(() => {
    console.log(device);
  }, [device]);

  if (device == "Desktop") {
    function calculateRiverFlowPercent(rain, humidity) {
      let base = 0;
      if (rain > 0) base += rain * 12; // rain mm → %
      if (humidity > 70) base += (humidity - 70) * 0.5;
      return Math.min(base, 100); // max 100%
    }

    function calculateFloodProbability(rain, humidity, weather) {
      let probability = 0;
      if (rain) probability += rain * 10;
      if (humidity > 80) probability += 20;
      if (weather.includes("thunderstorm") || weather.includes("heavy rain"))
        probability += 30;
      return Math.min(probability, 100);
    }

    function estimateAffectedPopulation(
      population,
      floodProbability,
      exposureFactor = 0.25
    ) {
      return Math.round(
        ((population * floodProbability) / 100) * exposureFactor
      );
    }

    function getTop5RiverFlowBarangays(dataArray) {
      // Sort the array by riverFlowPercent in descending order
      const sorted = [...dataArray].sort(
        (a, b) => b.riverFlowPercent - a.riverFlowPercent
      );

      // Return the top 5 with full data
      return sorted.slice(0, 5);
    }

    const analyzeRiverFlowAndPopulation = async () => {
      console.log("sad1");
      let barangayPerRiverFlow = [];
      for (const barangay of barangays) {
        const { lat, lon } = coordinates[barangay] || {};
        const population = barangayPopulation[barangay] || 10000;

        if (!lat || !lon) {
          console.warn(`Missing coordinates for ${barangay}`);
          continue;
        }

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
          const rain = weatherData.rain?.["1h"] || 0;
          const humidity = weatherData.main.humidity;
          const weatherDesc = weatherData.weather[0].description;

          const riverFlowPercent = calculateRiverFlowPercent(rain, humidity);
          const floodProbability = calculateFloodProbability(
            rain,
            humidity,
            weatherDesc
          );
          const affectedPop = estimateAffectedPopulation(
            population,
            floodProbability
          );

          barangayPerRiverFlow.push({
            barangay: barangay,
            weatherData: weatherData,
            riverFlowPercent: riverFlowPercent,
            floodProbability: floodProbability,
            affectedPop: affectedPop,
          });
        } catch (err) {
          console.error(`Error fetching data for ${barangay}:`, err.message);
        }
      }
      const topFiveRiverFlow = getTop5RiverFlowBarangays(barangayPerRiverFlow);
      setRiverFlowProbabilityPerBarangay(barangayPerRiverFlow);
      setTop5RiverFlowBarangays(
        getTop5RiverFlowBarangays(barangayPerRiverFlow)
      );
      console.log(topFiveRiverFlow);
      return barangayPerRiverFlow;
    };

    useEffect(() => {
      analyzeRiverFlowAndPopulation();
    }, []);

    return (
      <>
        <div className="pt-[15px]">
          <div className="flex justify-between items-center mb-[18px]">
            <div className="text-[10px]">
              <span className="text-gray-600">Pages / </span>
              <span className="text-black">Dashboard</span>
            </div>
            <div className="flex justify-evenly items-center gap-[30px]">
              <div className="flex justify-center items-center h-[20px] w-[20px]">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="flex justify-center items-center h-[20px] w-[20px]">
                <FontAwesomeIcon icon={faGear} />
              </div>
              <div className="flex justify-center items-center h-[20px] w-[20px]">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
          </div>
          <div className="mb-[14px]">
            <span className="font-bold text-[14px]">Dashboard</span>
          </div>
          <div className="flex justify-between gap-[40px] mb-[40px]">
            <div className="flex items-center justify-between w-full pr-[15px] h-[75px] bg-white rounded-[15px] drop-shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex-col items-center justify-center pl-[15px]">
                  <span className="text-gray-600 font-bold text-[10px]">
                    Alerts Today
                  </span>
                  <div className="flex items-center">
                    <span className="font-bold text-[20px] mr-[5px]">
                      1,000
                    </span>
                    <span className="font-bold text-[10px] text-[#14AE5C]">
                      +50%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
                <FontAwesomeIcon
                  style={{ width: "32px", height: "32px" }}
                  icon={faCircleRadiation}
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-[75px] bg-white rounded-[15px] drop-shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex-col items-center justify-center pl-[15px]">
                  <span className="text-gray-600 font-bold text-[10px]">
                    Insights Today
                  </span>
                  <div className="flex items-center w-full">
                    <span className="font-bold text-[20px] mr-[5px]">234m</span>
                    <span className="font-bold text-[10px] text-[#14AE5C]">
                      +3%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] mr-[15px] rounded-[10px] text-white">
                <FontAwesomeIcon
                  style={{ width: "32px", height: "32px" }}
                  icon={faEye}
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-[75px] bg-white rounded-[15px] drop-shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex-col items-center justify-center pl-[15px]">
                  <span className="text-gray-600 font-bold text-[10px]">
                    IoT Today
                  </span>
                  <div className="flex items-center">
                    <span className="font-bold text-[20px] mr-[5px]">
                      1,000
                    </span>
                    <span className="font-bold text-[10px] text-[#B3261E]">
                      -50%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] mr-[15px] rounded-[10px] text-white">
                <FontAwesomeIcon
                  style={{ width: "32px", height: "32px" }}
                  icon={faSatelliteDish}
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full h-[75px] bg-white rounded-[15px] drop-shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex-col items-center justify-center pl-[15px]">
                  <span className="text-gray-600 font-bold text-[10px]">
                    API Today
                  </span>
                  <div className="flex items-center">
                    <span className="font-bold text-[20px] mr-[5px]">
                      1,000
                    </span>
                    <span className="font-bold text-[10px] text-[#14AE5C]">
                      +50%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] mr-[15px] rounded-[10px] text-white">
                <FontAwesomeIcon
                  style={{ width: "32px", height: "32px" }}
                  icon={faServer}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-[40px] mb-[40px]">
            <div className="w-full h-auto bg-white shadow-md rounded-2xl border border-gray-200">
              <h2 className="text-[12px] font-semibold my-[30px] ml-[30px]">
                Latest Alerts
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-[0.25px] border-t-[#808080] text-gray-700 text-[10px]">
                      <th className="py-2 pr-[10px] text-left"></th>
                      <th className="py-2 pr-[10px] text-left">Timestamp</th>
                      <th className="py-2 pr-[10px] text-left">
                        Trigger Source
                      </th>
                      <th className="py-2 pr-[10px] text-left">Status</th>
                      <th className="py-2 pr-[10px] text-left">Alert Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alerts.map((alert, index) => (
                      <tr
                        key={index}
                        className="transition border-b-[0.20px] border-t-[#808080] hover:bg-gray-50 text-[8px]"
                      >
                        <td className="flex justify-end items-center py-[10px] pl-[30px] pr-[10px]">
                          <div
                            className="w-[10px] h-[10px] rounded-full"
                            style={{
                              backgroundColor: severityColors[alert.level],
                            }}
                          ></div>
                        </td>
                        <td className="py-[10px] pr-[10px]">
                          {alert.timestamp}
                        </td>
                        <td className="py-[10px] pr-[10px]">{alert.source}</td>
                        <td className="py-[10px] pr-[10px]">{alert.status}</td>
                        <td className="py-[10px] pr-[10px]">{alert.level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center my-[26px] text-[10px]">
                <button className="transition text-gray-500 cursor-pointer font-semibold hover:underline">
                  See All Alerts
                </button>
              </div>
            </div>
            <div className="w-full h-auto bg-white shadow-md rounded-2xl border border-gray-200">
              <h2 className="text-[12px] font-semibold my-[30px] ml-[30px]">
                Latest Insights
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-[0.25px] border-t-[#808080] text-gray-700 text-[10px]">
                      <th className="py-2 pr-[10px] text-left"></th>
                      <th className="py-2 pr-[10px] text-left">Region</th>
                      <th className="py-2 pr-[10px] text-left">
                        Forecast Date
                      </th>
                      <th className="py-2 pr-[10px] text-left">River Flow %</th>
                      <th className="py-2 pr-[10px] text-left">
                        Affected Population
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {top5RiverFlowBarangays.map((insight, index) => (
                      <tr
                        key={index}
                        className="transition border-b-[0.20px] border-t-[#808080] hover:bg-gray-50 text-[8px]"
                      >
                        <td className="flex justify-end items-center py-[10px] pl-[30px] pr-[10px]">
                          <div
                            className="w-[10px] h-[10px] rounded-full"
                            style={{
                              backgroundColor: returnSeverityColor(
                                insight.river_flow_probability
                              ),
                            }}
                          ></div>
                        </td>
                        <td className="py-[10px] pr-[10px]">
                          {insight.barangay}
                        </td>
                        <td className="py-[10px] pr-[10px]">
                          {new Date().toLocaleDateString()}
                        </td>
                        <td className="py-[10px] pr-[10px]">
                          {insight.riverFlowPercent}
                        </td>
                        <td className="py-[10px] pr-[10px]">
                          {insight.affectedPop}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center my-[26px] text-[10px]">
                <button className="transition text-gray-500 cursor-pointer font-semibold hover:underline">
                  See All Insights
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-[40px] mb-[40px]">
            <div className="w-full h-auto bg-white shadow-md rounded-2xl border border-gray-200">
              <h1 className="my-[30px] ml-[30px] text-[12px] font-bold">
                Average Water Level
              </h1>
              <div className="mx-[35px] mb-[24px] text-[7px]">
                <IoTWaterLevelCharts />
              </div>
              <div className="text-center my-[26px] text-[10px]">
                <button className="transition text-gray-500 cursor-pointer font-semibold hover:underline">
                  See Full Report
                </button>
              </div>
            </div>
            <div className="w-full h-auto bg-white shadow-md rounded-2xl border border-gray-200">
              <h1 className="my-[30px] ml-[30px] text-[12px] font-bold">
                Alerts
              </h1>
              <div className="mx-[35px] mb-[24px] text-[7px]">
                <IoTWaterLevelCharts />
              </div>
              <div className="text-center my-[26px] text-[10px]">
                <button className="transition text-gray-500 cursor-pointer font-semibold hover:underline">
                  See Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (device == "Mobile") {
    return (
      <MobileDashboard
        severityColors={severityColors}
        returnSeverityColor={returnSeverityColor}
        alerts={alerts}
        insights={insights}
      />
    );
  }
}
