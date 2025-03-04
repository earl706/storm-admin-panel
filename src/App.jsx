import { useState } from "react";
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
  const routes = [
    { route: "/", component: <Dashboard /> },
    { route: "/alerts", component: <AlertsPage /> },
    { route: "/insights", component: <InsightsPage /> },
    { route: "/sensors", component: <SensorsPage /> },
    { route: "/api-metrics", component: <APIPage /> },
  ];

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

export default App;
