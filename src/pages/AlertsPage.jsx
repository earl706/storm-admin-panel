import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faBell } from "@fortawesome/free-solid-svg-icons";
import SensorsAlertLevelMap from "../components/SensorsAlertLevelMap";
import AlertsHistory30DaysChart from "../components/AlertsHistory30DaysChart";
import AlertsAcknowledgedPieChart from "../components/AlertsAcknowledgedPieChart";
import AlertSourcesPieChart from "../components/AlertSourcesPieChart";
import "leaflet/dist/leaflet.css";

export default function AlertsPage() {
  const alerts_history = [
    {
      date: "March 5",
      minor_alerts: 4,
      moderate_alerts: 5,
      severe_alerts: 3,
      critical_alerts: 1,
    },
    {
      date: "March 4",
      minor_alerts: 4,
      moderate_alerts: 5,
      severe_alerts: 3,
      critical_alerts: 1,
    },
    {
      date: "March 3",
      minor_alerts: 4,
      moderate_alerts: 5,
      severe_alerts: 3,
      critical_alerts: 1,
    },
    {
      date: "March 2",
      minor_alerts: 4,
      moderate_alerts: 5,
      severe_alerts: 3,
      critical_alerts: 1,
    },
    {
      date: "March 1",
      minor_alerts: 4,
      moderate_alerts: 5,
      severe_alerts: 3,
      critical_alerts: 1,
    },
  ];

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
                Active Alerts
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
                Severe Alerts
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
                Moderate Alerts
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
                Minor Alerts
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
      <div className="bg-white rounded-[15px] w-full pt-[30px] mb-[40px]">
        <div className="w-full font-bold text-[12px] text-center px-[20px] mb-[40px]">
          <span>Alert Levels Map</span>
        </div>
        <div className="">
          <SensorsAlertLevelMap />
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[15px]">
        <span className="font-bold text-[14px]">
          Alerts History (Past 30 Days)
        </span>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] pb-[26px] drop-shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" text-gray-700 text-[10px]">
                <th className="py-2 pr-[10px] text-left"></th>
                <th className="py-2 pr-[10px] text-left">Date</th>
                <th className="py-2 pr-[10px] text-left">Minor Alerts</th>
                <th className="py-2 pr-[10px] text-left">Moderate Alerts</th>
                <th className="py-2 pr-[10px] text-left">Severe Alerts</th>
                <th className="py-2 pr-[10px] text-left">Critical Alerts</th>
              </tr>
            </thead>
            <tbody>
              {alerts_history.map((alert_history, index) => (
                <tr
                  key={index}
                  className="transition hover:bg-gray-50 text-[9px]"
                >
                  <td className="flex justify-end items-center py-[10px] pr-[10px]">
                    <div className="w-[10px] h-[10px] bg-[#D9D9D9]"></div>
                  </td>
                  <td className="py-[10px]">{alert_history.date}</td>
                  <td className="py-[10px]">{alert_history.minor_alerts}</td>
                  <td className="py-[10px]">{alert_history.moderate_alerts}</td>
                  <td className="py-[10px]">{alert_history.severe_alerts}</td>
                  <td className="py-[10px]">{alert_history.critical_alerts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full mt-[30px] text-center font-bold text-[10px]">
          <button className="transition text-[#828282] cursor-pointer font-semibold hover:underline">
            See Full Alerts History
          </button>
        </div>
      </div>
      <div className="w-full bg-white rounded-[15px] mb-[40px] pt-[30px] drop-shadow-lg">
        <div className="w-full mb-[20px] text-center">
          <span className="font-bold text-[14px] ">
            Alerts History (Past 30 Days)
          </span>
        </div>
        <div className="px-[40px] pb-[40px]">
          <AlertsHistory30DaysChart />
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[20px]">
        <span className="font-bold text-[14px]">
          Alert Response Performance
        </span>
      </div>

      <div className="flex w-full justify-center items-center gap-[40px] mb-[40px]">
        <div className="flex flex-col w-full justify-between gap-[40px] mb-[40px]">
          <div className="flex items-center justify-between w-full pr-[15px] h-[75px] bg-white rounded-[15px] drop-shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex-col items-center justify-center pl-[15px]">
                <span className="text-gray-600 font-bold text-[8px]">
                  Total Alerts in the Last 24 Hours
                </span>
                <div className="flex items-center">
                  <span className="font-bold text-[20px] mr-[5px]">25</span>
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
                <span className="text-gray-600 font-bold text-[8px]">
                  Average Acknowledgement Time
                </span>
                <div className="flex items-center w-full">
                  <span className="font-bold text-[20px] mr-[5px]">8 mins</span>
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
                <span className="text-gray-600 font-bold text-[8px]">
                  Average Resolution Time
                </span>
                <div className="flex items-center">
                  <span className="font-bold text-[20px] mr-[5px]">
                    32 mins
                  </span>
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
                <span className="text-gray-600 font-bold text-[8px]">
                  Alerts Escalated to Authorities
                </span>
                <div className="flex items-center">
                  <span className="font-bold text-[20px] mr-[5px]">3</span>
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
        <div className="flex w-full justify-center">
          <AlertsAcknowledgedPieChart />
        </div>
      </div>
      <div className="w-full text-center font-bold mb-[20px]">
        <span className="font-bold text-[14px]">
          Automated & Manual Alerts Breakdown
        </span>
      </div>
      <div className="flex w-full justify-center items-center gap-[40px] mb-[40px]">
        <div className="flex flex-col w-full justify-between gap-[40px] mb-[40px]">
          <div className="flex items-center justify-between w-full pr-[15px] h-[75px] bg-white rounded-[15px] drop-shadow-lg">
            <div className="flex w-[85%] items-center justify-between">
              <div className="flex-col w-full items-center justify-center pl-[15px] text-center">
                <span className=" text-gray-600 font-bold text-[10px]">
                  IoT Sensor-Triggered Alerts
                </span>
                <div className="flex items-center w-full text-center">
                  <span className="flex justify-end w-full font-bold text-[20px] mr-[5px]">
                    25
                  </span>
                  <span className="flex justify-start w-full font-bold text-[10px] text-[#14AE5C] text-center">
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
                <span className="text-gray-600 font-bold text-[8px]">
                  Weather Model Predictions
                </span>
                <div className="flex items-center">
                  <span className="font-bold text-[20px] mr-[5px]">5</span>
                  <span className="font-light text-[20px]">| 20%</span>
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
                <span className="text-gray-600 font-bold text-[8px]">
                  Manually Reported Alerts
                </span>
                <div className="flex items-center">
                  <span className="font-bold text-[20px] mr-[5px]">2</span>
                  <span className="font-light text-[20px]">| 8%</span>
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
        </div>
        <div className="flex w-full justify-center">
          <AlertSourcesPieChart />
        </div>
      </div>
    </>
  );
}
