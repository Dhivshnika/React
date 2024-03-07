import React from "react";
import Link from "next/link";
export default function Article({ params }: { params: { slug: string } }) {
    const { slug } = params || {};
    if (slug?.length === 1) {
        return (
            <div>
                <h1>{slug[0]}</h1>
                <ul>
                    <li><Link href="/Articles/Chapter1/Example1">Example1</Link></li>
                    <li><Link href="/Articles/Chapter1/Example2">Example2</Link></li>
                </ul>
            </div>
        );
    }
    else if (slug?.length === 2) {
        return (
            <div>
                <h1>{slug[1]}</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>Article</h1>
            <ul>
                <li><Link href="/Articles/Chapter1">Chapter1</Link></li>
                <li><Link href="/Articles/Chapter2">Chapter2</Link></li>
                <li><Link href="/Articles/Chapter3">Chapter3</Link></li>
            </ul>
        </div>
    )
}