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
    { route: "/", component: <Dashboard device={deviceType} /> },
    { route: "/alerts", component: <AlertsPage device={deviceType} /> },
    { route: "/insights", component: <InsightsPage device={deviceType} /> },
    { route: "/sensors", component: <SensorsPage device={deviceType} /> },
    { route: "/api-metrics", component: <APIPage device={deviceType} /> },
  ];

  useEffect(() => {
    setDeviceType(getDeviceType());
    console.log(deviceType);
  });

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.route}
              element={<Navbar device={deviceType}>{route.component}</Navbar>}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
