"use client"
import "../../app/globals.css"
export default function like() {
    const item = [
        { id: "1", image: "https://admin.itcstore.in/media/wysiwyg/festive.png" },
        { id: "2", image: "https://admin.itcstore.in/media/wysiwyg/gifting-corner2.png" },
        { id: "3", image: "https://admin.itcstore.in/media/wysiwyg/hygiene.png" },
        { id: "4", image: "https://admin.itcstore.in/media/wysiwyg/pooja-essentials.png" },
    ]
    return (
        <div>
            <div className="brandMargin text-lg font-bold">You may like...</div>
            <div className="flex justify-center space-x-10 m-10">
                {
                    item.map((item) => (
                        <img className="rounded-xl" src={item.image} height={150} width={220} alt="name" />
                    ))
                }
            </div>
        </div>
    )
}