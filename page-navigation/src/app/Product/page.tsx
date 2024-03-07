import Link from "next/link"
function Product() {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                <li><Link href="/Product/Cloths">Cloths</Link></li>
                <li><Link href="/Product/Home Appliances">Home Appliances</Link></li>
                <li><Link href="/Product/Sports">Sports</Link></li>
            </ul>
        </div>
    )
}
export default Product;