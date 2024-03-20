'use client'
import React from "react";
import '../Order/order.css';
import { ShadowBoxCTA } from "@storybook/design-system";
import { Flex, Progress } from "antd";
function order() {
    return (
        <ShadowBoxCTA
            style={{ display: "block", borderRadius: '10px' }}
            messageText={
                <Flex vertical >
                    <h3>Total Orders</h3>
                    <Flex className="year" justify="space-between">
                        <p>Last year expenses</p>
                        <h1>1896</h1>
                    </Flex>
                    <Progress percent={70} showInfo={false} />
                    <Flex justify="space-between" className="growth">
                        <p>YoY Growth</p>
                        <p>100%</p>
                    </Flex>
                </Flex>
            }
        />
    );
}
export default order;