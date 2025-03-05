import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Acknowledged", "Unacknowledged"],
  datasets: [
    {
      label: "",
      data: [34, 23],
      backgroundColor: ["#1E6091", "#0E3061"],
      borderColor: ["#1E6091", "#0E3061"],
      borderWidth: 1,
    },
  ],
};

export default function AlertsAcknowledgedPieChart() {
  return <Pie data={data} />;
}
