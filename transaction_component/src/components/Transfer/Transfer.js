import React from "react";
import "../Transfer/Transfer.css";
import {Flex,Progress} from 'antd';
import { color } from "chart.js/helpers";

export default function Transfer(){
    const transfer = [
        {
            color:"#B840FF",
            name:"Installment",
            price:"420.26",
            total:"1,000",
            image:"/purple.png",
            value:60
        },
        {
            color:"#0D9872",
            name:"Restaurant",
            price:"104.57",
            total:"500",
            image:"/green.png",
            value:20
        },
        {
            color:"#F5C312",
            name:"Transport",
            price:"104.57",
            total:"500",
            image:"/orange.png",
            value:80
        },
        {
            color:"#12CCF5",
            name:"Holiday",
            price:"104.57",
            total:"500",
            image:"/blue.png",
            value:40
        },
    ]
    return(
        <div className="Transfer-container">
            <h3 className="h3">Recent Transfer</h3>
            <p className="lang">Maiores dicta atque dolorem temporibus</p>
            <Flex className="user-image" gap="20px" style={{marginBottom:"40px"}}>
                <img src="https://avatars2.githubusercontent.com/u/263385" alt="man" width={50} height={50}/>
                <img src="https://avatars3.githubusercontent.com/u/1831709" alt="man" width={50} height={50}/>
                <img src="https://i.pinimg.com/736x/52/f5/07/52f5071f366926b2c504cb6bd1e0d3d9.jpg" alt="girl" width={50} height={50}/>
                <img src="/telegram.png" alt="telegram" width={50} height={50}/>
            </Flex>
            <h3 className="h3">Spending Categories</h3>
            <p className="lang">Maiores dicta atque dolorem temporibus</p> 
            {
                transfer.map((item)=>(
                    <Flex gap="20px" style={{marginBottom:"20px"}}>
                        <img src={item.image} alt="info" width={50} height={50}/>
                        <Flex vertical gap="5px">
                            <div>{item.name}</div>
                            <Progress percent={item.value} showInfo={false} strokeColor={item.color} style={{width:"250px"}}/>
                            <div className="transfer-price">$ {item.price} used <span>/from ${item.total}</span></div>
                        </Flex>
                    </Flex>
                ))
            }
        </div>
    )
}