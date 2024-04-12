import React from "react";
import '../Balance/Balance.css';
import { EllipsisOutlined } from "@ant-design/icons";
import {Flex} from 'antd';

export default function Balance(){
    return( 
        <Flex vertical justify="space-between" className="balance-container">
            <div style={{padding:"20px"}}>
                <Flex justify="space-between" style={{color:"white"}}>
                    <p style={{fontSize:"13px"}}>Your Balance</p>
                    <EllipsisOutlined style={{fontSize:"40px"}}/>
                </Flex>
                <div className="balance-dollar">$9,425</div>
                <Flex justify="space-between" style={{color:"white",fontSize:"20px",marginTop:"20px"}}>
                    <p style={{marginTop:"10px",marginBottom:"10px"}}>2451 **** **** ****</p>
                    <p style={{marginTop:"10px",marginBottom:"10px"}}>02/21</p>
                </Flex>
            </div>
            <Flex justify="space-between" align="center" className="circle-box">
                <Flex vertical >
                    <div>Name</div>
                    <div className="h2">David Bekam</div>
                </Flex>
                <Flex vertical align="center">
                    <img src="/ringer.png" alt="circle" height={50} width={50}/>
                    <div style={{fontSize:"12px"}}>Mastersef</div>
                </Flex>
            </Flex>
        </Flex>
    )
}