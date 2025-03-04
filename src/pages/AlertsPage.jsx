import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faBell } from "@fortawesome/free-solid-svg-icons";
import SensorsAlertLevelMap from "../components/SensorsAlertLevelMap";
import "leaflet/dist/leaflet.css";
import cdoSilhouette from "/src/assets/cdo-silhoutte.jpg";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

export default function AlertsPage() {
  const alerts = [
    {
      alert_id: "ALRT-005",
      timestamp: "2025-03-01 10:30",
      location: "Kauswagan",
      alert_level: "Severe",
      description: "River level exceed safe limit",
      status: "Unacknowledged",
      actions: "Acknowledge",
    },
    {
      alert_id: "ALRT-004",
      timestamp: "2025-03-01 10:30",
      location: "Kauswagan",
      alert_level: "Severe",
      description: "Heavy rainfall detected",
      status: "Acknowledged",
      actions: "Acknowledge",
    },
    {
      alert_id: "ALRT-003",
      timestamp: "2025-03-01 10:30",
      location: "Camaman-an",
      alert_level: "Moderate",
      description: "Rising water levels observed",
      status: "Acknowledged",
      actions: "Acknowledge",
    },
    {
      alert_id: "ALRT-002",
      timestamp: "2025-03-01 10:30",
      location: "Osmena",
      alert_level: "Minor",
      description: "River level exceeded safe limit",
      status: "Unacknowledged",
      actions: "Acknowledge",
    },
    {
      alert_id: "ALRT-001",
      timestamp: "2025-03-01 10:30",
      location: "Lapasan",
      alert_level: "Minor",
      description: "Rising water levels observed",
      status: "Unacknowledged",
      actions: "Acknowledge",
    },
  ];

  return (
    <>
      <div className="pt-[15px] pr-[26px]">
        <div className="flex justify-between items-center mb-[18px]">
          <div className="text-[10px]">
            <span className="text-gray-600">Pages / </span>
            <span className="text-black">Alerts</span>
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
          <span className="font-bold text-[14px]">Alerts</span>
        </div>
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
            {/* <FontAwesomeIcon
                      style={{ width: "32px", height: "32px" }}
                      icon={faCircleRadiation}
                    /> */}
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
            {/* <FontAwesomeIcon
                      style={{ width: "32px", height: "32px" }}
                      icon={faEye}
                    /> */}
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
            {/* <FontAwesomeIcon
                      style={{ width: "32px", height: "32px" }}
                      icon={faSatelliteDish}
                    /> */}
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
            {/* <FontAwesomeIcon
                      style={{ width: "32px", height: "32px" }}
                      icon={faServer}
                    /> */}
          </div>
        </div>
      </div>
      <div className="flex gap-[40px] w-full mb-[40px]">
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Most Affected Region
            </span>
            <span className="text-black text-[20px] font-bold">Kauswagan</span>
          </div>
          <div className="w-[13%] grid justify-items-end">
            <div className="bg-[#1E6091] rounded-[10px] mr-[15px] w-[50px] h-[50px]"></div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Average Response Time
            </span>
            <span className="text-black text-[20px] font-bold">8 mins</span>
          </div>
          <div className="w-[13%] grid justify-items-end">
            <div className="bg-[#1E6091] rounded-[10px] mr-[15px] w-[50px] h-[50px]"></div>
          </div>
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">Active Alerts</span>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] pb-[26px] drop-shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" text-gray-700 text-[10px]">
                <th className="py-2 pr-[10px] text-left"></th>
                <th className="py-2 pr-[10px] text-left">Alert ID</th>
                <th className="py-2 pr-[10px] text-left">Timestamp</th>
                <th className="py-2 pr-[10px] text-left">Location</th>
                <th className="py-2 pr-[10px] text-left">Alert Level</th>
                <th className="py-2 pr-[10px] text-left">Description</th>
                <th className="py-2 pr-[10px] text-left">Status</th>
                <th className="py-2 pr-[10px] text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-gray-50 text-[9px]"
                >
                  <td className="flex justify-end items-center py-[10px] pr-[10px]">
                    <div className="w-[10px] h-[10px] bg-[#D9D9D9]"></div>
                  </td>
                  <td className="py-[10px]">{alert.alert_id}</td>
                  <td className="py-[10px]">{alert.timestamp}</td>
                  <td className="py-[10px]">{alert.location}</td>
                  <td className="py-[10px]">{alert.alert_level}</td>
                  <td className="py-[10px]">{alert.description}</td>
                  <td className="py-[10px]">{alert.status}</td>
                  <td className="py-[10px]">{alert.actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full mt-[27px] text-center font-bold text-[10px]">
          <button className="transition text-[#828282] cursor-pointer font-semibold hover:underline">
            See All Active Alerts
          </button>
        </div>
      </div>
      <div className="bg-white rounded-[15px] w-full pt-[30px] mb-[40px] pb-[40px]">
        <div className="w-full font-bold text-[12px] text-center px-[20px] mb-[40px]">
          <span>Alert Levels Map</span>
        </div>
        <div className="p-[40px]">
          <SensorsAlertLevelMap />
        </div>
      </div>
    </>
  );
}
