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

export default function FloodProbabilityByRegionLineChart() {
  const barangays = [
    "Agusan",
    "Baikingon",
    "Balulang",
    "Bayabas",
    "Bayanga",
    "Bonbon",
    "Bugo",
    "Bulua",
    "Camaman-an",
    "Canitoan",
    "Carmen",
    "Consolacion",
    "Cugman",
    "Dansolihon",
    "F.S. Catanico",
    "Gusa",
    "Indahag",
    "Iponan",
    "Kauswagan",
    "Lapasan",
    "Lumbia",
    "Macabalan",
    "Macasandig",
    "Nazareth",
    "Pagatpat",
    "Patag",
    "Puntod",
    "Tablon",
    "Taglimao",
    "Tignapoloan",
  ];

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
            size: 7,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 7,
          },
        },
      },
    },
  };

  const data = {
    labels: barangays,
    datasets: [
      {
        label: "",
        backgroundColor: "#1E6091",
        data: barangays.map(() => Math.random() * (99 - 5) + 5),
        borderColor: "#1E6091",
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} options={options} />;
}
