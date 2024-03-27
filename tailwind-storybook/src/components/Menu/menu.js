"use client"
import "../Menu/menu.css";
import "../../app/globals.css";
import { DownOutlined } from "@ant-design/icons";
export default function menu() {
    const item = [
        { id: "Staples", name: "Staples", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_all_1.png&w=96&q=75" },
        { id: "Personal Care", name: "Personal Care", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fpesonal_care_1.png&w=96&q=75" },
        { id: "Frozen & Instant Food", name: "Frozen & Instant Food", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Ffrozenitem_1.png&w=96&q=75" },
        { id: "Biscuits & Cakes", name: "Biscuits & Cakes", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2FBiscuits_Cakes.png&w=96&q=75" },
        { id: "Snacks", name: "Snacks", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fsnacks_1_1_.png&w=96&q=75" },
        { id: "Chocolates & Desserts", name: "Chocolates & Desserts", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fdesert_1_1__1.png&w=96&q=75" },
        { id: "Diary & Beverages", name: "Diary & Beverages", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2FD_B_1.png&w=96&q=75" },
        { id: "More", name: "More", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fhome_and_kitchen_1_1.png&w=96&q=75" },
    ]
    return (
        <div className="flex space-x-10">
            {
                item.map((item) => (
                    <div className="flex flex-col items-center">
                        <img src={item.image} height={70} width={70} alt="name" />
                        <div className="flex">
                            {item.name}
                            <DownOutlined style={{ fontSize: "13px", marginLeft: "5px" }} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}