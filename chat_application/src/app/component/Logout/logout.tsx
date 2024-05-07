'use client'
import {signOut,useSession} from "next-auth/react";
import { Button, Dropdown, Flex, Space } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import '../Logout/logout.css';
import Link from "next/link";
import { useDispatch } from 'react-redux';

export default function login (){
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const items = [
        {
            key:"1",
            label: (
                <div onClick={() => signOut()}>Logout</div>
              ),
        }
    ]
    const receivers = [
        {
            id:1,
            name:"Andrus Paayal",
            phone:"+918825717400",
            image:"https://avatars3.githubusercontent.com/u/1831709"
        },
        {
            id:2,
            name:"David Hinder",
            phone:"+919500352366",
            image:"https://avatars0.githubusercontent.com/u/81672"
        },
    ]
    const handleChat = (item:any) =>{
        dispatch({
            type: 'ADD_DETAILS',
            payload: item
        });
    }
    return(
        <Flex className="mainContainer" vertical>
            <Flex justify="space-between" align="center" style={{padding:"5px"}}>
                <img src={session?.user?.image as string} height={60} width={60} alt="profile" className="image-round"/>
                <Dropdown menu={{items}} placement="bottomRight">
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <MenuOutlined style={{color:"white",fontSize:"25px",fontWeight:"bold"}}/>
                    </Space>
                    </a>
                </Dropdown>
            </Flex>
            <h2 style={{color:"white",marginTop:"10px",paddingLeft:"5px"}}>Messages</h2>
            <Flex vertical className="subContainer">
                <Flex justify="center">
                    <Flex className="search" gap="10px">
                        <SearchOutlined style={{marginLeft:"5px"}}/>
                        <input type="text"/>
                    </Flex>
                </Flex>
                <div className="separatorMain"></div>
                {
                    receivers.map((item)=>(
                        <Flex vertical style={{marginTop:"10px"}} key={item.id}>
                            <Flex gap="20px" align="center" onClick={()=>handleChat(item)} >
                                <img src={item.image} alt="person" width={60} height={60} style={{borderRadius:"50px"}}/>
                                <Link style={{textDecoration:"none",color:"black"}} href={{pathname: '/dashboard'}} >
                                    <div>{item.name}</div>
                                </Link>
                            </Flex>
                            <Flex justify="flex-end" style={{width:"100%"}}>
                                <div className="separator"></div>
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
        
    )
}
