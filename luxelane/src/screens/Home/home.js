import '../Home/home.css'
import Details from '../Details/Details';
import logo from '../../assets/logo.png';
import house from '../../assets/house.png';
import bag from '../../assets/bag.png';
import heart from '../../assets/heart.png';
import search from '../../assets/search.png';
import arrow from '../../assets/arrow.png';
import yellow from '../../assets/yellow.png';
import pink from '../../assets/pink.png';
import green from '../../assets/green.png';
import red from '../../assets/red.png';
import blue from '../../assets/blue.png';
import white from '../../assets/white.png';
import star from '../../assets/star.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Home({ cartItems, setCartItems }) {
    const items = [
        {
            id: 1,
            name: "NERF",
            desc: "Elite 2.0 Commander Blaster",
            rating: 3.9,
            price: 974,
            fullAmt: 1499,
            off: 35,
            seller: "Supercom Net",
            quantity: 1,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23310486/2023/5/30/fa6958f4-3d3b-4564-9951-0f2862bed60e1685427406577-NERF-Boys-Activity-Toys-and-Games-5791685427406254-1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23310486/2023/5/30/be4a0bc1-e2ed-452a-a671-aae99aa7934d1685427406563-NERF-Boys-Activity-Toys-and-Games-5791685427406254-2.jpg"
        },
        {
            id: 2,
            name: "DearJoy",
            desc: "Kids Avocado Panda Teddy Soft Toy",
            rating: 4.2,
            price: 500,
            fullAmt: 1000,
            off: 50,
            seller: "M2N RETAIL",
            quantity: 1,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22105894/2023/2/24/78caf437-63f2-40c2-91e7-41cff4e770d41677230696208DearJoyKidsAvocadoPandaTeddySoftToy1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22105894/2023/2/24/63cada70-4b23-4abe-92a6-ec8046dfbe281677230696167DearJoyKidsAvocadoPandaTeddySoftToy2.jpg",
        },
        {
            id: 3,
            name: "Frantic",
            desc: "Dexter Dog Huggable Lovable Non-Toxic Soft Toy",
            rating: 4.1,
            price: 467,
            fullAmt: 599,
            off: 10,
            seller: "M2N RETAIL",
            quantity: 1,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21562964/2023/1/16/a7bc3718-af77-477e-840b-6bdcd35d32f61673858937203ActionFiguresandPlaySet1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21562964/2023/1/16/e02dad82-3361-4ec1-a304-e90bb7b82a5c1673858937214ActionFiguresandPlaySet2.jpg"
        },
        {
            id: 4,
            name: "Kidology",
            desc: "Kids Rabbit In Strawberry Soft Toy",
            rating: 4.7,
            price: 445,
            fullAmt: 1000,
            off: 55,
            seller: "M2N RETAIL",
            quantity: 1,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26338022/2023/12/9/0eafef96-5b07-4a26-ab9a-70be8f8f431e1702105015140SoftToysandDolls1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26338022/2023/12/9/514eb406-2c78-4cb0-875f-1394f56fdc391702105015133SoftToysandDolls6.jpg"
        },
        {
            id: 5,
            name: "DukieKooky",
            desc: "Kids Pink Rabbit Soft Toys",
            rating: 4.5,
            price: 1299,
            fullAmt: 1499,
            off: 10,
            seller: "M2N RETAIL",
            quantity: 1,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19787288/2022/9/5/f0e29b15-5969-4f08-b632-a7982bbe82e71662351782846DukieKookyKidsPinkRabbitSoftToys1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19787288/2022/9/5/312a477e-242b-4146-8500-a066410fb9351662351782860DukieKookyKidsPinkRabbitSoftToys6.jpg"
        },
        {
            id: 6,
            name: "PLANET of Toys",
            desc: "Kids Heavy Duty Bow And Arrow Set With Target Board",
            rating: 4.3,
            price: 599,
            fullAmt: 999,
            off: 40,
            seller: "PLANET OF TOYS",
            quantity: 1,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23902012/2023/7/6/6b1b5fd4-d1e0-4905-86e4-a729670635d11688641723928PLANETofToysKidsHeavyDutyBowandArrowSetWithTargetBoard1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23902012/2023/7/6/9011f362-06a0-4b7c-bee4-1dd6b435b7dc1688641723900PLANETofToysKidsHeavyDutyBowandArrowSetWithTargetBoard3.jpg"
        },
        {
            id: 7,
            name: "WEMBLEY",
            desc: "Barking Dog Musical Toys",
            rating: 4.3,
            price: 1199,
            fullAmt: 1500,
            off: 40,
            seller: "M2N RETAIL",
            quantity: 1,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25467322/2023/10/13/aad592a3-0dad-483e-a00f-e1bddb0c2da51697188709453WembleyBarkingDogMusicalToys1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25467322/2023/10/13/a4ca0738-9eb3-4f32-9021-610c339182ce1697188709468WembleyBarkingDogMusicalToys2.jpg"
        },
        {
            id: 8,
            name: "ITOYS",
            desc: "Kids Red & Blue Marvel Spiderman Printed Tent House",
            rating: 4.3,
            price: 819,
            fullAmt: 1999,
            off: 59,
            seller: "Whole9yards Online LLP",
            quantity: 1,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/16/a3a5c74b-2acb-4973-834f-22877f65830d1615886106763-1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/3/16/de531941-68b9-4735-b730-4a324af24bd51615886106790-2.jpg"
        },
        {
            id: 9,
            name: "Baby Moo",
            desc: "Infants Hanging Rattle Toy",
            rating: 4.1,
            price: 1279,
            fullAmt: 1599,
            off: 20,
            seller: "Baby Cart LLP",
            quantity: 1,
            image: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23902012/2023/7/6/6b1b5fd4-d1e0-4905-86e4-a729670635d11688641723928PLANETofToysKidsHeavyDutyBowandArrowSetWithTargetBoard1.jpghttps://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23453448/2023/5/29/2e04378f-7edc-4835-81e0-0d7c0e4f79d01685344787841BirdInTheSkyBedHangingRattleToyRotatingCotMobile-Blue1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23453448/2023/5/29/c0ede0e7-cc62-4253-bd20-a98cd130f0a91685344787856BirdInTheSkyBedHangingRattleToyRotatingCotMobile-Blue3.jpg"
        },
        {
            id: 10,
            name: "MUREN",
            desc: "Kids Dancing Boy Light & Sound Toy Vehicle",
            rating: 4.2,
            price: 974,
            fullAmt: 1499,
            off: 35,
            seller: "MUREN IMPEX PRIVATE LIMITED",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23983054/2023/7/12/64dfbbda-cbb7-4350-9996-5e8f2af451291689152325965MURENKidsDancingBoyLightSoundToyVehicle1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23983054/2023/7/12/42b5ca3c-c30a-4f1f-92ea-4bd7a533c4ac1689152326004MURENKidsDancingBoyLightSoundToyVehicle2.jpg"
        },
        {
            id: 11,
            name: "Storio",
            desc: "Unbreakable Set of 7 Pull & Push and Go Crawling Toys",
            rating: 3.9,
            price: 492,
            fullAmt: 579,
            off: 15,
            seller: "Supercom Net",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24542112/2023/9/12/dd64df57-eb14-4a60-bb76-bf7af3c710ba1694521039809LearningandDevelopmentToysStorioUnisexKidsActivityToysandGam1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24542112/2023/9/12/c7fd26bc-42ed-48a1-b027-81eb37286fb11694521039824LearningandDevelopmentToysStorioUnisexKidsActivityToysandGam2.jpg"
        },
        {
            id: 12,
            name: "DearJoy",
            desc: "Kids Blue & Pink Reversible Octopus Soft Toy",
            rating: 4.4,
            price: 499,
            fullAmt: 799,
            off: 25,
            seller: "M2N RETAIL",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16620114/2021/12/27/ffc3f162-e248-4747-bcdd-7723b282f3f71640601451331SoftToysandDolls1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16620114/2021/12/27/7bab1b69-cff6-43de-827c-3d3fe87d02b51640601451341SoftToysandDolls2.jpg"
        },
        {
            id: 13,
            name: "DearJoy",
            desc: "Kids Grey & Brown Elephant & Monkey Soft Toy",
            rating: 4.3,
            price: 1000,
            fullAmt: 1500,
            off: 25,
            seller: "M2N RETAIL",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20475986/2022/10/20/f3a4530f-204a-4c67-b504-a763f0f92eff1666276624609DearJoyKidsGreyBrownElephantMonkeySoftToy1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20475986/2022/10/20/3a77ae6e-0050-4589-8e25-f83a359b3e6a1666276624618DearJoyKidsGreyBrownElephantMonkeySoftToy2.jpg"
        },
        {
            id: 14,
            name: "MUREN",
            desc: "Kids Jumbo Hopscotch Fun Activity Game",
            rating: 4.3,
            price: 1249,
            fullAmt: 2499,
            off: 50,
            seller: "MUREN IMPEX PRIVATE LIMITED",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24949418/2023/9/13/30f4dc29-41b1-47ef-a887-2233e06414951694592659100MURENJumboHopscotchFunActivityGame1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24949418/2023/9/13/5a01476c-7703-4d0b-a94c-91b70d104e6e1694592659066MURENJumboHopscotchFunActivityGame2.jpg"
        },
        {
            id: 15,
            name: "MUREN",
            desc: "Kids Snake & Ladder Floor Activity Game With Big Dice",
            rating: 4.4,
            price: 1099,
            fullAmt: 1999,
            off: 45,
            seller: "MUREN IMPEX PRIVATE LIMITED",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24949370/2023/9/13/9f86fa27-5205-4d71-a707-6ed696a78a2a1694594902099MURENSnakeLadderFloorActivityGameWithBigDice1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24949370/2023/9/13/9ca493a2-f73d-4ae0-b0c6-af3c4a13f2181694594902163MURENSnakeLadderFloorActivityGameWithBigDice2.jpg"
        },
        {
            id: 16,
            name: "WEMBLEY",
            desc: "Kids Monkey Dancing With Voice & Sound Effect Control Musical Toy",
            rating: 4.0,
            price: 449,
            fullAmt: 599,
            off: 25,
            seller: "Whole9yards Online LLP",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25438686/2023/10/11/a50e54be-1f95-4195-825d-7f23259d3df41697009349422WEMBLEYKidsRedYellowMonkeyDancingWithVoiceSoundEffectControl1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25438686/2023/10/11/f966b034-ac3e-471c-b4cf-5ca2bef870361697009349427WEMBLEYKidsRedYellowMonkeyDancingWithVoiceSoundEffectControl2.jpg"
        },
        {
            id: 17,
            name: "Hasbro Gaming",
            desc: "Kids Hungry Hungry Hippos",
            rating: 4.7,
            price: 1124,
            fullAmt: 1499,
            off: 25,
            seller: "Supercom Net",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23296414/2023/5/30/a12d0c47-eada-4532-9564-bb3a1daced671685427342704-Hasbro-Gaming-Unisex-Kids-Activity-Toys-and-Games-8721685427-1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23296414/2023/5/30/326fffe0-a358-4f44-8227-3f27a8cab7411685427342683-Hasbro-Gaming-Unisex-Kids-Activity-Toys-and-Games-8721685427-2.jpg"
        },
        {
            id: 18,
            name: "DukieKooky",
            desc: "Kids Teddy Bear Soft Toy",
            rating: 4.3,
            price: 499,
            fullAmt: 999,
            off: 50,
            seller: "Haitain Marketing and Consulting Pvt Ltd",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21870118/2023/2/6/9eec67d9-a285-46c1-9f23-538a4d5f22ef1675699872993SoftToysandDolls1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21870118/2023/2/6/c60085a1-ceac-4262-96af-6657ae9aea6d1675699873048SoftToysandDolls6.jpg"
        },
        {
            id: 19,
            name: "MiArcus",
            desc: "Kids Mino Cloud Knitted Soft Toy",
            rating: 4.2,
            price: 474,
            fullAmt: 499,
            off: 5,
            seller: "MIARCUS RETAILS PRIVATE LIMITED",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24676910/2023/10/16/fdb9947e-deb2-411a-9314-7d2b093010581697445974722MiArcusKidsMinoCloudKnittedSoftToy1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24676910/2023/10/16/f9cdddef-d55e-4a60-b1ad-958793816b901697445974734MiArcusKidsMinoCloudKnittedSoftToy2.jpg"
        },
        {
            id: 20,
            name: "Haus & Kinder",
            desc: "Kids Lilly Cotton Bunny Rag Doll",
            rating: 4.5,
            price: 649,
            fullAmt: 1299,
            off: 40,
            seller: "SAMARA RETAIL INDIA PRIVATE LIMITED",
            quantity: 1,
            image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21765536/2023/4/17/1082bb48-cb5f-417f-ab45-52fe54e803891681708923534-haus--kinder-Kids-Lilly-Cotton-Bunny-Rag-Doll-39516817089233-1.jpg",
            extraImg: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21765536/2023/4/17/b490197d-2132-4463-8910-77c4e5293fff1681708923508-haus--kinder-Kids-Lilly-Cotton-Bunny-Rag-Doll-39516817089233-3.jpg"
        },
    ]
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);
    const [contentView, setContentView] = useState(true);
    const handleClick = (item) => {
        setSelectedItem(item);
        setContentView(false);
    }
    const handleAddToCart = (itemToAdd) => {
        dispatch({
            type: 'ADD_CART',
            payload: itemToAdd
        });
    };

    return (
        <div>
            <header>
                <div className='header'>
                    <img src={logo} alt='logo' width="60" height="60" />
                    <div className='menuLink'>
                        <p>MEN</p>
                        <p>WOMEN</p>
                        <p>KIDS</p>
                        <p>HOME & LIVING</p>
                        <p>BEAUTY</p>
                        <p>STUDIO</p>
                    </div>
                    <div className='search'>
                        <img src={search} alt='search' width="20" height="20" />
                        <input type='text' placeholder='Search for products,brands and more' />
                    </div>
                    <div className='headerIcon'>
                        <div>
                            <img src={house} alt='person' width="25" height="25" onClick={() => setContentView(true)} />
                            <h6>home</h6>
                        </div>
                        <div>
                            <img src={heart} alt='heart' width="25" height="25" />
                            <h6>Wishlist</h6>
                        </div>
                        <div>
                            <Link to="/cart">
                                <img src={bag} alt='bag' width="25" height="21" />
                            </Link>
                            <h6>Bag</h6>
                        </div>
                    </div>
                </div>
            </header>
            <div className='spaceSeparator'></div>
            <div className='spaceSeparator'></div>
            {contentView ?
                <div>
                    <div className='toyCount'>
                        <h4>Toys Store</h4>
                        <p>- 3663 items</p>
                    </div>
                    <div className='filterHeader'>
                        <div className='filterDouble'>
                            <div>FILTERS</div>
                            <div className='bundleDown'>
                                <div>
                                    <p>Bundles</p>
                                    <img src={arrow} alt='arrow' height="13" width="13" />
                                </div>
                                <div>
                                    <p>Country of Origin</p>
                                    <img src={arrow} alt='arrow' height="13" width="13" />
                                </div>
                                <div>
                                    <p>Size</p>
                                    <img src={arrow} alt='arrow' height="13" width="13" />
                                </div>
                            </div>
                        </div>
                        <div className='recommended'>
                            <p>Sort by : <span>Recommended</span></p>
                            <img src={arrow} alt='arrow' height="17" width="17" />
                        </div>
                    </div>
                    <div className='separator'></div>
                    <div className='contentMain'>
                        <div className='filterContent'>
                            <div className='genderRadio'>
                                <label><input type='radio' /> Men</label>
                                <label><input type='radio' /> Women</label>
                                <label><input type='radio' /> Boys</label>
                                <label><input type='radio' /> Girls</label>
                            </div>
                            <div className='categories'>
                                <div className='categoriesHead'>
                                    <h5>CATEGORIES</h5>
                                    <div className='searchBack'>
                                        <img src={search} alt='search' width="18" height="18" />
                                    </div>
                                </div>
                                <label><input type='checkbox' /> Activity Toys and Games<span>(1182)</span></label>
                                <label><input type='checkbox' /> Soft Toys and Dolls<span>(1004)</span></label>
                                <label><input type='checkbox' /> Learning and Development Toys</label>
                                <label><input type='checkbox' /> Art and Craft<span>(197)</span></label>
                                <label><input type='checkbox' /> Toy Vehicles<span>(176)</span></label>
                                <label><input type='checkbox' /> Infant and Pre-School Toys<span>(97)</span></label>
                                <label><input type='checkbox' /> Ride On Vehicles<span>(94)</span></label>
                                <label><input type='checkbox' /> Construction Toys<span>(72)</span></label>
                                <div className='more'>+ 3 more</div>
                            </div>
                            <div className='brand'>
                                <div className='brandHead'>
                                    <h5>BRAND</h5>
                                    <div className='searchBack'>
                                        <img src={search} alt='search' width="18" height="18" />
                                    </div>
                                </div>
                                <label><input type='checkbox' /> DukieKooky<span>(262)</span></label>
                                <label><input type='checkbox' /> Baby Moo<span>(191)</span></label>
                                <label><input type='checkbox' /> Funskool<span>(183)</span></label>
                                <label><input type='checkbox' /> Dreamland<span>(167)</span></label>
                                <label><input type='checkbox' /> Mirada<span>(141)</span></label>
                                <label><input type='checkbox' /> Frank<span>(138)</span></label>
                                <label><input type='checkbox' /> luyk<span>(124)</span></label>
                                <label><input type='checkbox' /> WEMBLEY<span>(117)</span></label>
                                <div className='more'>+ 130 more</div>
                            </div>
                            <div className='price'>
                                <h5>PRICE</h5>
                                <label><input type='checkbox' /> Rs. 36 to Rs. 4777<span>(3616)</span></label>
                                <label><input type='checkbox' /> Rs. 4777 to Rs. 9518<span>(41)</span></label>
                                <label><input type='checkbox' /> Rs. 9518 to Rs. 14259<span>(3)</span></label>
                                <label><input type='checkbox' /> Rs. 14259 to Rs. 19000<span>(2)</span></label>
                            </div>
                            <div className='color'>
                                <div className='colorHead'>
                                    <h5>COLOR</h5>
                                    <div className='searchBack'>
                                        <img src={search} alt='search' width="18" height="18" />
                                    </div>
                                </div>
                                <label><input type='checkbox' /> <img src={blue} alt='search' width="18" height="18" /> Blue <span>(564)</span></label>
                                <label><input type='checkbox' /> <img src={pink} alt='search' width="18" height="18" /> Pink <span>(340)</span></label>
                                <label><input type='checkbox' /> <img src={red} alt='search' width="18" height="18" /> Red <span>(332)</span></label>
                                <label><input type='checkbox' /> <img src={yellow} alt='search' width="18" height="18" /> Yellow <span>(322)</span></label>
                                <label><input type='checkbox' /> <img src={green} alt='search' width="18" height="18" /> Green <span>(306)</span></label>
                                <label><input type='checkbox' /> <img src={white} alt='search' width="18" height="18" /> White <span>(296)</span></label>
                                <div className='more'>+ 29 more</div>
                            </div>
                            <div className='range'>
                                <h5>DISCOUNT RANGE</h5>
                                <label><input type='checkbox' /> 10% and above</label>
                                <label><input type='checkbox' /> 20% and above</label>
                                <label><input type='checkbox' /> 30% and above</label>
                                <label><input type='checkbox' /> 40% and above</label>
                                <label><input type='checkbox' /> 50% and above</label>
                                <label><input type='checkbox' /> 60% and above</label>
                                <label><input type='checkbox' /> 70% and above</label>
                                <label><input type='checkbox' /> 80% and above</label>
                            </div>
                        </div>
                        <div className='detailName'>
                            {
                                items.map((item) => (
                                    <div className='materials' onClick={() => handleClick(item)}>
                                        <img src={item.image} alt='NERF' width="200" height="250" className='materialImg' />
                                        <div className='starBox'>
                                            <p className='rating'>{item.rating}</p>
                                            <img src={star} alt='star' height="15" width="15" />
                                        </div>
                                        <h4 className='itemName'>{item.name}</h4>
                                        <p className='desc'>{item.desc}</p>
                                        <div className='wish'>
                                            <img src={heart} alt='heart' width="20" height="20" />
                                            <p>WISHLIST</p>
                                        </div>
                                        <p className='size'>Sizes: Onesize</p>
                                        <div className='amount'>
                                            <p className='priceAmt'>Rs.{item.price}</p>
                                            <p className='fullAmt'>Rs.{item.fullAmt}</p>
                                            <p className='off'>({item.off}%OFF)</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                :
                <Details selectedItem={selectedItem} addToCart={handleAddToCart} />
            }
            <div className='mainFooter'>
                <div className='footer1' style={{ display: contentView ? 'flex' : 'none' }}>
                    <div className='toyList'>
                        <h4 className='toyHead'>BUY TOYS STORE</h4>
                        <h3>Toys - For Your Little Ones</h3>
                        <p>Growing up can get boring. There is so much your kids want to do and learn, with only a few ways to find it. While keeping them busy is sure a task, you need to also ensure that they are constantly learning and growing. In situations like this, toys are one of the best options available.</p>
                        <p>Not only are they an engaging, creative and educational outlet for children, but even become a mode of relaxation. But going out to buy toys with kids can be quite an elaborate task. They would probably ask you to buy the entire kids’ toy shop for them. And so, Luxelane’s toys store is the perfect option to make your life easier.</p>
                        <h3>What are Some of the Popular Toys?</h3>
                        <p>Here are some of the options available that you can expect to find on our online toy shop.</p>
                        <ul>
                            <li>BOARD GAMES</li>
                            <p>Board games are great for small groups of kids looking to hone their intelligence and also learn some patience. Some might just be fun, while others would need your kids to apply their minds and engage intensively. While they are a valuable addition to your kids’ collection, they can be great stress busters for you too!</p>
                            <li>ACTIVITY TOYS</li>
                            <p>These will improve the fine and gross motor skills of your boys and girls while also exploring their creativity. They allow children to build, create and bring together things of their own. Thus, they learn without even realising it. The best part is that whether your little one is alone or has company, these toys can be used.</p>
                            <li>PUZZLES</li>
                            <p>Puzzles help your children learn problem-solving and little tips and tricks for the world. They will understand the importance of trial and error as they keep experimenting with different methods to figure out the puzzle.</p>
                            <li>SOFT TOYS</li>
                            <p>As the name suggests, soft toys are the ideal fuzzy companions for your children. Simply put, these toys feature a design or a popular cartoon character or an animal like a teddy bear with fake fur filled inside it. Apart from being their favourite cuddly things, they make up for attractive décor items.</p>
                        </ul>
                        <h3>Why are Toys Important?</h3>
                        <p>Here are some reasons to buy toys that will play a crucial role in the development of a child.</p>
                        <ul>
                            <li>MOTOR SKILLS</li>
                            <p>Since toys encourage children to build something from their own imagination, they play an integral role in fine-tuning their gross motor skills.</p>
                            <li>EMOTIONAL DEVELOPMENT</li>
                            <p>Toys boost children’s creativity and help them express their emotions via role-playing or through dolls. This speeds up their emotional development.</p>
                            <li>COGNITIVE DEVELOPMENT</li>
                            <p>Playing stimulates children’s concentration and memory skills while also giving them the ability to solve unique problems. This, in turn, helps boost their cognitive development.</p>
                        </ul>
                        <h3>Buy Kids’ Toys Online and More on Luxelane</h3>
                        <p>Luxelane, with its expansive online toy store, is the best bet for you to shop for your little one’s desired plaything. Browse through our assorted selection of construction and learning toys from 100% original brands. Make most of the latest trends by signing up for the Insider Program. Use the size finder to land the perfect fit and benefit from exclusive content from the Luxelane Studio. Avail great discounts and many other perks by signing up to Luxelane right away.</p>
                    </div>
                    <div className='toyprice'>
                        <h4 className='toypriceHead'>TOYS STORE PRICE LIST</h4>
                        <table>
                            <tr>
                                <td className='tdHead'>Toys Store</td>
                                <td className='tdHead'>PRICE (RS)</td>
                            </tr>
                            <tr>
                                <td>HSR Kids Set of 6 Purple & Pink Pop Out Tubes Fidget Stress Toys</td>
                                <td>Rs. 299</td>
                            </tr>
                            <tr>
                                <td>DearJoy Kids Avocado Panda Teddy Soft Toy</td>
                                <td>Rs. 500</td>
                            </tr>
                            <tr>
                                <td>MiArcus Infants Pink Sophie Soft Toy</td>
                                <td>Rs. 359</td>
                            </tr>
                            <tr>
                                <td>Frantic Dexter Dog Huggable Lovable Non-Toxic Soft Toy</td>
                                <td>Rs. 467</td>
                            </tr>
                            <tr>
                                <td>CHOCOZONE Football Table Soccer Game With 4 Rods</td>
                                <td>Rs. 2999</td>
                            </tr>
                            <tr>
                                <td>DukieKooky Kids Pink Soft Doll</td>
                                <td>Rs. 696</td>
                            </tr>
                            <tr>
                                <td>MUREN Kids Chameleon Number Wooden Puzzle</td>
                                <td>Rs. 1099</td>
                            </tr>
                            <tr>
                                <td>MUREN Kids Early Learning Touch Sound Study Book for Toddlers</td>
                                <td>Rs. 701</td>
                            </tr>
                            <tr>
                                <td>NERF Boys Elite 2.0 Commander RD-6 Dart Blaster Gun Game For 8+ Plus</td>
                                <td>Rs. 1499</td>
                            </tr>
                            <tr>
                                <td>DearJoy Kids Rabbit In Strawberry Soft Toy</td>
                                <td>Rs. 445</td>
                            </tr>
                        </table>
                        <h4 className='toyDate'>Data last updated on 03/01/2024</h4>
                    </div>
                </div>
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
                <div className='sponsers'>
                    <p>In case of any concern,<span> Contact Us</span></p>
                    <p className='spon'>© 2024 www.luxelane.com. All rights reserved.</p>
                    <p className='spon'>A Flipkart company</p>
                </div>
            </div>
        </div>
    );
}
export default Home;