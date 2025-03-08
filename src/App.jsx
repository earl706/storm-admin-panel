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
        <div className="">
          Sorry. This application is only available in desktop
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
