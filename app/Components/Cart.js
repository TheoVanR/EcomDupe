"use client";
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import Link from 'next/link';

const Cart = () => {
    const { cartItems, addItem, removeItem } = useCart(); // Access cartItems and functions from CartContext

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
                Open cart
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed py-12 top-0 border-2 px-6 right-0 transform -translate-y-1/2 w-1/3 h-full bg-white z-50 flex items-start opacity-10 justify-left  animate-bounce-in"
                    aria-modal="true"
                    role="dialog"
                >
                    <ul className="flex flex-col text-natural no-underline space-y-4 list-none">
                        <h1 className="text-4xl  no-underline ">
                            Varukorg
                        </h1>
                        {/* If the cart is empty */}
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            // If the cart has items, display them
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index}>
                                        {item.name} - ${item.price.toFixed(2)}
                                        <button onClick={() => removeItem(index)}>Remove</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {/* Total Price */}
                        <h3>Total: ${totalPrice.toFixed(2)}</h3>

                        {/* Checkout button */}
                        <Link className=" bg-gray-100 px-6 py-2 text-center rounded-full " href="./Checkout">Checkout
                        </Link>




                        {/* Close button */}

                        <button
                            onClick={toggleModal}
                            className="text-neutral text-xs bg-gray-100 px-6 py-2 rounded-full fixed bottom-10 right-6"
                        >
                            Close
                        </button>

                    </ul>
                </div>
            )}
        </>
    );
};

export default Cart;
