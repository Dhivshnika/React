import React, { useState } from "react";
import Highcharts, { SeriesColumnOptions } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Dropdown, Flex, Menu, Space } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import "../../globals.css";

export default function PowerBar() {
  const [drop, setDrop] = useState<any>("Today");
  const items = [
    { key: 1, label: "Today" },
    { key: 2, label: "This Week" },
    { key: 3, label: "This Month" },
    { key: 4, label: "This Year" },
    { key: 5, label: "Last 24 Hours" },
    { key: 6, label: "Last 7 Days" },
    { key: 7, label: "Last 30 Days" },
    { key: 8, label: "Last 12 Months" },
  ];

  const handleMenuClick = (id: any) => {
    const selectedItem = items.find((item) => item.key === id.key);
    if (selectedItem) {
      setDrop(selectedItem.label);
    }
    console.log(id.key);
  };

  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key} onClick={() => handleMenuClick(item)}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  const generateEnergyData = () => {
    const data = [];
    const start = new Date().setHours(1, 0, 0, 0);
    const end = new Date().setHours(23, 0, 0, 0);
    for (let time = start; time <= end; time += 60 * 1000) {
      const value =
        new Date(time).getMinutes() < 30 ? Math.floor(Math.random() * 200) : 0;
      data.push([time, value]);
    }
    return data;
  };

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      height: 270,
      width: 600,
    },
    title: {
      text: "",
    },
    xAxis: {
      type: "datetime",
      min: Date.UTC(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        1,
        0
      ),
      max: Date.UTC(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        23,
        0
      ),
      labels: {
        format: "{value:%I:%M %p}",
      },
      tickInterval: 2 * 3600 * 1000,
    },
    yAxis: [
      {
        title: {
          text: "kWh",
        },
        tickPositions: [0, 100, 200, 300, 400],
      },
      {
        title: {
          text: "m³",
        },
        opposite: true,
        tickPositions: [0, 10000000, 20000000, 30000000, 40000000],
        labels: {
          formatter: function (
            this: Highcharts.AxisLabelsFormatterContextObject
          ) {
            if (typeof this.value === "number") {
              return Highcharts.numberFormat(this.value, 0, ".", ",");
            }
            return "";
          },
        },
        plotLines: [
          {
            value: 10000000,
            color: "red",
            width: 2,
            label: {
              text: "Target",
              align: "left",
              style: {
                color: "red",
              },
            },
          },
        ],
      },
    ],
    series: [
      {
        type: "column",
        name: "Total Electricity Consumption (KWH) = Total Water Treated (m³)",
        data: generateEnergyData(),
        color: "brown",
        tooltip: {
          valueSuffix: " kWh",
        },
        yAxis: 0,
      } as SeriesColumnOptions,
    ],
  };

  return (
    <Flex vertical className="box-header" gap="5px">
      <Flex
        justify="space-between"
        align="self-start"
        style={{ marginBottom: "20px" }}
      >
        <Flex vertical gap="5px">
          <div style={{ fontSize: "25px", fontWeight: "bold" }}>
            Total Plant Energy Consumption
          </div>
          <div className="subTitle">
            Last Update: 1/2//2024 10:35:55 AM Updated in 0.06
          </div>
        </Flex>
        <Flex gap="15px">
          <Dropdown overlay={menu}>
            <a onClick={(e) => handleMenuClick(e)}>
              <Flex
                gap="30px"
                style={{
                  border: "1px solid black",
                  fontSize: "15px",
                  padding: "5px",
                  borderRadius: "4px",
                  marginRight: "20px",
                  color: "black",
                }}
              >
                {drop}
                <DownOutlined />
              </Flex>
            </a>
          </Dropdown>
          <img src="/box.png" alt="box" width="30px" height="30px" />
          <MenuOutlined style={{ fontSize: "30px" }} />
        </Flex>
      </Flex>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Flex>
  );
}
