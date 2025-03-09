import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, subDays } from "date-fns";
import {
  faUser,
  faGear,
  faBell,
  faParachuteBox,
  faSatelliteDish,
  faCloudMoonRain,
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";
import SensorsActiveVSOfflinePieChart from "../components/SensorsActiveVSOfflinePieChart";
import RealTimeSensorsLocationMap from "../components/RealTimeSensorsLocationMap";
import WaterLevelRainfallTrendLineChart from "../components/WaterLevelRainfallTrendLineChart";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons/faPowerOff";
import { faWaterLadder } from "@fortawesome/free-solid-svg-icons/faWaterLadder";

export default function SensorsPage() {
  const sensor_readings = [
    {
      sensor_id: "CDO-SR04-001",
      type: "Water Level",
      location: "Camaman-an",
      measurement: 4.2,
      unit: "m",
      status: "Active",
    },
    {
      sensor_id: "CDO-SR04-002",
      type: "Humidity",
      location: "Kauswagan",
      measurement: 85,
      unit: "%",
      status: "Active",
    },
    {
      sensor_id: "CDO-SR04-003",
      type: "Temperature",
      location: "Lapasan",
      measurement: 28,
      unit: "°C",
      status: "Active",
    },
    {
      sensor_id: "CDO-SR04-004",
      type: "Water Level",
      location: "Osmena",
      measurement: 4.2,
      unit: "m",
      status: "Offline",
    },
    {
      sensor_id: "CDO-SR04-005",
      type: "Soil Moisture",
      location: "Consolacion",
      measurement: 20,
      unit: "%",
      status: "Active",
    },
  ];

  const getPast7Days = () => {
    const dates = [];
    for (let i = 0; i != 7; i++) {
      const date = subDays(new Date(), i);
      dates.push(format(date, "MMMM dd"));
    }
    return dates;
  };

  const sensor_data_history = getPast7Days().map((day) => ({
    date: day,
    rainfall: parseInt(Math.random() * (110 - 43) + 43),
    average_water_level: parseInt(Math.random() * (90 - 33) + 33),
    humidity: parseInt(Math.random() * (85 - 65) + 5),
  }));

  return (
    <>
      <div className="pt-[15px] pr-[26px]">
        <div className="flex justify-between items-center mb-[18px]">
          <div className="text-[10px]">
            <span className="text-gray-600">Pages / </span>
            <span className="text-black">Sensors</span>
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
          <span className="font-bold text-[14px]">Sensors</span>
        </div>
      </div>
      <div className="flex gap-[40px] w-full mb-[40px]">
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Total Active Sensors
            </span>
            <span className="text-black text-[20px] font-bold">150</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faSatelliteDish}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Offline Sensors
            </span>
            <span className="text-black text-[20px] font-bold">5</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faPowerOff}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Average Water Level
            </span>
            <span className="text-black text-[20px] font-bold">3.5m</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faWaterLadder}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[40px] w-full mb-[40px]">
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              Average Rainfall in the Last 24 Hours
            </span>
            <span className="text-black text-[20px] font-bold">75mm</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faCloudMoonRain}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center bg-white rounded-[15px] drop-shadow-lg">
          <div className="flex flex-col text-center w-[87%] mt-[13px] mb-[17px]">
            <span className="text-[#525258] text-[10px] font-bold">
              LoRaWAN Coverage
            </span>
            <span className="text-black text-[20px] font-bold">95%</span>
          </div>
          <div className="w-[13%] grid justify-items-end mr-[15px]">
            <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#1E6091] rounded-[10px] text-white">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faEarthAsia}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Sensor Operational Status (Active vs Offline)
        </span>
      </div>
      <div className="flex justify-center items-center w-full mb-[40px] pt-[30px] drop-shadow-lg">
        <div className="">
          <SensorsActiveVSOfflinePieChart />
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">Live IoT Sensor Readings</span>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] pb-[26px] drop-shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" text-gray-700 text-[10px]">
                <th className="py-2 pr-[10px] text-left"></th>
                <th className="py-2 pr-[10px] text-left">Sensor ID</th>
                <th className="py-2 pr-[10px] text-left">Type</th>
                <th className="py-2 pr-[10px] text-left">Location</th>
                <th className="py-2 pr-[10px] text-left">Measurement</th>
                <th className="py-2 pr-[10px] text-left">Unit</th>
                <th className="py-2 pr-[10px] text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {sensor_readings.map((sensor_reading, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-gray-50 text-[9px]"
                >
                  <td className="flex justify-end items-center py-[10px] pr-[10px]">
                    <div
                      className="w-[10px] h-[10px] rounded-full"
                      style={{
                        backgroundColor:
                          sensor_reading.status == "Active" ? "green" : "red",
                      }}
                    ></div>
                  </td>
                  <td className="py-[10px]">{sensor_reading.sensor_id}</td>
                  <td className="py-[10px]">{sensor_reading.type}</td>
                  <td className="py-[10px]">{sensor_reading.location}</td>
                  <td className="py-[10px]">{sensor_reading.measurement}</td>
                  <td className="py-[10px]">{sensor_reading.unit}</td>
                  <td className="py-[10px]">{sensor_reading.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Real-Time Sensor Locations
        </span>
      </div>
      <div className="bg-white rounded-[15px] w-full mb-[40px]">
        <div className="">
          <RealTimeSensorsLocationMap />
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Sensor Historical Data (Past 7 Days)
        </span>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] pb-[26px] drop-shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" text-gray-700 text-[10px]">
                <th className="py-2 pr-[10px] text-left"></th>
                <th className="py-2 pr-[10px] text-left">Date</th>
                <th className="py-2 pr-[10px] text-left">Rainfall (mm)</th>
                <th className="py-2 pr-[10px] text-left">
                  Average Water Level (m)
                </th>
                <th className="py-2 pr-[10px] text-left">Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {sensor_data_history.map((sensor_data, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-gray-50 text-[9px]"
                >
                  <td className="flex justify-end items-center py-[10px] pr-[10px]">
                    <div className="w-[10px] h-[10px] bg-[#D9D9D9]"></div>
                  </td>
                  <td className="py-[10px]">{sensor_data.date}</td>
                  <td className="py-[10px]">{sensor_data.rainfall}</td>
                  <td className="py-[10px]">
                    {sensor_data.average_water_level}
                  </td>
                  <td className="py-[10px]">{sensor_data.humidity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Water Levels & Rainfall Trends
        </span>
      </div>
      <div className="bg-white drop-shadow-lg rounded-[15px] p-[40px] w-full mb-[40px]">
        <div className="">
          <WaterLevelRainfallTrendLineChart />
        </div>
      </div>
    </>
  );
}
