"use client";
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, } from '@fortawesome/free-solid-svg-icons'
import CItem from './CItem';
import Image from 'next/image';

const Cart = () => {
    const { cartItems, removeItem } = useCart(); // Access cartItems and functions from CartContext

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Calculate the total price based on cartItems
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <>
            {/* Button to open the cart modal */}
            <button onClick={toggleModal}>
                <FontAwesomeIcon icon={faBagShopping} />
            </button>


            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed  top-0 border-2 shadow  right-0 transform -translate-y-1/2 w-2/5 h-full bg-white z-50 flex items-start opacity-10 justify-left  animate-bounce-in"
                    aria-modal="true"
                    role="dialog"
                >
                    <ul className="flex flex-col  py-12  w-full text-natural no-underline space-y-4 list-none">
                        <div className="px-4" >
                            <h1 className="text-4xl  no-underline ">
                                Cart
                            </h1>
                          
                        </div>

                        {/* If the cart is empty */}

                        {cartItems.length === 0 ? (
                            <>
                                <div className='p-4 h-[12rem]'>
                                    <h2 >Your cart is empty.</h2>

                                   
                                </div>
                                <div className="bg-gray-100 py-2 flex mt-[8rem] justify-center items-center ">
                                    <p>Free delivery and returns within 60 days</p>
                                </div>
                                <div class="absolute w-full bottom-6 px-5 lg:px-10 py-2 bg-surface-100">
                                    <div class="flex justify-center mt-4 items-center w-full desktop-emphasis-l">
                                        <button
                                            onClick={toggleModal}
                                            className="text-neutral text-xs bg-gray-100 px-4 mr-4 py-3 rounded-full "
                                        >
                                            X
                                        </button>
                                        <Link onClick={toggleModal} className=" bg-blue-950 rounded-full text-white p-2  w-full text-center  " href="/Products">Products
                                        </Link>


                                    </div>
                                </div>
                            </>





                        ) : (
                            // If the cart has items, display them
                            <div >

                                <div className='p-4'>
                                    <ul>
                                        {cartItems.map((item, index) => (
                                            <li className="p-4" key={index}>
                                                <div className='flex '>
                                                         <Image src="/shirt2.webp" alt="shirt2" width={70} height={60} />
                                                         <div className='mx-2 justify-center'>
                                                            <p>{item.title}</p> 
                                                             <p> ${item.price.toFixed(2)}</p>
                                                            <button className="py-2 w-[4rem] bg-gray-100 rounded-full" onClick={() => removeItem(index)}>X</button>

                                                         </div>
                                                
                                                </div>
                                               
                                                
                                            </li>
                                        ))}


                                    </ul>

                                </div>


                                <div className="bg-gray-100 py-2 flex mt-[8rem] justify-center items-center ">
                                    <p>Free delivery and returns within 60 days</p>
                                </div>



                                <div class="absolute w-full bottom-6 px-5 lg:px-10 py-2 bg-surface-100">
                                    <div class="flex justify-between items-center w-full desktop-emphasis-l"><h2>Total</h2>
                                        <p>${totalPrice.toFixed(2)}</p>

                                    </div>
                                    <div class="flex justify-center mt-4 items-center w-full desktop-emphasis-l">
                                        <button
                                            onClick={toggleModal}
                                            className="text-neutral text-xs bg-gray-100 px-4 mr-4 py-3 rounded-full "
                                        >
                                            X
                                        </button>
                                        <Link className=" bg-blue-950 rounded-full text-white p-2  w-full text-center  " href="/Checkout">Checkout
                                        </Link>

                                    </div>



                                </div>
                            </div>
                        )}




                    </ul>
                </div>
            )}
        </>
    );
};

export default Cart;
