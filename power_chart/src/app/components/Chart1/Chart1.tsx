import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import '../../globals.css';

export default function Chart1() {
  const [selectedFilter, setSelectedFilter] = useState("This Week");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const options = {
    chart: {
      type: "column",
      height: 300,
      width: 600,
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      crosshair: true,
      accessibility: {
        description: "week days",
      },
    },
    yAxis: {
      min: 0,
      max: 19999,
      tickInterval: 5000,
      labels: {
        formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
          if (typeof this.value === 'number') {
              return Highcharts.numberFormat(this.value, 0,'.',',');
          }
          return '';
      }
      },
      title: {
        text: "kWh",
      },
    },
    tooltip: {
      valueSuffix: " kWh",
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Last Week",
        data: [10292, 4000, 9000, 300, 7500, 14500],
        color:
          selectedFilter === "Last Week" || selectedFilter === "All"
            ? "lightGreen"
            : "lightgrey",
      },
      {
        name: "This Week",
        data: [3000, 13000, 5500, 1000, 17180, 7000],
        color:
          selectedFilter === "This Week" || selectedFilter === "All"
            ? "green"
            : "lightgrey",
      },
    ],
  };

  return (
    <Flex
      vertical
      gap="5px"
      className="box-header"
    >
      <Flex justify="space-between" align="self-start">
      <Flex vertical gap="5px">
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>Energy ...</div>
        <div className='subTitle'>12/24/2023 - 1/1/2024 (PacificTime)</div>
        </Flex>
        
        <Flex gap="15px" align="center">
          <select
            onChange={(e) => handleFilterChange(e.target.value)}
            value={selectedFilter}
            className="select-style"
          >
            <option value="All">All</option>
            <option value="Last Week">Last Week</option>
            <option value="This Week">This Week</option>
          </select>
          <img src="/box.png" alt="box" width="30px" height="30px" />
          <MenuOutlined style={{ fontSize: "25px" }} />
        </Flex>
      </Flex>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Flex>
  );
};
