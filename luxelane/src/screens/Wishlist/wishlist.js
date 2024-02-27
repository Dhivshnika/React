import React from "react";
import logo from '../../assets/logo.png';
import house from '../../assets/house.png';
import bag from '../../assets/bag.png';
import heart from '../../assets/heart.png';
import search from '../../assets/search.png';
import xMark from '../../assets/xMark.png';
import '../Wishlist/wishlist.css';
import '../Home/home.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Wishlist() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartReducer);
    const wishList = useSelector((state) => state.wishReducer);
    if (wishList === null) {
        return <div>No items in wishlist</div>;
    }
    const handleRemoveWish = (id) => {
        dispatch({
            type: "REMOVE_WISH",
            payload: id,
        })
    }
    const handleAddBag = (item) => {
        dispatch({
            type: "ADD_CART",
            payload: item,
        })
    }
    return (
        <div>
            <header>
                <div className='header'>
                    <img src={logo} alt='logo' width="60" height="60" />
                    <div className='menuLink'>
                        <a href="#">ACTIVITY TOYS</a>
                        <a href="#">LEARNING TOYS</a>
                        <a href="#">SOFT TOYS</a>
                        <a href="#">TOY VEHICLES</a>
                    </div>
                    <div className='search'>
                        <img src={search} alt='search' width="20" height="20" />
                        <input type='text' placeholder='Search for products,brands and more' />
                    </div>
                    <div className='headerIcon'>
                        <div className='headerIconBox'>
                            <Link to="/">
                                <img src={house} alt='person' width="25" height="22" />
                            </Link>
                            <h6>home</h6>
                        </div>
                        <div className='headerIconBox'>
                            <Link to="/wish">
                                <div className='bagBox'>
                                    <img src={heart} alt='heart' width="22" height="22" />
                                    {
                                        wishList.length !== 0 && <div>{wishList.length}</div>
                                    }
                                </div>
                            </Link>
                            <h6>Wishlist</h6>
                        </div>
                        <div className='headerIconBox'>
                            <Link to="/cart">
                                <div className='bagBox'>
                                    <img src={bag} alt='bag' width="25" height="21" />
                                    {
                                        cartItems.length !== 0 && <div>{cartItems.length}</div>
                                    }
                                </div>
                            </Link>
                            <h6>Bag</h6>
                        </div>
                    </div>
                </div>
            </header>
            <div className='spaceSeparator'></div>
            <div className='spaceSeparator'></div>
            <div className="sideSeparator">
                {wishList.length === 0 ?
                    <div className="emptyWishBox">
                        <div className="footerSeparator"></div>
                        <h3>YOUR WISHLIST IS EMPTY</h3>
                        <p>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</p>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/add-favorite-items-into-wishlist-2739549-2283945.png?f=webp" height={300} width={300} />
                        <Link to="/" style={{ textDecoration: "none", color: "#3466E8" }}>
                            <div className="continue">CONTINUE SHOPPING</div>
                        </Link>
                    </div>
                    :
                    <div className="sideSeparator">
                        <div>
                            <div>
                                <p><span className="wishLength">My Wishlist &nbsp;</span>{wishList.length} items</p>
                            </div>
                            <div className="wishContainer">
                                {
                                    wishList.map((list) => (
                                        <div className="wishMainBox">
                                            <div className="wishImageBox" style={{ backgroundImage: `url(${list.image})`, height: 260, width: 220, backgroundSize: "cover" }}>
                                                <img src={xMark} alt="xMark" height={25} width={25} style={{ borderRadius: 40 }} onClick={() => handleRemoveWish(list.id)} />
                                            </div>
                                            <div className="wishDetail">
                                                <p>{list.name}</p>
                                                <div className="wishPrice">
                                                    <span className="spanPrice">Rs.{list.price} &nbsp;</span>
                                                    <span className="spanFullAmt">Rs.{list.fullAmt}</span>
                                                    <span className="spanOff"> &nbsp;({list.off}%OFF)</span>
                                                </div>
                                            </div>
                                            <div className="moveBag" onClick={() => { handleAddBag(list); handleRemoveWish(list.id) }}>MOVE TO BAG</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="footerSeparator"></div>
            <div className="footerSeparator"></div>
            <div className='footer2'>
                <div className='division'>
                    <div className='part1'>
                        <div>
                            <h5>ONLINE SHOPPING</h5>
                            <p>Men</p>
                            <p>Women</p>
                            <p>Kids</p>
                            <p>Home & Living</p>
                            <p>Beauty</p>
                            <p>Gift Cards</p>
                            <p>Luxelane Insider</p>
                        </div>
                        <div>
                            <h5>ONLINE SHOPPING</h5>
                            <p>Blog</p>
                            <p>Careers</p>
                            <p>Site Map</p>
                            <p>Corporate Information</p>
                            <p>Whitehat</p>
                            <p>Cleartrip</p>
                        </div>
                    </div>
                    <div className='part2'>
                        <h5>CUSTOMER POLICIES</h5>
                        <p>Contact Us</p>
                        <p>FAQ</p>
                        <p>T&C</p>
                        <p>Terms Of Use</p>
                        <p>Track Orders</p>
                        <p>Shipping</p>
                        <p>Cancellation</p>
                        <p>Returns</p>
                        <p>Privacy policy</p>
                        <p>Grievance Officer</p>
                    </div>
                    <div className='part3'>
                        <h5>EXPERIENCE LUXELANE APP ON MOBILE</h5>
                        <div className=''>
                            <img src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png' alt='playstore' height="40" width="140" />
                            <img src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png' alt='appstore' height="40" width="140" />
                        </div>
                        <h5>KEEP IN TOUCH</h5>
                        <div className='socialmedia'>
                            <img src='https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png' alt='facebook' height="20" width="20" />
                            <img src='https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png' alt='twitter' height="20" width="20" />
                            <img src='https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png' alt='youtube' height="20" width="30" />
                            <img src='https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png' alt='insta' height="20" width="20" />
                        </div>
                    </div>
                    <div>
                        <div className='oridinalBox'>
                            <img src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png' alt='confirm' height="45" width="45" />
                            <p><span>100% ORIGINAL</span> guarantee for all products at luxelane.com</p>
                        </div>
                        <div className='returnBox'>
                            <img src='https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png' alt='return' height="40" width="40" />
                            <p><span>Return within 14days</span> of receiving your order</p>
                        </div>
                    </div>
                </div>
                <div className='popularSearches'>
                    <div className='popBox'>
                        <h5>POPULAR SEARCHES</h5>
                        <div className='popExtender'></div>
                    </div>
                    <p className='productListName'>Teddy Bear | Remote Control Car | Toys For Kids | Barbie Set | Toy Cars | Toys For Girls | Toys For Boys | Paw Patrol Toys | Spiderman Toys | Soft Toys | Remote Control Toys | Action Figure | Masha And The Bear Toys | My Little Pony Toys | Learning Toys | Cooking Toys | Kids Gifts | Elephant Soft Toy | Construction Toys | Baby Tshirts | Kids Tshirts | Avengers Tshirts | Kids Watches | Rompers | Kids Jeans | Girls Shirts | Baby Frocks | Kids Wear | Gifts | Gifts For Girls | Boys Gifts | Birthday Gifts | Online Shooping | Teddy Bear | Showpieces | Infant Dresses | Jumpsuits | Diaper Bags | Kids Jackets | Baby Care Products | Sunglasses | Girls Shorts | Girls Jeans | Footwear | Girls Shoes | Kids Footwear | Kids Sandals | Kids Shoes | Sport Shoes | Kids Ethnic Wear</p>
                </div>
            </div>
            <div className='wishSponser'>
                <div className='sponsers'>
                    <p>In case of any concern,<span> Contact Us</span></p>
                    <p className='spon'>© 2024 www.luxelane.com. All rights reserved.</p>
                    <p className='spon'>A Flipkart company</p>
                </div>
            </div>
        </div>
    );
}
export default Wishlist;