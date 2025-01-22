"use client";
import React, { useState } from 'react';
import { useCart } from '../Providers/Cart';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Cart = () => {

    const { cartItems, removeItem, addQuant, subQuant } = useCart(); // Access cartItems and functions from CartContext
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev); // Toggle modal state
    };

    // Calculate the total price based on cartItems
    const totalPrice = cartItems.reduce((total, item) => total + (item.price || 0), 0);

    return (
        <>
            {/* Button to open the cart modal */}
            <button className="cursor-pointer px-8 text-center" onClick={toggleModal}>
                <FontAwesomeIcon icon={faBagShopping} />
            </button>

            {/* Modal */}
            {isModalOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-20 z-60" // Full screen transparent overlay with 20% opacity
                        aria-modal="true"
                        role="dialog"
                    />
                    <div
                        className="fixed top-0 right-0 border-2 shadow transform -translate-y-1/2 w-2/5 h-full bg-white z-50 flex flex-col animate-bounce-in"
                        aria-modal="true"
                        role="dialog"
                    >
                        <div className="px-4 py-12">
                            <h1 className="text-4xl">Cart</h1>
                        </div>

                        {/* If the cart is empty */}
                        {cartItems.length === 0 ? (
                            <>
                                <div className="p-4 h-[12rem]">
                                    <h2>Your cart is empty.</h2>
                                </div>
                                <div className="bg-gray-100 py-2 flex mt-[8rem] justify-center items-center">
                                    <p>Free delivery and returns within 60 days</p>
                                </div>
                                <div className="absolute w-full bottom-6 px-5 lg:px-10 py-2 bg-surface-100">
                                    <div className="flex justify-center mt-4 items-center w-full desktop-emphasis-l">
                                        <button
                                            onClick={toggleModal}
                                            className="text-neutral text-xs bg-gray-100 px-4 mr-4 py-3 rounded-full"
                                        >
                                            X
                                        </button>
                                        <Link onClick={toggleModal} className="bg-blue-950 rounded-full text-white p-2 w-full text-center" href="/Products">Products</Link>
                                    </div>
                                </div>
                            </>
                        ) : (
                            // If the cart has items, display them
                            <div className="flex-grow">
                                <div className='p-4 max-h-[60vh] overflow-y-auto'> {/* Change max-h-30 to max-h-[30vh] or max-h-40 */}
                                    <ul>
                                        {cartItems.map((item, index) => (
                                            <li className="p-4 flex" key={index}>
                                                <Image src="/shirt2.webp" alt="shirt2" width={70} height={50} />
                                                <div className='mx-2'>
                                                    <p>{item.title}</p>
                                                    <p>${item.price ? item.price : 'N/A'}</p>
                                                    <div className='flex'>
                                                        <p>Quantity:</p>
                                                        <button className='mx-2' onClick={() => subQuant(item.id)}>-</button>
                                                        <p>{item.quantity}</p>
                                                        <button className='mx-2' onClick={() => addQuant(item.id)}>+</button>
                                                    </div>
                                                    <button onClick={() => removeItem(item.id)}>X</button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-100 py-2 flex justify-center items-center">
                                    <p>Total: ${totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-center mt-4 mx-2 items-center w-full desktop-emphasis-l">
                                    <button
                                        onClick={toggleModal}
                                        className="text-neutral text-xs bg-gray-100 px-4 mr-4 py-3 rounded-full"
                                    >
                                        X
                                    </button>

                                    <Link onClick={toggleModal} className="bg-blue-950 mr-4 rounded-full text-white p-2 w-full text-center" href="/Checkout">Checkout</Link>
                                </div>
                            </div>

                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
