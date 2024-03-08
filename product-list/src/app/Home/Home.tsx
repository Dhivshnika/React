"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../globals.css';
import { HomeOutlined, ShoppingOutlined, UserOutlined, SettingOutlined, HeartFilled, LogoutOutlined, ShoppingFilled } from '@ant-design/icons';
import { Flex, Button, Rate, Image, Modal, Carousel } from 'antd';
import { useDispatch } from 'react-redux';

const Home: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [display, setDisplay] = useState<any>();
    const [modalOpen, setModalOpen] = useState<any>(false);
    const [loading, setLoading] = useState(false);
    const [cartItem, setCartItem] = useState<any[]>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data.products)) {
                    setProducts(data.products);
                } else {
                    console.error('Invalid data format:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const handleModal = (item: any) => {
        setDisplay(item);
        setModalOpen(true);
    }
    const handleCart = () => {
        setDisplay({ ...display, quantity: 1 });
        console.log(display);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setModalOpen(false);
        }, 3000);
        dispatch({
            type: 'ADD_CART',
            payload: display
        });
    }
    return (
        <Flex>
            <Flex vertical justify='flex-start' gap="large" align='center' className='menuContainer'>
                <Flex gap="small" className='onshop'><ShoppingFilled />OnShop</Flex>
                <Flex vertical gap="large">
                    <Flex gap="middle" className='home'><HomeOutlined /><Link href="/">Home</Link></Flex>
                    <Flex gap="middle" className='cart'><ShoppingOutlined /><Link href="/Cart">Cart</Link></Flex>
                    <Flex gap="middle" className='user'><UserOutlined />User Profile</Flex>
                    <Flex gap="middle" className='settings'><SettingOutlined />Settings</Flex>
                    <Flex gap="middle" className='logout'><LogoutOutlined />Log Out</Flex>
                </Flex>
            </Flex>
            <div className='outerBox'>
                <Flex wrap="wrap" gap="large">
                    {
                        products.map((item: any) => (
                            <Flex vertical align='center' key={item.id} className='detailBox' onClick={() => handleModal(item)}>
                                <Image src={item.images[0]} width={200} height={200} />
                                <h4 className='h4'>{item.title}</h4>
                                <Flex justify='space-between' gap="small" className='ratingBox'>
                                    <Rate disabled allowHalf defaultValue={item.rating} />
                                    <div>Rs.{item.price}/-</div>
                                </Flex>
                                <Button type='primary' size='large' style={{ marginTop: "20px" }}>Wishlist<HeartFilled style={{ color: "red" }} /></Button>
                            </Flex>
                        ))
                    }
                </Flex>
            </div>
            {display &&
                <Modal open={modalOpen} onCancel={() => setModalOpen(false)} footer={
                    <Flex vertical gap='small' justify='center' align='center'>
                        <Button type='primary' loading={loading} onClick={handleCart}>Add to Cart</Button>
                        <Flex vertical justify='flex-start' align='flex-start' style={{ width: '65%' }}>
                            <div>Category: <span className='info'>{display.category}</span></div>
                            <div>Brand: <span className='info'>{display.brand}</span></div>
                        </Flex>
                    </Flex>
                }>
                    <Flex vertical justify='center'>
                        <div className='carousel'>
                            <div className='carousel'>
                                <div className='carousel'>
                                    <Carousel autoplay autoplaySpeed={2000} dotPosition='right' >
                                        <Image src={display.images[0]} width={200} height={200} />
                                        <Image src={display.images[1]} width={200} height={200} />
                                        <Image src={display.images[2]} width={200} height={200} />
                                        <Image src={display.images[3]} width={200} height={200} />
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <Flex vertical align='center'>
                            <div style={{ width: '65%' }}>
                                <h2>{display.title}</h2>
                                <Rate disabled allowHalf defaultValue={display.rating} />
                                <div className='amount'>Rs.{display.price}/-</div>
                                <div>{display.description}</div>
                            </div>
                        </Flex>
                    </Flex>
                </Modal>
            }
        </Flex>
    );
}
export default Home;