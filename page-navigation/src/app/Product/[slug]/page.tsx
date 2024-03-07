import React from "react";
function Product({ params }: { params: { slug: string } }) {
    return (
        <div>{params.slug}</div>
    );
}
export default Product;