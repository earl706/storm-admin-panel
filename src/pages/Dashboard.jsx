import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="pt-[15px] pr-[26px]">
        <div className="flex justify-between items-center mb-[18px]">
          <div className="text-[10px]">
            <span className="text-gray-600">Pages / </span>
            <span className="text-black">Dashboard</span>
          </div>
          <div className="flex justify-evenly items-center gap-[30px]">
            <div className="h-[20px] w-[20px] bg-white"></div>
            <div className="h-[20px] w-[20px] bg-white"></div>
            <div className="h-[20px] w-[20px] bg-white"></div>
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
            <div className="w-[50px] h-[50px] bg-[#1E6091] rounded-[10px]"></div>
          </div>
          <div className="flex items-center justify-between w-full h-[75px] bg-white rounded-[15px] drop-shadow-lg">
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
            <div className="w-[50px] h-[50px] bg-[#1E6091] mr-[15px] rounded-[10px]"></div>
          </div>
          <div className="flex items-center justify-between w-full h-[75px] bg-white rounded-[15px] drop-shadow-lg">
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
            <div className="w-[50px] h-[50px] bg-[#1E6091] mr-[15px] rounded-[10px]"></div>
          </div>
          <div className="flex items-center justify-between w-full h-[75px] bg-white rounded-[15px] drop-shadow-lg">
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
            <div className="w-[50px] h-[50px] bg-[#1E6091] mr-[15px] rounded-[10px]"></div>
          </div>
        </div>
        <div className="flex justify-between gap-[40px]">
          <div className="bg-white h-[300px] w-full rounded-[15px] drop-shadow-lg">
            <span className="pl-[30px] py-[30px] text-[12px] font-bold">
              Latest Alerts
            </span>
            <table>
              <thead className="flex justify-evenly">
                <th>sad</th>
                <th>sad</th>
                <th>sad</th>
              </thead>
              <tbody>
                <td>sad</td>
                <td>sad</td>
                <td>sad</td>
              </tbody>
            </table>
          </div>
          <div className="bg-white h-[300px] w-full rounded-[15px] drop-shadow-lg"></div>
        </div>
      </div>
    </>
  );
}
