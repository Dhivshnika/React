import React from "react";
import "../Expense/Expense.css";
import { Flex } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Expense() {
  const ctx = document.createElement("canvas").getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 130);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(1, "yellow");
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: false,
        data: [4.3, 7.5, 3, 5.25, 7, 5, 6],
        backgroundColor: gradient,
        barThickness: 12,
        barPercentage: 0.8,
        categoryPercentage: 0.9,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        min: 2,
        max: 8,
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 2,
          callback: function (value, index, values) {
            return value + " AM";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let time = tooltipItem.formattedValue.split(".");
            let minutes = time.length === 2 ? ":" + time[1].padEnd(2, "0") : "";
            return time[0] + minutes + " AM";
          },
        },
      },
    },
    elements: {
      bar: {
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderRadius: 4,
      },
    },
  };

  return (
    <div className="expense">
      <h1>Expense</h1>
      <Flex justify="space-between">
        <div>
          <Flex className="expense-tax-style" gap="5px">
            <DownOutlined />
            <div>+2,5%</div>
          </Flex>
          <div className="expense-note">Bigger than last week</div>
        </div>
        <div className="dollor">$802.16</div>
      </Flex>
      <div className="chart-container" style={{ width: "300px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
