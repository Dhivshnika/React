"use client"
import { Header, NavItem, NavLink, Input } from "@storybook/design-system";
import "../../components/Header/header.css";
import React from "react";
import Search from "antd/es/input/Search";
export default function header() {
    return (
        <Header
            style={{ marginTop: "-25px", marginBottom: "-25px" }}
            logo={
                <div className="flex items-center space-x-40">
                    <h2 className="logo">GROCERY</h2>
                    <Search placeholder="Search" className="w-70" />
                </div>
            }
            links={
                <div className="colorText">
                    <NavItem showDesktop>Home</NavItem>
                    <NavItem showDesktop>Cart</NavItem>
                    <NavItem showDesktop>User</NavItem>
                    <NavItem showDesktop>Settings</NavItem>
                </div>
            }
            mobileMenu={false}
        />
    )
}