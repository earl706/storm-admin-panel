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

export default function WaterLevelRainfallTrendLineChart() {
  const generateWaterLevelData = () => {
    let data = [];
    for (let i = 0; i != 7; i++) {
      data.push(parseInt(Math.random() * (90 - 33) + 33));
    }
    return data;
  };

  const generateRainFallData = () => {
    let data = [];
    for (let i = 0; i != 7; i++) {
      data.push(parseInt(Math.random() * (110 - 43) + 43));
    }
    return data;
  };

  const getPast7Days = () => {
    const dates = [];
    for (let i = 7; i != 0; i--) {
      const date = subDays(new Date(), i);
      dates.push(format(date, "MMM dd"));
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
    labels: getPast7Days(),
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "#1E6091",
        data: generateRainFallData(),
        borderColor: "#1E6091",
        tension: 0.1,
      },
      {
        label: "Average Water Level",
        backgroundColor: "#B3261E",
        data: generateWaterLevelData(),
        borderColor: "#B3261E",
        tension: 0.1,
      },
    ],
  };
  return <Line data={data} options={options} />;
}
