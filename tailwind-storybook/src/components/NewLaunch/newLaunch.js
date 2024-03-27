"use client"
import React from "react";
import "../NewLaunch/newLaunch.css";
export default function newLaunch() {
    const food = [
        { id: "Guava", name: "B Natural Guava Chilli, 1L", desc: "B Natural Chilli Guava is a zingy juice with perfect mix of Chilli Masala ", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2F4%2F9%2F494231328_1.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=3840&q=75", color: "antiquewhite" },
        { id: "Fruit", name: "B Natural Mixed Fruit Chaat, 1L", desc: "B Natural Mix Fruit Chaat is a unique blend of hand picked Masala in a nutritiou", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2F4%2F9%2F494231327_1.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=3840&q=75", color: "lavenderblush" },
        { id: "Jamun", name: "B Natural Chatpata Jamun, 1L", desc: "B Natural Chatpata Jamun is a perfect infusion of curated spices, pink Salt ", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2F4%2F9%2F494231326_1_1.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=3840&q=75", color: "powderblue" },
    ]
    return (
        <div className="flex justify-center flex-wrap box-width space-x-20 ">
            {
                food.map((item) => (
                    <div className="flex content-width launchItem rounded-br-full rounded-tr-full mb-4" style={{ backgroundColor: item.color }}>
                        <div div className="flex flex-col w-30" >
                            <div className="font-bold">{item.name}</div>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                        <img src={item.image} alt="food" height={40} width={120} />
                    </div>
                ))
            }
        </div>
    )
}