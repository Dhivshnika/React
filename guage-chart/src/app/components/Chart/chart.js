'use client'
import React from "react"
import GaugeChart from 'react-gauge-chart';
import { Flex } from "antd";
function guageChart() {
    const value = 75;
    return (
        <Flex>
            <GaugeChart
                percent={value / 100}
                nrOfLevels={30}
                arcsLength={[0.5, 0.3, 0.2]}
                colors={['#EA4228', '#F5CD19', '#5BE12C']}
                labels={['Low', 'Medium', 'High']}
                arcPadding={0}
                cornerRadius={0}
                textColor={"pink"}
            />
            <GaugeChart
                nrOfLevels={30}
                colors={["#00cccc", "#00ffff", "#ff0000"]}
                arcWidth={0.5}
                percent={55 / 100}
            />
        </Flex>
    )
}
export default guageChart;