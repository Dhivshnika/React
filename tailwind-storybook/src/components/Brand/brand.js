"use client"
import "../../app/globals.css"
export default function brand() {
    const item = [
        { id: "1", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FB-Natural.png&w=1920&q=75" },
        { id: "2", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FBingo-Logo_1.png&w=1920&q=75" },
        { id: "3", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FCandyman_1.png&w=1920&q=75" },
        { id: "4", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FGroup_842.png&w=1920&q=75" },
        { id: "5", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FGroup_844.png&w=1920&q=75" },
        { id: "6", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Famasty%2Fshopby%2Foption_images%2Fslider%2FImage_2_EDW-Essenza-Logo_200x90.png&w=1920&q=75" },
    ]
    return (
        <div>
            <div className="brandMargin text-lg font-bold">Our most loved brands</div>
            <div className="flex justify-center space-x-10">
                {
                    item.map((item) => (
                        <img src={item.image} height={100} width={150} alt="name" />
                    ))
                }
            </div>
        </div>
    )
}