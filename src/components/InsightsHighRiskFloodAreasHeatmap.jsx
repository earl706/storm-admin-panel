import React from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const severityColors = {
  Low: "green",
  Medium: "yellow",
  High: "orange",
  Critical: "red",
};

const generateAlerts = (num) => {
  const alerts = [];
  const cdoBounds = {
    minLon: 124.55,
    maxLon: 124.73,
    minLat: 8.36,
    maxLat: 8.52,
  };
  const severityLevels = Object.keys(severityColors);

  for (let i = 0; i < num; i++) {
    alerts.push({
      lat:
        Math.random() * (cdoBounds.maxLat - cdoBounds.minLat) +
        cdoBounds.minLat,
      lon:
        Math.random() * (cdoBounds.maxLon - cdoBounds.minLon) +
        cdoBounds.minLon,
      severity:
        severityLevels[Math.floor(Math.random() * severityLevels.length)],
    });
  }
  return alerts;
};

const alerts = generateAlerts(50);

const data = {
  datasets: Object.keys(severityColors).map((severity) => ({
    label: severity,
    data: alerts
      .filter((a) => a.severity === severity)
      .map((a) => ({ x: a.lon, y: a.lat })),
    backgroundColor: severityColors[severity],
    pointRadius: 6,
  })),
};

const options = {
  scales: {
    x: { display: false },
    y: { display: false },
  },
  plugins: { legend: { display: true } },
};

export default function InsightsHighRiskFloodAreasHeatmap() {
  return (
    <div>
      <MapContainer
        center={[8.45, 124.63]}
        zoom={12}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {alerts.map((alert, index) => (
          <CircleMarker
            key={index}
            center={[alert.lat, alert.lon]}
            radius={40}
            fillColor={severityColors[alert.severity]}
            // color={"black"}
            weight={0.5}
            opacity={0.5}
            fillOpacity={0.25}
          />
        ))}
      </MapContainer>
      {/* <Scatter data={data} options={options} /> */}
    </div>
  );
}
