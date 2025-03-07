import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, subDays } from "date-fns";
import { faUser, faGear, faBell } from "@fortawesome/free-solid-svg-icons";
import InsightsHighRiskFloodAreasHeatmap from "../components/InsightsHighRiskFloodAreasHeatmap";
import FloodProbabilityByRegionLineChart from "../components/FloodProbabilityByRegionLineChart";
import RainFallFloodProbabilityLineChart from "../components/RainFallFloodProbabilityLineChart";

export default function InsightsPage() {
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
            <div className="bg-[#1E6091] rounded-[10px] w-[50px] h-[50px]"></div>
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
            <div className="bg-[#1E6091] rounded-[10px] w-[50px] h-[50px]"></div>
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
            <div className="bg-[#1E6091] rounded-[10px] w-[50px] h-[50px]"></div>
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
            <div className="bg-[#1E6091] rounded-[10px] w-[50px] h-[50px]"></div>
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
            <div className="bg-[#1E6091] rounded-[10px] w-[50px] h-[50px]"></div>
          </div>
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Heatmap of High-risk Flood Areas
        </span>
      </div>
      <div className="bg-white rounded-[15px] w-full mb-[40px]">
        <div className="">
          <InsightsHighRiskFloodAreasHeatmap />
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
                    <div className="w-[10px] h-[10px] bg-[#D9D9D9]"></div>
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
                    <div className="w-[10px] h-[10px] bg-[#D9D9D9]"></div>
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
