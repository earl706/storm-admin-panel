import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Offline", "Online"],
  datasets: [
    {
      label: "",
      data: [5, 145],
      backgroundColor: ["#1E6091", "#0E3061"],
      borderColor: ["#1E6091", "#0E3061"],
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

export default function SensorsActiveVSOfflinePieChart() {
  return <Pie data={data} options={options} />;
}
