import logo from '../../assets/logo.png';
import '../Cart/Cart.css';
import down from '../../assets/down.png';
import offer from "../../assets/offer.png";
import cross from '../../assets/cross.png';
import coupon from '../../assets/coupon.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Darrow from '../../assets/Darrow.png';
import { useSelector, useDispatch } from "react-redux";

function Cart() {
    const dispatch = useDispatch();
    let option = [];
    for (let i = 1; i <= 100; i++) {
        option.push(<option value={i}>{i}</option>);
    }
    const cartItems = useSelector((state) => state.cartReducer);
    const [empty, setEmpty] = useState(null);
    const handleSelect = (e, itemId) => {
        let avail = parseInt(e.target.value, 10);
        dispatch({ type: 'QUANTITY_ITEM', id: itemId, quantity: avail });
    }
    const hadleRemove = (removeId) => {
        dispatch({
            type: 'REMOVE_CART',
            payload: {
                id: removeId,
            }
        });
    }

    const totalPrice = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.fullAmt * currentItem.quantity;
    }, 0);
    const discountPrice = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    const discountedAmount = totalPrice - discountPrice;
    useEffect(() => {
        if (cartItems.length === 0) {
            setEmpty(true);
        } else {
            setEmpty(false);
        }
    }, [cartItems]);

    return (
        <div>
            <div className='header'>
                <div className='cartHeader'>
                    <img src={logo} alt='logo' width="55" height="55" />
                    <div className='cartHeadLine'>
                        <p className='bagIcon'>BAG</p>
                        <div className='dotSeparator'> --------------- </div>
                        <p>ADDRESS</p>
                        <div className='dotSeparator'> --------------- </div>
                        <p>PAYMENT</p>
                    </div>
                    <div className='secure'>
                        <img src='https://constant.myntassets.com/checkout/assets/img/sprite-secure.png' alt='secure' width='25' height='27' />
                        <p>100% SECURE</p>
                    </div>
                </div>
            </div>
            {empty ?
                (
                    <div className='emptyCartMain'>
                        <div className='emptyCart'>
                            <img src='https://constant.myntassets.com/checkout/assets/img/empty-bag.webp' alt="emptyBag" width="150" height="150" />
                            <p className='hey'>Hey, it feels so light!</p>
                            <p className='nothing'>There is nothing in your bag. Let's add some items.</p>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <div className='addHome'>ADD ITEMS FROM HOME</div>
                            </Link>
                        </div>
                    </div>
                )
                :
                (
                    <div className='cartContentMain'>
                        <div className='cartPart1'>
                            <div className='extraDiv'></div>
                            <div className='extraDiv'></div>
                            <div className='checkPin'>
                                <p>Check delivery time & services</p>
                                <div className='pinBox'>
                                    <p>ENTER PIN CODE</p>
                                </div>
                            </div>
                            <div className='offerBox'>
                                <div className='offerBoxInline'>
                                    <img src={offer} alt='offer' height="20" width="20" />
                                    <p>Available Offers</p>
                                </div>
                                <p className='instant'>7.5% Instant Discount on every spends with Luxelane Kotak Credit Card. TCA</p>
                                <div className='showMore'>
                                    <p>Show More</p>
                                    <img src={down} alt='down' height="25" width="20" />
                                </div>
                            </div>
                            {
                                cartItems.map((item) => (
                                    <div key={item.id} className='selectedCartMain'>
                                        <div className='selectedCart'>
                                            <img src={item.image} alt='cart' width="120" height="160" />
                                            <div className='SelectedDetailsBox'>
                                                <h4>{item.name}</h4>
                                                <p className='selectedDesc'>{item.desc}</p>
                                                <p className='selectedSeller'>Sold by:{item.seller}</p>
                                                <div className='quantityBox'>
                                                    <div className='quantitySizeBox'>
                                                        <p>Size: Onesize</p>
                                                        <img src={Darrow} alt='Darrow' height='20' width='20' />
                                                    </div>
                                                    <div className='quantity'>
                                                        <p>Qty:</p>
                                                        <select value={item.quantity} onChange={(e) => handleSelect(e, item.id)} className='select'>
                                                            {option}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='selectedPriceBox'>
                                                    <p className='selectedPriceTag'>₹{item.price}</p>
                                                    <p className='selectedAmtTag'>₹{item.fullAmt}</p>
                                                    <p className='selectedOffTag'>{item.off}% OFF</p>
                                                </div>
                                                <p className='exchange'>Exchange Only</p>
                                            </div>
                                        </div>
                                        <img src={cross} alt='cross' width="20" height="20" onClick={() => hadleRemove(item.id)} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='cartPart2'>
                            <div className='extraDiv'></div>
                            <p className='coupons'>COUPONS</p>
                            <div className='applyCoupons'>
                                <div className='couponBox'>
                                    <img src={coupon} alt='coupon' height="20" width="20" />
                                    <p>Apply Coupons</p>
                                </div>
                                <div className='apply'>APPLY</div>
                            </div>
                            <p className='login'><span>Login </span> to get upto ₹200 OFF on first order</p>
                            <div className='cartSep'></div>
                            <p className='priceItemNum'>PRICE DETAILS ({cartItems.length} Item)</p>
                            <div className='totalMrp'>
                                <p>Total MRP</p>
                                <p>₹{totalPrice}</p>
                            </div>
                            <div className='discountMrp'>
                                <p>Discount on MRP</p>
                                <p className='disRup'>-<span> ₹</span>{discountedAmount}</p>
                            </div>
                            <div className='couponDis'>
                                <p>Coupon Discount</p>
                                <p className='applyCoupon'>Apply Coupon</p>
                            </div>
                            <div className='platform'>
                                <p>Platform Fee<span>&nbsp;&nbsp; Know More</span></p>
                                <p>₹20</p>
                            </div>
                            <div className='shipping'>
                                <p>Shipping Fee<span className='ship'>&nbsp;&nbsp; Know More</span></p>
                                <p className='free'><span className='rs'>₹79</span> <span className='freePara'>Free</span></p>
                            </div>
                            <div className='cartSep'></div>
                            <div className='totalAmount'>
                                <p className='totalPara1'>Total Amount</p>
                                <p className='totalPara2'>₹{discountPrice + 20}</p>
                            </div>
                            <div className='placeOrder'>PLACE ORDER</div>
                        </div>
                    </div>
                )
            }
            {
                cartItems.length <= 2 && (
                    <div>
                        <div className='extraDiv'></div>
                        <div className='extraDiv'></div>
                        <div className='extraDiv'></div>
                        <div className='extraDiv'></div>
                        <div className='extraDiv'></div>
                        <div className='extraDiv'></div>
                        <div className='extraDiv'></div>
                    </div>
                )
            }
            <div className='cartFooterMain' style={{ marginTop: empty ? '0px' : '20px' }}>
                <div className='cartFooter'>
                    <div className='paymentPic'>
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png' alt='pay' height="40" width="70" />
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png' alt='pay' height="40" width="70" />
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png' alt='pay' height="40" width="70" />
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png' alt='pay' height="40" width="70" />
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png' alt='pay' height="40" width="70" />
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png' alt='pay' height="40" width="70" />
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png' alt='pay' height="40" width="70" />
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png' alt='pay' height="40" width="70" />
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png' alt='pay' height="40" width="70" />
                        <img src='https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png' alt='pay' height="40" width="70" />
                    </div>
                    <div className='helpCenter'>Need Help? Contact Us</div>
                </div>
            </div>
        </div>
    )
}
export default Cart;