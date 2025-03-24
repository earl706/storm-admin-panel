import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import stormLogo from "/src/assets/storm-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePollHorizontal,
  faCircleRadiation,
  faEye,
  faSatelliteDish,
  faServer,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ children, device }) {
  const navigationItems = [
    {
      navItem: "Dashboard",
      link: "/",
      icon: <FontAwesomeIcon icon={faSquarePollHorizontal} />,
    },
    {
      navItem: "Alerts",
      link: "/alerts",
      icon: <FontAwesomeIcon icon={faCircleRadiation} />,
    },
    {
      navItem: "Insights",
      link: "/insights",
      icon: <FontAwesomeIcon icon={faEye} />,
    },
    {
      navItem: "Sensors",
      link: "/sensors",
      icon: <FontAwesomeIcon icon={faSatelliteDish} />,
    },
    {
      navItem: "API",
      link: "/api-metrics",
      icon: <FontAwesomeIcon icon={faServer} />,
    },
  ];

  useEffect(() => {
    // console.log(device);
  }, [device]);

  if (device == "Mobile") {
    return (
      <div className="flex flex-col min-h-screen w-screen">
        <main className="px-[30px] pt-[30px] pb-[110px]">{children}</main>
        <div className="bg-gray-100 fixed w-full h-[100px] bottom-0 pb-[30px]]"></div>
        <nav className="fixed w-full bottom-[30px]">
          <ul className="flex justify-evenly w-full">
            {navigationItems.map((navItem, index) => (
              <li key={index}>
                <NavLink
                  to={navItem.link}
                  className={({ isActive }) =>
                    isActive
                      ? "flex w-[50px] h-[50px] justify-center items-center transition p-[10px] bg-white rounded-[10px]"
                      : "flex w-[50px] h-[50px] justify-center items-center transition  p-[10px]"
                  }
                >
                  <div
                    className={`flex justify-center items-center w-[30px] h-[30px] text-[#1E6091]`}
                  >
                    {navItem.icon}
                  </div>
                  {/* <span className="text-left">{navItem.navItem}</span> */}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  } else if (device == "Desktop") {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 h-screen pl-[41px] flex fixed flex-col">
          <div className="flex justify-center items-center pt-[23px] font-bold overflow-hidden">
            <div className="w-[34px] h-[34px] bg-transparent rounded-[10px] mr-[17px]">
              <img src={stormLogo} alt="" width={40} height={40} />
            </div>
            <span className="text-[33px] text-[#1E6091] ">STORM</span>
          </div>
          <div className="w-full mb-4 text-center font-semibold text-[8px] text-[#1E6091]">
            Smart Tracking Overflow and Rainfall Monitoring
          </div>
          <nav className="flex-grow font-semibold overflow-hidden mb-4">
            <ul className="mb-12">
              {navigationItems.map((navItem, index) => (
                <li key={index}>
                  <NavLink
                    to={navItem.link}
                    className={({ isActive }) =>
                      isActive
                        ? "flex w-[213px] text-[14px] justify-start items-center transition py-[8px] mb-[10px] px-[10px] rounded-[15px] drop-shadow-lg bg-white text-[#1E6091]"
                        : "flex w-[213px] text-[14px] justify-start items-center transition py-[8px] px-[10px] mb-[10px] rounded-[15px] text-[#525252] hover:bg-white hover:drop-shadow-lg hover:text-[#1E6091] "
                    }
                  >
                    <div
                      className={`flex justify-center items-center w-[34px] h-[34px] bg-[#1E6091] rounded-[10px] mr-[13px] text-white`}
                    >
                      {navItem.icon}
                    </div>
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
              <div className="flex justify-center items-center w-[34px] h-[34px] bg-[#1E6091] rounded-[10px] mr-[13px] text-white">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
              Logout
            </NavLink>
          </div>
        </aside>
        <main className="flex-grow w-[1134px] ml-64">
          <div className="pl-[40px] pr-[27px]">{children}</div>
        </main>
      </div>
    );
  }
}
