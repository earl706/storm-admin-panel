import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const routes = [{ route: "/", component: <Dashboard /> }];

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
