import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container1">
      <h1>Home</h1>
      <ul>
        <li><Link href="/Profile">Profile</Link></li>
        <li><Link href="/Product">Product</Link></li>
        <li><Link href="/Articles">Articles</Link></li>
        <li><Link href="/Blog">Blog</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Settings">Settings</Link></li>
      </ul>
    </div>
  )
}