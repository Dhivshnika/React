"use client";

import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Dropdown, Flex, Menu, Space } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import "../../globals.css";

export default function EnergyRing() {
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
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      height: 250,
      width: 600,
    },
    title: {
      text: "",
      align: "left",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Energy",
        colorByPoint: true,
        borderWidth: 0,
        borderRadius: 0,
        data: [
          {
            name: "Zone 1 (%)",
            y: 74.77,
          },
          {
            name: "Zone 2 (%)",
            y: 12.82,
          },
          {
            name: "Zone 3 (%)",
            y: 0,
          },
          {
            name: "Zone 4 (%)",
            y: 0,
          },
        ],
      },
    ],
  };
  return (
    <Flex vertical className="box-header">
      <Flex justify="space-between" align="self-start">
        <Flex vertical gap="5px">
          <div style={{ fontSize: "25px", fontWeight: "bold" }}>
            Energy By Zone
          </div>
          <div className="subTitle">
            1/1/2024 - 1/2/2024 (Coordinated Universal Time)
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
