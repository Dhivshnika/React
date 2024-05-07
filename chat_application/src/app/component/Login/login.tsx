import { Button, Flex } from "antd";
import {signIn} from "next-auth/react";
import '../Login/login.css';
export default function login (){
    return(
        <Flex className="mainContainer" vertical justify="space-between">
            <Flex justify="flex-end">
                <div className="top-circle"></div>
            </Flex>
            <Flex vertical justify="center" align="center">
                <img src="/touch.png" alt="touch" width="70px" height="70px" className="mainImg"/>
                <div className="sign-title">Sign in with Touch ID</div>
                <div style={{color:"white"}}>Use your Touch ID for faster,easier</div>
                <div className="account">access to your account</div>
                <Button className="login-button" size="large" onClick={() => signIn()}>Login with Email</Button>
                <div className="new-user">New User? Sign Up</div>
            </Flex>
            <Flex justify="flex-end">
                <Flex justify="center" className="bottom-circle">Help?</Flex>
            </Flex>
        </Flex>
    )
}