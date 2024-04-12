import React from "react";
import '../Transaction/Transaction.css';
import {Flex,Button} from 'antd';
import { CalendarOutlined,SearchOutlined,DownOutlined } from "@ant-design/icons";

export default function Transaction(){
    const payment = [
        {
            id:1,
            title:"Paypal Transfer",
            content:"November 24th, 2020 at 2:45 AM",
        },
        {
            id:1,
            title:"Upgrade Storage Plan",
            content:"Septemder 12th, 2020 at 11:56 AM",
        },
        {
            id:0,
            title:"Bank Transfer",
            content:"September 5th, 2020 at 11:56 AM",
        },
        {
            id:1,
            title:"Youtube Monthly Subcrition",
            content:"September 5th, 2020 at 11:56 AM",
        },
        {
            id:0,
            title:"Bank Transfer",
            content:"September 5th, 2020 at 11:56 AM",
        },
    ];
    const user = [
        {
            id:1,
            name:"Thomas Edison",
            mail:"@thomasedis",
            price:"-$98.21",
            image:"https://avatars2.githubusercontent.com/u/132554"

        },
        {
            id:1,
            name:"Dropbox",
            mail:"",
            price:"-$200",
            image:"/dropbox.png"

        },
        {
            id:0,
            name:"Louis Khun",
            mail:"@thomasedis",
            price:"+$500",
            image:"https://avatars0.githubusercontent.com/u/81672"

        },
        {
            id:1,
            name:"Youtube",
            mail:"",
            price:"-$200",
            image:"/video.png"

        },
        {
            id:0,
            name:"Isabella Sirait",
            mail:"@thomasedis",
            price:"+$500",
            image:"https://i.pinimg.com/736x/52/f5/07/52f5071f366926b2c504cb6bd1e0d3d9.jpg"

        },
    ]
    return(
        <div className="transaction-container">
            <Flex justify="space-between" style={{paddingTop:"5px",paddingBottom:"5px",paddingLeft:"25px",paddingRight:"25px"}}>
                <p style={{fontSize:"20px"}}>All Transaction </p>
                <Flex gap="40px">
                    <Flex gap="20px" align="center">
                        <Button size="middle" className="transaction-button">History</Button>
                        <Button size="middle" className="transaction-button">upcoming</Button>
                        <Button size="middle" className="transaction-button">Request</Button>
                    </Flex>
                    <Flex gap="20px" align="center">
                    <CalendarOutlined style={{color:"#C0BCBC",fontSize:"20px"}}/>
                    <SearchOutlined style={{color:"#C0BCBC",fontSize:"20px"}}/>
                    <img src="/filter.png" alt="filter" height={20} width={20}/>
                    </Flex>
                </Flex>
            </Flex>
            <div className="separator"></div>
            <Flex justify="space-between" style={{paddingLeft:"20px"}}>
                <div>
                    {
                        payment.map((item)=>(
                            <Flex align="center" gap="20px">
                                <img src={item.id === 0 ? "/down.png":"/top.png"} alt="top" width={45} height={45}/>
                                <div>
                                    <p className="payment-title">{item.title}</p>
                                    <p className="payment-content">{item.content}</p>
                                </div>
                            </Flex>
                        ))
                    }
                </div>
                <div className="user-layout">
                    {
                        user.map((item)=>(
                            <Flex align="center" justify="space-between" style={{paddingBottom:"13px"}}>
                                <Flex align="center" gap="20px">
                                    <img src={item.image} alt="design" width={45} height={45} style={{borderRadius:"10px"}}/>
                                    <Flex vertical gap="7px">
                                        <div className="user-name">{item.name}</div>
                                        {
                                            item.mail !== "" && <div className="user-mail">{item.mail}</div>
                                        }
                                    </Flex>
                                </Flex>
                                <p className="user-price" style={{color:item.id === 1 ?"#FF6021":"#0E936F"}}>{item.price}</p>
                            </Flex>
                        ))
                    }
                </div>
            </Flex>
            <Flex justify="center">
                <Flex className="loadMore" gap="10px">Load More <DownOutlined /></Flex>
            </Flex>
        </div>
    )
}