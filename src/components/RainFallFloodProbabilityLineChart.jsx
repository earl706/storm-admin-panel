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

export default function RainFallFloodProbabilityLineChart() {
  const generateRainFallData = () => {
    let dates = [];
    for (let i = 0; i != 30; i++) {
      dates.push(parseInt(Math.random() * (150 - 50) + 50));
    }
    return dates;
  };

  const getPast30Days = () => {
    const dates = [];
    for (let i = 30; i != 0; i--) {
      if (i % 5 == 0) {
        const date = subDays(new Date(), i);
        dates.push(format(date, "MMM dd"));
      } else {
        dates.push("");
      }
    }
    return dates;
  };

  const options = {
    plugins: {
      //   title: {
      //     display: false,
      //   },
      //   legend: {
      //     display: false,
      //   },
    },
    scales: {
      y: {
        stacked: true,
        ticks: {
          font: {
            size: 7,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 6,
          },
        },
      },
    },
  };

  const data = {
    labels: getPast30Days(),
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "#1E6091",
        data: generateRainFallData().map((num) => (num / 150) * 100),
        borderColor: "#1E6091",
        tension: 0.1,
      },
      {
        label: "Flood Probability",
        backgroundColor: "#B3261E",
        data: generateRainFallData().map((num) => (num / 150) * 100),
        borderColor: "#B3261E",
        tension: 0.1,
      },
    ],
  };
  return <Line data={data} options={options} />;
}
