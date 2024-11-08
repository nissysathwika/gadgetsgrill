import React, { useState } from 'react';
import './shop.css';
import { AiFillEye, AiOutlineClose } from 'react-icons/ai';

const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
    // Toggle Product Detail
    const [showDetail, setShowDetail] = useState(false);
    // Detail Page Data
    const [detail, setDetail] = useState(null);

    // Showing Detail Box
    const detailpage = (product) => {
        setDetail(product);  // Set the product directly
        setShowDetail(true); // Show detail modal
    };

    const closedetail = () => {
        setShowDetail(false);
        setDetail(null); // Clear detail when closing to reset state
    };

    return (
        <>
            {/* Detail Modal */}
            {showDetail && detail && (
                <div className='product_detail'>
                    <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
                    <div className='container'>
                        <div className='img_box'>
                            <img src={detail.image} alt='' />
                        </div>
                        <div className='info'>
                            <h4># {detail.cat}</h4>
                            <h2>{detail.Name}</h2>
                            <p>Discover the perfect blend of quality and performance with our premium product. Engineered for efficiency and durability, this device is built to last, providing you with the tools you need for work, play, and everything in between.</p>
                            <h3>${detail.price}</h3>
                            {/* Add to Cart Button with Debugging */}
                            <button 
                                onClick={() => {
                                    console.log("Adding to cart:", detail); // Debugging log
                                    addtocart(detail);
                                }}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Shop Section */}
            <div className='shop'>
                <h2>Shop</h2>
                <p>Home </p>
                <div className='container'>
                    <div className='left_box'>
                        <div className='category'>
                            <div className='header'>
                                <h3>all categories</h3>
                            </div>
                            <div className='box'>
                                <ul>
                                    <li onClick={() => allcatefilter()}>All</li>
                                    <li onClick={() => Filter("tv")}>Tv</li>
                                    <li onClick={() => Filter("laptop")}>Laptop</li>
                                    <li onClick={() => Filter("watch")}>Watch</li>
                                    <li onClick={() => Filter("speaker")}>Speaker</li>
                                    <li onClick={() => Filter("electronics")}>Electronics</li>
                                    <li onClick={() => Filter("headphone")}>Headphone</li>
                                    <li onClick={() => Filter("phone")}>Phone</li>
                                </ul>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='image/shop_left.avif' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='image/shop_top.webp' alt='' />
                            </div>
                        </div>
                        <div className='product_box'>
                            <h2>Shop Product</h2>
                            <div className='product_container'>
                                {shop.map((curElm) => (
                                    <div className='box' key={curElm.id}>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt='' />
                                            <div className='icon'>
                                                {/* Eye Icon Only */}
                                                <li onClick={() => detailpage(curElm)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
