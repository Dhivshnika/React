"use client"
import React from "react";
import "../../app/globals.css";
import { XFilled, InstagramFilled, FacebookFilled } from "@ant-design/icons";
export default function footer() {
    return (
        <div>
            <div>
                <div className="footerMargin text-lg font-bold">Our Brands</div>
                <div className="flex space-x-20 w-70 justify-center">
                    <div>
                        <p>Aashirvaad</p>
                        <p>B Natural</p>
                        <p>Bingo!</p>
                        <p>Candyman</p>
                        <p>Charmis</p>
                    </div>
                    <div>
                        <p>Dermafique</p>
                        <p>EDW Essenza</p>
                        <p>Engage</p>
                        <p>Fabelle</p>
                        <p>Aashirvaad Svasti</p>
                    </div>
                    <div>
                        <p>Fiama</p>
                        <p>Sunbean Coffee</p>
                        <p>Homelites</p>
                        <p>Farmland</p>
                        <p>ITC Master Chef</p>
                    </div>
                    <div>
                        <p>Jelimals</p>
                        <p>Kitchens Of India</p>
                        <p>Nimeasy</p>
                        <p>Nimwash</p>
                        <p>Nimyle</p>
                    </div>
                    <div>
                        <p>Paperkraft</p>
                        <p>Savlon</p>
                        <p>Shower To Shower</p>
                        <p>Sunfeast Biscuits</p>
                        <p>Sunrise Pure</p>
                    </div>
                    <div>
                        <p>Vivel</p>
                        <p>Mangaldeep</p>
                        <p>Classmate</p>
                        <p>Sunfeast YiPPee!</p>
                        <p>Sunfeast Beverages</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="footerBorder"></div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="flex justify-between w-70 mb-4" style={{ width: "80%" }}>
                    <div>©2024 ITCStore</div>
                    <div className="space-x-4">
                        <XFilled style={{ color: 'orange', fontSize: '30px' }} />
                        <InstagramFilled style={{ color: 'orange', fontSize: '30px' }} />
                        <FacebookFilled style={{ color: 'orange', fontSize: '30px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}