'use client'
import { Flex } from 'antd';
import React from 'react';
import './globals.css';
import { AvatarList, Button, Header, Icon, Input, NavItem, NavLink, TagItem, TagList } from '@storybook/design-system';
function Home() {
  return (
    <div>
      <Header
        logo={<h1 className='logo'>FAYBAY</h1>}
        links={<Flex align='center' gap="middle">
          <Input id="Pill" value="" label="Search" placeholder='Search' hideLabel icon="search" appearance="pill" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
          <Flex align='center'>
            <NavItem showDesktop>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem showDesktop>
              <NavLink href="/">PRODUCTS</NavLink>
            </NavItem>
            <NavItem showDesktop>
              <NavLink href="/">MY ORDERS</NavLink>
            </NavItem>
            <NavItem showDesktop>
              <NavLink href="/">CONTACT US</NavLink>
            </NavItem>
            <NavItem showDesktop>
              <AvatarList
                users={[
                  {
                    avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
                    id: '1',
                    name: 'Dominic Nguyen'
                  },
                  {
                    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
                    id: '2',
                    name: 'Tom Coleman'
                  },
                  {
                    avatarUrl: 'https://avatars0.githubusercontent.com/u/81672',
                    id: '3',
                    name: 'Zoltan Olah'
                  },
                  {
                    avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
                    id: '4',
                    name: 'Tim Hingston'
                  }
                ]} isLoading={false} />
            </NavItem>
          </Flex>
        </Flex>}
        mobileMenu={false}
        style={{ width: "90%", margin: "0px", paddingTop: "10px", marginLeft: "40px", }}
      />
      <Flex align='center' vertical>
        <Flex justify='space-between' align='center' style={{ width: "80%", marginTop: "20px", }}>
          <Flex vertical justify='space-between' style={{ width: "50%", height: "18pc" }}>
            <div>
              <h2 className='cordial'>CORDIAL</h2>
              <h2 className='online'>ONLINE SHOPPING</h2>
              <p>Buy Now or Cry Later</p>
              <Flex vertical style={{ width: "45%", marginBottom: "20px" }} gap="large">
                <Input
                  id="Icon"
                  value=""
                  placeholder='Mail'
                  label="Input with icon"
                  hideLabel
                  icon="email"
                  appearance='pill'
                  type='mail'
                  style={{ fontSize: "15px", paddingTop: "10px", paddingBottom: "10px" }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                <Input
                  id="Password"
                  value=""
                  label="Password input"
                  type="password"
                  placeholder='Password'
                  hideLabel
                  icon="key"
                  appearance='pill'
                  style={{ fontSize: "15px", paddingTop: "10px", paddingBottom: "10px" }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
              </Flex>
              <Button appearance='tertiary' style={{ width: "45%" }} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Login</Button>
            </div>
          </Flex>
          <img src='https://limoobit.com/Content/Images/uploaded/dourtal-shop-1.png' width={500} height={500} />
        </Flex>
        <Icon icon="circle" className="blueBall1" />
        <Icon icon="circle" className="pinkBall1" />
        <Icon icon="circle" className="greenBall1" />
        <Icon icon="circle" className="blueBall2" />
        <Icon icon="circle" className="pinkBall2" />
        <Icon icon="circle" className="greenBall2" />
      </Flex>
    </div >
  );
}
export default Home;