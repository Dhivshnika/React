"use client";

import TableShow from "./components/TableShow/TableShow";
import Chart1 from "./components/Chart1/Chart1";
import LightningChart from "./components/LightningBar/LightningBar";
import { Flex } from "antd";
import EnergyRing from "./components/EnergyRing/EnergyRing";
import PowerBar from "./components/PowerBar/PowerBar";

export default function Home() {
  return (
    <Flex
      align="center"
      gap="30px"
      vertical
      style={{
        backgroundColor: "lavender",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <TableShow />
      <LightningChart />
      <Flex style={{ width: "96%" }} justify="space-between">
        <PowerBar />
        <EnergyRing />
      </Flex>
      <Flex style={{ width: "96%" }} justify="space-between">
        <Chart1 />
      </Flex>
    </Flex>
  );
}
