import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faBell } from "@fortawesome/free-solid-svg-icons";
import APIRequestCountByEndpointBarGraph from "../components/APIRequestCountByEndpointBarGraph";

export default function APIPage() {
  const endpoints = [
    {
      method: "GET",
      endpoint: "/api/alerts/active",
      description: "Fetches all active alerts",
      response_fields: "alert_id, timestamp, location, alert_level",
    },
    {
      method: "GET",
      endpoint: "/api/risk-analysis",
      description: "Provides flood risk data by region",
      response_fields: "region, risk_level, affected_population",
    },
    {
      method: "GET",
      endpoint: "/api/sensors",
      description: "Retrieves live IoT sensor data",
      response_fields: "sensor_id, measurement, status",
    },
    {
      method: "POST",
      endpoint: "/api/alerts/acknowledge",
      description: "Fetches all active alerts",
      response_fields: "alert_id, status",
    },
  ];

  return (
    <>
      <div className="pt-[15px] pr-[26px]">
        <div className="flex justify-between items-center mb-[18px]">
          <div className="text-[10px]">
            <span className="text-gray-600">Pages / </span>
            <span className="text-black">API</span>
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
          <span className="font-bold text-[14px]">API</span>
        </div>
      </div>
      <div className="flex gap-[40px] w-full mb-[40px]">
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Total API Requests Today
            </span>
            <span className="text-black text-[20px] font-bold">8,200</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[30px]">
            <div className="bg-[#1E6091] rounded-[10px] w-[50px] h-[50px]"></div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Most Used Endpoint
            </span>
            <span className="text-black text-[20px] font-bold italic">
              /api/sensors
            </span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[30px]">
            <div className="bg-[#1E6091] rounded-[10px] w-[50px] h-[50px]"></div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Average Response Time{" "}
            </span>
            <span className="text-black text-[20px] font-bold">250ms</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[30px]">
            <div className="bg-[#1E6091] rounded-[10px] w-[50px] h-[50px]"></div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              API Uptime (Last 30 Days)
            </span>
            <span className="text-black text-[20px] font-bold">99.8%</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[30px]">
            <div className="bg-[#1E6091] rounded-[10px] w-[50px] h-[50px]"></div>
          </div>
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          API Request Counts by Endpoint
        </span>
      </div>
      <div className="bg-white rounded-[15px] p-[40px] w-full mb-[40px] drop-shadow-lg">
        <div className="">
          <APIRequestCountByEndpointBarGraph />
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">Available API Endpoints</span>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] pb-[26px] drop-shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" text-gray-700 text-[10px]">
                <th className="py-2 pr-[10px] text-left"></th>
                <th className="py-2 pr-[10px] text-left">Method</th>
                <th className="py-2 pr-[10px] text-left">Endpoint</th>
                <th className="py-2 pr-[10px] text-left">Description</th>
                <th className="py-2 pr-[10px] text-left">Response Fields</th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((endpoint, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-gray-50 text-[9px]"
                >
                  <td className="flex justify-end items-center py-[10px] pr-[10px]">
                    <div className="w-[10px] h-[10px] bg-[#D9D9D9]"></div>
                  </td>
                  <td className="py-[10px]">{endpoint.method}</td>
                  <td className="py-[10px] italic font-semibold">
                    {endpoint.endpoint}
                  </td>
                  <td className="py-[10px]">{endpoint.description}</td>
                  <td className="py-[10px] italic font-semibold">
                    {endpoint.response_fields}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
