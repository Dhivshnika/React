'use client'
import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import {signOut,useSession} from "next-auth/react";
import '../../globals.css';

export default function logout(){
    const { data: session } = useSession();
    return(
        <div className="flex login h-screen bg-image">
            <div className="loginLeft rounded-tr-full rounded-br-full flex items-center flex-col justify-center w-1/2 space-y-5">
                <div className="text-5xl font-bold">Get started</div>
                <p>Welcome to Medio. Start for free to create a new 3D projects!</p>
                <img src={session?.user?.image as string} height={70} width={70} alt="profile" className="rounded-full"/>
                <p>{session?.user?.email}</p>
                <button onClick={() => signOut()}><LogoutOutlined /></button>
          </div>
          </div>
            
    )
}

