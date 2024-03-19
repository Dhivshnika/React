'use client'
import { Flex } from "antd";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import GaugeChart from 'react-gauge-chart';
export default function speed() {
    return (
        <Flex>
            <ReactSpeedometer
                maxValue={120}
                minValue={0}
                value={56}
                needleTransition="easeQuadIn"
                needleTransitionDuration={1000}
                needleColor="red"
                startColor="green"
                segments={10}
                endColor="blue"
                width={400}
            />
            <ReactSpeedometer
                value={20}
                currentValueText="Happiness Level"
                maxValue={120}
                minValue={0}
                customSegmentLabels={[
                    {
                        text: "Very Bad",
                        position: "INSIDE",
                        color: "#555",
                    },
                    {
                        text: "Bad",
                        position: "INSIDE",
                        color: "#555",
                    },
                    {
                        text: "Ok",
                        position: "INSIDE",
                        color: "#555",
                        fontSize: "19px",
                    },
                    {
                        text: "Good",
                        position: "INSIDE",
                        color: "#555",
                    },
                    {
                        text: "Very Good",
                        position: "INSIDE",
                        color: "#555",
                    },
                ]}
                width={400}
            />

        </Flex>
    )
}