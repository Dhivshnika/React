import React from "react";
import { Flex } from "antd";
import { UpOutlined } from "@ant-design/icons";
import { Bar } from "react-chartjs-2";
import '../Income/Income.css';
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

export default function Income(){
  const ctx = document.createElement("canvas").getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 0, 120);
  gradient.addColorStop(0, "blue");
  gradient.addColorStop(1, "skyblue");
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: false,
        data: [2.50, 6.23, 4, 8, 7, 5, 3],
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
    <div className="income">
      <h1>Income</h1>
      <Flex justify="space-between">
        <div>
          <Flex className="income-tax-style" gap="5px">
            <UpOutlined />
            <div>+4,6%</div>
          </Flex>
          <div className="income-note">Bigger than last week</div>
        </div>
        <div className="dollor">$1,572.68</div>
      </Flex>
      <div className="chart-container" style={{width:"300px"}}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );

}