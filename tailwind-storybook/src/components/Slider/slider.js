"use client"
import React from "react";
import { Carousel } from 'antd';
export default function slider() {
    return (
        <Carousel autoplay className="flex justify-center">
            <div>
                <img className="rounded-2xl" src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2F2250_1092_A_2_.jpg&w=1920&q=75" height={700} width={1000} alt="carousel" />
            </div>
            <div>
                <img className="rounded-2xl" src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2Fnew_korean_Style_banner_mobile_2250-x-1092.jpg&w=1920&q=75" height={700} width={1000} alt="carousel" />
            </div>
            <div>
                <img className="rounded-2xl" src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2FEngage_Travel_Pack_Mobile_.jpg&w=1920&q=75" height={700} width={1000} alt="carousel" />
            </div>
        </Carousel>
    )
}