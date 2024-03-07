import React from "react";
import Link from "next/link";
export default function Home() {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                <li><Link href="/Blog/First">First</Link></li>
                <li><Link href="/Blog/Second">Second</Link></li>
            </ul>
        </div>
    )
}