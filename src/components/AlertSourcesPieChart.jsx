import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "IoT Sensor-Triggered Alerts",
    "Weather Model Prediction",
    "Manually Reported Reports",
  ],
  datasets: [
    {
      label: "",
      data: [18, 5, 2],
      backgroundColor: ["#1E6091", "#0E3061", "#0E0031"],
      borderColor: ["#1E6091", "#0E3061", "#0E0031"],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

export default function AlertSourcesPieChart() {
  return <Pie data={data} options={options} />;
}
