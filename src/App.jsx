import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import AlertsPage from "./pages/AlertsPage";
import InsightsPage from "./pages/InsightsPage";
import SensorsPage from "./pages/SensorsPage";
import stormLogo from "/src/assets/storm-logo.png";
import APIPage from "./pages/APIPage";

function App() {
  const [deviceType, setDeviceType] = useState("Loading...");
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/Mobi|Android/i.test(ua)) return "Mobile";
    if (/Tablet|iPad/i.test(ua)) return "Tablet";
    return "Desktop";
  };

  const routes = [
    { route: "/", component: <Dashboard /> },
    { route: "/alerts", component: <AlertsPage /> },
    { route: "/insights", component: <InsightsPage /> },
    { route: "/sensors", component: <SensorsPage /> },
    { route: "/api-metrics", component: <APIPage /> },
  ];

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);
  if (deviceType == "Mobile" || deviceType == "Tablet") {
    return (
      <>
        <div className="w-full h-screen">
          <div className="flex justify-center items-center pt-[23px] font-bold overflow-hidden">
            <div className="w-[34px] h-[34px] bg-transparent rounded-[10px] mr-[17px]">
              <img src={stormLogo} alt="" width={40} height={40} />
            </div>
            <span className="text-[33px] text-[#1E6091] ">STORM</span>
          </div>
          <div className="w-full mb-8 text-center font-semibold text-[8px] text-[#1E6091]">
            Smart Tracking Overflow and Rainfall Monitoring
          </div>
          <div className="w-full mb-4 text-center font-bold text-[12px] text-[#1E6091]">
            Sorry. This application is only available in desktop
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.route}
                element={<Navbar>{route.component}</Navbar>}
              />
            ))}
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
