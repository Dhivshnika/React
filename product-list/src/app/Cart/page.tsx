"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../globals.css';
import { HomeOutlined, ShoppingOutlined, UserOutlined, SettingOutlined, PlusCircleFilled, LogoutOutlined, MinusCircleFilled, CloseCircleFilled, ShoppingFilled } from '@ant-design/icons';
import { Flex, Button, Rate, Image } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
const Cart: React.FC = () => {
    const cartItems = useSelector((state: any) => state.cartReducer);
    const dispatch = useDispatch();
    const handleIncrease = (id: number, value: number) => {
        const quantity = value + 1;
        dispatch({
            type: 'QUANTITY_ITEM',
            id: id,
            quantity: quantity,
        });
    }
    const handleDecrease = (id: number, value: number) => {
        if (value > 1) {
            const quantity = value - 1;
            dispatch({
                type: 'QUANTITY_ITEM',
                id: id,
                quantity: quantity,
            });
        }
    }
    const handleRemove = (id: number) => {
        dispatch({
            type: 'REMOVE_CART',
            payload: {
                id: id,
            }
        });
    }
    const totalPrice = cartItems.reduce((accumulator: any, currentItem: any) => {
        return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    const gst = Math.round((20 / 100) * totalPrice);
    const grandTotal = totalPrice + gst + 5 + 72;
    return (
        <Flex gap="middle">
            <Flex vertical justify='flex-start' gap="large" align='center' className='menuContainer cartMenuContainer'>
                <Flex gap="small" className='onshop'><ShoppingFilled />OnShop</Flex>
                <Flex vertical gap="large">
                    <Flex gap="middle" className='home'><HomeOutlined /><Link href="/">Home</Link></Flex>
                    <Flex gap="middle" className='cart'><ShoppingOutlined /><Link href="/Cart">Cart</Link></Flex>
                    <Flex gap="middle" className='user'><UserOutlined />User Profile</Flex>
                    <Flex gap="middle" className='settings'><SettingOutlined />Settings</Flex>
                    <Flex gap="middle" className='logout'><LogoutOutlined />Log Out</Flex>
                </Flex>
            </Flex>
            {cartItems.length !== 0 ?
                <Flex justify='space-between' className='cartItemBox'>
                    <Flex vertical gap='large' className='shoppingBox'>
                        <Flex justify='space-between' className='shoppingBoxHead'>
                            <h3>Shopping Cart</h3>
                            <h3>{cartItems.length} items</h3>
                        </Flex>
                        <Flex gap='middle' vertical align='center'>
                            {cartItems.map((item: any) => (
                                <Flex className='itemBox' gap="large" key={item.id}>
                                    <Image src={item.images[0]} height={200} width={200} />
                                    <Flex justify='space-between' align='flex-start' style={{ width: "64%" }}>
                                        <Flex vertical gap='small'>
                                            <h4>{item.title}</h4>
                                            <Rate disabled allowHalf defaultValue={item.rating} />
                                            <h5 className='amount'>Rs. {item.price}/-</h5>
                                            <Flex gap="small">
                                                <MinusCircleFilled style={{ color: "orange" }} onClick={() => handleDecrease(item.id, item.quantity)} />
                                                <div>{item.quantity}</div>
                                                <PlusCircleFilled style={{ color: "orange" }} onClick={() => handleIncrease(item.id, item.quantity)} />
                                            </Flex>
                                        </Flex>
                                        <CloseCircleFilled style={{ color: "red" }} onClick={() => handleRemove(item.id)} />
                                    </Flex>
                                </Flex>
                            ))}

                        </Flex>
                    </Flex>
                    <Flex vertical gap="middle" className='details'>
                        <h4 className='detailsTitle'>Order Summary</h4>
                        <Flex gap="small" vertical className='priceBorder'>
                            <h5>PRICE DETAILS ({cartItems.length} Items)</h5>
                            <Flex justify='space-between'><p>Total MRP</p><p>₹{totalPrice}</p></Flex>
                            <Flex justify='space-between'><p>GST</p><p>₹{gst}</p></Flex>
                            <Flex justify='space-between'><p>Platform Fee</p><p>₹5</p></Flex>
                            <Flex justify='space-between'><p>Shipping Fee</p><p>₹72</p></Flex>
                        </Flex>
                        <Flex justify='space-between'>
                            <h4 style={{ marginTop: "10px" }}>TotalAmount</h4>
                            <h4 style={{ marginTop: "10px" }}>₹{grandTotal}</h4>
                        </Flex>
                        <Button block className='orderButton' size='large'>Place Order</Button>
                    </Flex>
                </Flex>
                :
                <Flex vertical align='center' justify='center' style={{ width: '80%', marginBottom: "20px" }}>
                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/online-payment-2496112-2088555.png?f=webp' height={450} width={450} />
                    <h3>Hey, it feels so light!</h3>
                    <p>There is nothing in your bag. Lets add some items.</p>
                </Flex>
            }
        </Flex >
    )
}
export default Cart;