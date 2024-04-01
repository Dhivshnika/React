'use client'
import React from "react";
import { Button, Input } from "antd";
import { MailOutlined,UserOutlined,LockOutlined,GithubOutlined,GoogleOutlined } from "@ant-design/icons";
import {signIn} from "next-auth/react";
import '../../globals.css';

export default function login(){
    return(
        <div className="flex login h-screen bg-image">
            <div className="loginLeft rounded-tr-full rounded-br-full flex items-center flex-col justify-center w-1/2 space-y-5">
                <div className="text-5xl font-bold">Get started</div>
                <p>Welcome to Medio. Start gor free to create a new 3D projects!</p>
                <p>Already have account? <span style={{color:"green"}}>Sign In</span></p>
                <Input size="large" placeholder="Your name" prefix={<UserOutlined />} className="w-1/2 space-x-2" />
                <Input size="large" placeholder="Email" prefix={<MailOutlined />} className="w-1/2 space-x-2"/>
                <Input size="large" placeholder="Password" prefix={<LockOutlined />} className="w-1/2 space-x-2"/>
                <Button type="primary" className="w-1/2">Login</Button>
                <p>or</p>
                <div className="pb-0">Sign in with
                <div className="flex space-x-5 mt-2 justify-center">
                <button onClick={() => signIn('github')}><GoogleOutlined /></button>
          <button onClick={() => signIn('google')}> <GithubOutlined /></button>
          </div>
          </div>
            </div>
            
        </div>
    )
}

