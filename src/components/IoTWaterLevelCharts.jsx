import React from "react";
import { format, subDays } from "date-fns";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function IoTWaterLevelCharts() {
  const generatePastHours = () => {
    const hours = [];
    const now = new Date();
    for (let i = 19; i >= 0; i--) {
      const hour = new Date(now.getTime() - i * 60 * 60 * 1000);
      hours.push(hour.getHours() + ":00"); // Format as "HH:00"
    }
    return hours;
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
    scales: {
      y: {
        stacked: true,
        ticks: {
          font: {
            size: 4, // Adjust Y-axis font size
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 4, // Adjust Y-axis font size
          },
        },
      },
    },
  };

  const data = {
    labels: generatePastHours(),
    datasets: [
      {
        label: "",
        backgroundColor: "#1E6091",
        data: generatePastHours().map(
          () => Math.random() * (1.95 - 1.55) + 1.55
        ),
        borderColor: "#1E6091",
        tension: 0.1,
      },
    ],
  };
  return <Line data={data} options={options} />;
}
