import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import stormLogo from "/src/assets/storm-logo.png";

export default function Navbar({ children }) {
  const navigationItems = [
    { navItem: "Dashboard", link: "/" },
    { navItem: "Alerts", link: "/alerts" },
    { navItem: "Insights", link: "/insights" },
    { navItem: "IoT", link: "/iot" },
    { navItem: "API", link: "/api" },
  ];
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 h-[calc(100vh-2rem)] my-4 pl-[41px] flex sticky flex-col">
        <div className="flex justify-center items-center pt-[24px] font-bold mb-4 overflow-hidden">
          <div className="w-[34px] h-[34px] bg-transparent rounded-[10px] mr-[17px]">
            <img src={stormLogo} alt="" width={40} height={40} />
          </div>
          <span className="text-[33px] text-[#1E6091]">STORM</span>
        </div>
        <nav className="flex-grow font-semibold overflow-hidden mb-4">
          <ul className="mb-12">
            {navigationItems.map((navItem, index) => (
              <li key={index}>
                <NavLink
                  to={navItem.link}
                  className={({ isActive }) =>
                    isActive
                      ? "flex w-[213px] text-[14px] drop-shadow-lg justify-start items-center py-[8px] my-2 mb-[10px] px-[10px] rounded-[15px] bg-white text-[#1E6091]"
                      : "flex w-[213px] text-[14px] justify-start items-center transition py-[8px] px-[10px] mb-[10px] rounded-[15px] text-[#525252] hover:bg-white hover:drop-shadow-lg hover:text-[#1E6091] "
                  }
                >
                  <div className="w-[34px] h-[34px] bg-[#1E6091] rounded-[10px] mr-[13px]"></div>
                  <span className="text-left">{navItem.navItem}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" overflow-hidden">
          <NavLink
            to="/login"
            onClick={() => {
              localStorage.clear();
            }}
            className="flex w-[213px] font-bold text-[14px] justify-start items-center transition py-[8px] px-[10px] mb-[10px] rounded-lg text-[#525252] hover:bg-white hover:drop-shadow-lg hover:text-[#1E6091]"
          >
            <div className="w-[34px] h-[34px] bg-[#1E6091] rounded-[10px] mr-[13px]"></div>
            Logout
          </NavLink>
        </div>
      </aside>
      <main className="flex-grow w-[1134px]">
        <div className="pl-[40px]">{children}</div>
      </main>
    </div>
  );
}
