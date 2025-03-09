import React from "react";
import IoTWaterLevelCharts from "../components/IoTWaterLevelCharts";
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

export default function Dashboard() {
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
                  <span className="font-bold text-[20px] mr-[5px]">1,000</span>
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
                  <span className="font-bold text-[20px] mr-[5px]">1,000</span>
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
                  <span className="font-bold text-[20px] mr-[5px]">1,000</span>
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
                    <th className="py-2 pr-[10px] text-left">Trigger Source</th>
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
                      <td className="py-[10px] pr-[10px]">{alert.timestamp}</td>
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
              IoT Sensors Average Water Level
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
}
