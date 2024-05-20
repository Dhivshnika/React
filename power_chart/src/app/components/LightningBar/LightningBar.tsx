"use client";

import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Dropdown, Flex, Menu } from "antd";
import LightningRing from "../LignthingRing/LightningRing";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import "../../globals.css";

export default function LightningBar() {
  const [drop, setDrop] = useState<any>("Today");
  const items = [
    {
      key: 1,
      label: "Today",
    },
    {
      key: 2,
      label: "This Week",
    },
    {
      key: 3,
      label: "This Month",
    },
    {
      key: 4,
      label: "This Year",
    },
    {
      key: 5,
      label: "Last 24 Hours",
    },
    {
      key: 6,
      label: "Last 7 Days",
    },
    {
      key: 7,
      label: "Last 30 Days",
    },
    {
      key: 8,
      label: "Last 12 Months",
    },
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
  const data = [
    ["Panel 1", 190],
    ["Panel 2", 130],
    ["Panel 3", 90],
    ["Panel 4", 120],
    ["Panel 5", 140],
    ["Panel 6", 180],
  ];
  const sortedData = data.sort((a: any, b: any) => a[1] - b[1]);

  const options = {
    chart: {
      type: "column",
      height: 250,
      width: 800,
    },
    title: {
      text: "",
    },
    xAxis: {
      type: "category",
      labels: {
        autoRotation: [-45, -90],
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Energy (kWh)",
        style: {
          color: "black",
          fontWeight: "bold",
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Energy",
        colors: [
          "#89CFF0",
          "#72A0C1",
          "#7CB9E8",
          "#0066b2",
          "#002D62",
          "#B9D9EB",
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: sortedData,
      },
    ],
  };

  return (
    <Flex vertical className="box-header" gap="5px" style={{ width: "95%" }}>
      <Flex justify="space-between" align="self-start">
        <Flex vertical gap="5px">
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>
            Lightning Zone Energy Ranking
          </div>
          <div className="subTitle">1/1/2024 - 1/2/2024 (Central Time)</div>
        </Flex>

        <Flex gap="15px" align="center">
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
          <MenuOutlined style={{ fontSize: "25px" }} />
        </Flex>
      </Flex>
      <div style={{ fontSize: "20px", fontWeight: "600" }}>Total: 865.21</div>
      <Flex justify="space-between">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <Flex
          vertical
          style={{ width: "35%", height: "250px", marginLeft: "40px" }}
        >
          <div
            style={{
              border: "2px solid black",
              borderRadius: "5px",
              padding: "5px",
              width: "fit-content",
              marginLeft: "40px",
              marginTop: "-20px",
            }}
          >
            Total: 865.21
          </div>
          <LightningRing />
        </Flex>
      </Flex>
    </Flex>
  );
}
