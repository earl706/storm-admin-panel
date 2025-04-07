import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { format, subDays } from "date-fns";
import {
  faUser,
  faGear,
  faBell,
  faLocationDot,
  faCloudRain,
  faPeopleGroup,
  faBuilding,
  faParachuteBox,
} from "@fortawesome/free-solid-svg-icons";
import InsightsHighRiskFloodAreasHeatmap from "../components/InsightsHighRiskFloodAreasHeatmap";
import FloodProbabilityByRegionLineChart from "../components/FloodProbabilityByRegionLineChart";
import RainFallFloodProbabilityLineChart from "../components/RainFallFloodProbabilityLineChart";
import FloodHeatmap from "../components/FloodHeatmap";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const openWeatherAPIKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const barangays = [
  { name: "Agusan", lat: 8.484, lon: 124.648, population: 19039 },
  { name: "Baikingon", lat: 8.456, lon: 124.603, population: 2879 },
  { name: "Balulang", lat: 8.458, lon: 124.632, population: 42205 },
  { name: "Bayabas", lat: 8.477, lon: 124.611, population: 3700 },
  { name: "Bayanga", lat: 8.39, lon: 124.68, population: 2714 },
  { name: "Bonbon", lat: 8.462, lon: 124.618, population: 6716 },
  { name: "Bugo", lat: 8.504, lon: 124.698, population: 27172 },
  { name: "Bulua", lat: 8.474, lon: 124.582, population: 37728 },
  { name: "Camaman-an", lat: 8.472, lon: 124.651, population: 13275 },
  { name: "Canitoan", lat: 8.472, lon: 124.599, population: 20566 },
  { name: "Carmen", lat: 8.482, lon: 124.636, population: 61665 },
  { name: "Consolacion", lat: 8.487, lon: 124.65, population: 11540 },
  { name: "Cugman", lat: 8.52, lon: 124.679, population: 11245 },
  { name: "Dansolihon", lat: 8.39, lon: 124.58, population: 1795 },
  { name: "F.S. Catanico", lat: 8.49, lon: 124.668, population: 1656 },
  { name: "Gusa", lat: 8.503, lon: 124.668, population: 18158 },
  { name: "Indahag", lat: 8.45, lon: 124.678, population: 12695 },
  { name: "Iponan", lat: 8.476, lon: 124.563, population: 14034 },
  { name: "Kauswagan", lat: 8.502, lon: 124.63, population: 28111 },
  { name: "Lapasan", lat: 8.491, lon: 124.658, population: 19354 },
  { name: "Lumbia", lat: 8.41, lon: 124.56, population: 30106 },
  { name: "Macabalan", lat: 8.495, lon: 124.657, population: 16389 },
  { name: "Macasandig", lat: 8.468, lon: 124.655, population: 19100 },
  { name: "Nazareth", lat: 8.462, lon: 124.647, population: 26651 },
  { name: "Pagatpat", lat: 8.478, lon: 124.571, population: 9260 },
  { name: "Patag", lat: 8.485, lon: 124.58, population: 10137 },
  { name: "Puntod", lat: 8.5, lon: 124.65, population: 18147 },
  { name: "Tablon", lat: 8.54, lon: 124.72, population: 11935 },
  { name: "Taglimao", lat: 8.35, lon: 124.6, population: 2114 },
  { name: "Tignapoloan", lat: 8.32, lon: 124.62, population: 2472 },
];
export default function InsightsPage({ device }) {
  const [data, setData] = useState([]);

  const classifyFloodRisk = (mm) => {
    if (mm < 1) return { label: "Low", score: 0.2 };
    if (mm < 5) return { label: "Moderate", score: 0.5 };
    if (mm < 15) return { label: "High", score: 0.75 };
    return { label: "Severe", score: 1 };
  };

  const fetchRainData = async () => {
    const results = await Promise.all(
      barangays.map(async (b) => {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${b.lat}&lon=${b.lon}&appid=${openWeatherAPIKey}&units=metric`
        );
        const forecasts = res.data.list.slice(0, 8); // next 24 hours
        const totalRain = forecasts.reduce(
          (sum, f) => sum + (f.rain?.["3h"] || 0),
          0
        );
        const risk = classifyFloodRisk(totalRain);
        const atRiskPop = b.population * risk.score;
        // const infra = {
        //   roads: Math.round(risk.score * b.roads * 100),
        //   bridges: Math.round(risk.score * b.bridges * 100),
        // };
        return {
          ...b,
          totalRain,
          risk,
          atRiskPop,
          // infra,
        };
      })
    );

    setData(results);
  };

  const severityColors = {
    Low: "green",
    Minor: "yellow",
    Moderate: "orange",
    High: "red",
  };
  const floodSeverityColors = {
    Low: "green",
    Moderate: "yellow",
    High: "orange",
    Severe: "red",
  };
  const getPast7Days = () => {
    const dates = [];
    for (let i = 0; i != 7; i++) {
      const date = subDays(new Date(), i);
      dates.push(format(date, "MMMM dd"));
    }
    return dates;
  };

  const flood_prediction_timeline = getPast7Days().map((day) => ({
    date: day,
    rainfall: parseInt(Math.random() * (150 - 50) + 50),
    river_flow_prbability: parseInt(Math.random() * (99 - 5) + 5),
    expected_flood_impact: ["Severe", "High", "Moderate", "Low"][
      Math.floor(Math.random() * 4)
    ],
  }));

  const risk_analyses = [
    {
      region: "Camaman-an",
      flood_probability: 85,
      affected_population: "12,000",
      infrastructure_damage: "Moderate",
      recommended_action: "Evacuate low-lying areas",
    },
    {
      region: "Osmena",
      flood_probability: 70,
      affected_population: "8,000",
      infrastructure_damage: "Low",
      recommended_action: "Stay alert for warnings",
    },
    {
      region: "Lapasan",
      flood_probability: 55,
      affected_population: "5,000",
      infrastructure_damage: "Minor",
      recommended_action: "No immediate action",
    },
    {
      region: "Consolacion",
      flood_probability: 49,
      affected_population: "4,000",
      infrastructure_damage: "Minor",
      recommended_action: "Stay alert for warnings",
    },
    {
      region: "Kauswagan",
      flood_probability: 30,
      affected_population: "2,000",
      infrastructure_damage: "High",
      recommended_action: "Evacuate low-lying areas",
    },
  ];

  useEffect(() => {
    fetchRainData();
  }, []);

  return (
    <>
      <div className="pt-[15px] pr-[26px]">
        <div className="flex justify-between items-center mb-[18px]">
          <div className="text-[10px]">
            <span className="text-gray-600">Pages / </span>
            <span className="text-black">Insights</span>
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
          <span className="font-bold text-[14px]">Insights</span>
        </div>
      </div>
      <div className="flex gap-[40px] w-full mb-[40px]">
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Regions at High Risk
            </span>
            <span className="text-black text-[20px] font-bold">3</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faLocationDot}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Predicted Flood Events This Week
            </span>
            <span className="text-black text-[20px] font-bold">5</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faCloudRain}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Population at Risk
            </span>
            <span className="text-black text-[20px] font-bold">24,000</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faPeopleGroup}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[40px] w-full mb-[40px]">
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Infrastructure Damage Risk
            </span>
            <span className="text-black text-[20px] font-bold">
              40% Roads, 30% Bridges
            </span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faBuilding}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Recommended Evacuations
            </span>
            <span className="text-black text-[20px] font-bold">
              12 Barangays
            </span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faParachuteBox}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Heatmap of High-risk Flood Areas
        </span>
      </div>
      <div className="rounded-[15px] w-full mb-[40px]">
        <div className="">
          {/* <InsightsHighRiskFloodAreasHeatmap /> */}
          <FloodHeatmap />
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Risk Analysis Table (By Region)
        </span>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] pb-[26px] drop-shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" text-gray-700 text-[10px]">
                <th className="py-2 pr-[10px] text-left"></th>
                <th className="py-2 pr-[10px] text-left">Region</th>
                <th className="py-2 pr-[10px] text-left">Flood Probability</th>
                <th className="py-2 pr-[10px] text-left">
                  Affected Population
                </th>
                <th className="py-2 pr-[10px] text-left">
                  Infrastructure Damage
                </th>
                <th className="py-2 pr-[10px] text-left">Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              {risk_analyses.map((risk_analysis, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-gray-50 text-[9px]"
                >
                  <td className="flex justify-end items-center py-[10px] pr-[10px]">
                    <div
                      className="w-[10px] h-[10px] rounded-full"
                      style={{
                        backgroundColor:
                          severityColors[risk_analysis.infrastructure_damage],
                      }}
                    ></div>
                  </td>
                  <td className="py-[10px]">{risk_analysis.region}</td>
                  <td className="py-[10px]">
                    {risk_analysis.flood_probability}
                  </td>
                  <td className="py-[10px]">
                    {risk_analysis.affected_population}
                  </td>
                  <td className="py-[10px]">
                    {risk_analysis.infrastructure_damage}
                  </td>
                  <td className="py-[10px]">
                    {risk_analysis.recommended_action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full mt-[30px] text-center font-bold text-[10px]">
          <button className="transition text-[#828282] cursor-pointer font-semibold hover:underline">
            See Full Risk Analysis
          </button>
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Flood Probability by Region
        </span>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] drop-shadow-lg">
        <div className="px-[40px] pb-[40px]">
          <FloodProbabilityByRegionLineChart />
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Predicted Flood Timeline (7-Day Forecast)
        </span>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] pb-[26px] drop-shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" text-gray-700 text-[10px]">
                <th className="py-2 pr-[10px] text-left"></th>
                <th className="py-2 pr-[10px] text-left">Date</th>
                <th className="py-2 pr-[10px] text-left">Rainfall</th>
                <th className="py-2 pr-[10px] text-left">
                  River Flow Prbability %
                </th>
                <th className="py-2 pr-[10px] text-left">
                  Expected Flood Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {flood_prediction_timeline.map((prediction, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-gray-50 text-[9px]"
                >
                  <td className="flex justify-end items-center py-[10px] pr-[10px]">
                    <div
                      className="w-[10px] h-[10px] rounded-full"
                      style={{
                        backgroundColor:
                          floodSeverityColors[prediction.expected_flood_impact],
                      }}
                    ></div>
                  </td>
                  <td className="py-[10px]">{prediction.date}</td>
                  <td className="py-[10px]">{prediction.rainfall}</td>
                  <td className="py-[10px]">
                    {prediction.river_flow_prbability}
                  </td>
                  <td className="py-[10px]">
                    {prediction.expected_flood_impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Predicted Flood Timeline (7-Day Forecast)
        </span>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] drop-shadow-lg">
        <div className="px-[40px] pb-[40px]">
          <RainFallFloodProbabilityLineChart />
        </div>
      </div>
    </>
  );
}
