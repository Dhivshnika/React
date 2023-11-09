function Discount(price, discount) {
    let discountPrice = (discount / 100) * price;
    let productAmount = price - discountPrice;
    console.log("Discount Price : " + discountPrice);
    console.log("Discounted product price : " + productAmount);
}
Discount(600, 20);
Discount(250, 10);
//0-100 free
//100-200 2rs
//200-500 5
// more 500 10