import '../Details/Details.css'
import bag1 from '../../assets/bag1.png';
import heart from '../../assets/heart.png';
import van from '../../assets/van.png';
import star from '../../assets/star.png';

function Details({ selectedItem, addToCart }) {
    if (!selectedItem) {
        return <p>No item selected</p>;
    }
    const handleAdd = () => {
        addToCart(selectedItem);
    }
    return (
        <div className='priceContainer'>
            <img src={selectedItem.image} alt='img1' height={600}
                width={420} className='priceConImg' />
            <img src={selectedItem.extraImg} alt='img1' height={600}
                width={420} className='priceConImg' />
            <div className='productInfo'>
                <h2>{selectedItem.name}</h2>
                <p className='descSel'>{selectedItem.desc}</p>
                <div className='starBox1'>
                    <p>Rating</p>
                    <p>{selectedItem.rating}</p>
                    <img src={star} alt='star' height="15" width="15" />
                </div>
                <div className='separatorSel'></div>
                <div className='priceBox'>
                    <p className='priceSel'>₹{selectedItem.price}</p>
                    <p className='fullAmtSel'>MRP ₹{selectedItem.fullAmt}</p>
                    <p className='offSel'>( {selectedItem.off}% OFF )</p>
                </div>
                <p className='tax'>inclusive of all taxes</p>
                <h4>SELECT SIZE</h4>
                <div className='sizeDiv'>
                    <p>OneSize</p>
                </div>
                <div className='navBox' onClick={handleAdd}>
                    <div className='addBag'>
                        <img src={bag1} alt='bag1' height="20" width="20" />
                        <p>ADD TO BAG</p>
                    </div>
                    <div className='wishBox'>
                        <img src={heart} alt='heart' height="20" width="20" />
                        <p>WISHLIST</p>
                    </div>
                </div>
                <p className='returnText'>This item cannot be returned.</p>
                <div className='separatorSel'></div>
                <div className='detailPriceDesc'>
                    <p className='priceDesc'>₹{selectedItem.price}</p>
                    <p className='fullAmtDesc'>₹{selectedItem.fullAmt}</p>
                    <p className='offDesc'>({selectedItem.off}% OFF)</p>
                </div>
                <p className='seller'>Seller: <span>{selectedItem.seller}</span></p>
                <div className='separatorSel'></div>
                <div className='deliveryBox'>
                    <h4>DELIVERY OPTIONS </h4>
                    <img src={van} alt='van' height="20" width="20" />
                </div>
                <div className='pincode'>
                    <input type='text' placeholder='Enter Pincode' />
                    <p>Check</p>
                </div>
                <p className='firstPara'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                <p className='secondPara'>100% Original Products</p>
                <p className='secondPara'>Pay on delivery might be available</p>
                <p className='secondPara'>Easy 7 days exchanges</p>
                <p className='secondPara'>This item is only exchangeable for the same or a different size, if available, and cannot be returned</p>
            </div>
        </div>
    )
}
export default Details;