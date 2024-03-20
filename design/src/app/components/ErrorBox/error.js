'use client'
import React from "react";
import '../Order/order.css';
import { ShadowBoxCTA } from "@storybook/design-system";
import { Flex, Progress } from "antd";
import Image from "next/image";
import { ClockCircleOutlined } from "@ant-design/icons";
import '../ErrorBox/error.css';

function error() {
    return (
        <ShadowBoxCTA
            style={{ display: "block", borderRadius: '10px' }}
            messageText={
                <Flex vertical >
                    <Flex justify="space-between" style={{ marginBottom: "20px" }}>
                        <Image width={100} height={100} src="/assets/vectors.png" alt="vector" />
                        <Flex vertical align="flex-end">
                            <p className="error">Errors</p>
                            <p className="digit">23</p>
                        </Flex>
                    </Flex>
                    <div className="separator"></div>
                    <Flex gap="small">
                        <ClockCircleOutlined style={{ color: "grey", fontSize: "20px", marginTop: "20px" }} />
                        <p className="lastHour">In the last hour</p>
                    </Flex>
                </Flex>
            }
        />
    );
}
export default error;