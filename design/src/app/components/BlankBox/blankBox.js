'use client'
import React from "react";
import '../BlankBox/blankBox.css';
import { ShadowBoxCTA } from "@storybook/design-system";
import { WarningFilled } from "@ant-design/icons";
import { Flex } from "antd";
import Image from "next/image";
function blankBox() {
    return (
        <ShadowBoxCTA
            style={{ display: "block", borderRadius: '10px' }}
            messageText={
                <Flex vertical >
                    <Flex justify="space-between" gap="large">
                        <Flex className="copy" align="center" justify="center">
                            <Image width={80} height={80} src="/assets/copy.png" alt="copy" />
                        </Flex>
                        <Flex vertical align="flex-end">
                            <p className="used">Used Space</p>
                            <p className="data"><span>49/50</span> GB</p>
                        </Flex>
                    </Flex>
                    <div className="separator"></div>
                    <Flex gap="small">
                        <WarningFilled style={{ color: "red", fontSize: "25px", marginTop: "20px" }} />
                        <p className="more">Get more space</p>
                    </Flex>
                </Flex>
            }
        />
    );
}
export default blankBox;