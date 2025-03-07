import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      stacked: true,
      ticks: {
        font: {
          size: 10,
        },
      },
    },
    x: {
      stacked: true,
      ticks: {
        font: {
          size: 10,
        },
      },
    },
  },
};

const labels = [
  "/api/alerts/active",
  "/api/risk-analysis",
  "/api/sensors",
  "/api/alerts/acknowledge",
];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      data: [2300, 1400, 1350, 3150],
      backgroundColor: "#1E6091",
      borderColor: "#1E6091",
    },
  ],
};

export default function APIRequestCountByEndpointBarGraph() {
  return <Bar options={options} data={data} />;
}
