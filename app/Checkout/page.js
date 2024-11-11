"use client";

import React, { useContext } from 'react';
import { useCart } from '../CartContext';
import Cart from '../Components/Cart';

const CheckoutPage = () => {
    const { cartItems, totalPrice, clearCart } = useCart();

    const handleCheckout = () => {
        // Implement checkout logic here
        console.log('Proceeding to checkout with items:', cartItems);
        clearCart();
    };

    return (
        <div className='m-6 justify-left bg-gray-100 w-full py-20 h-[50rem]'>
            <h1>Checkout</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}  {item.quantity}
                    </li>
                ))}
            </ul>
            <h2>Total: ${totalPrice}</h2>
            <button className="text-natural text-xs m-2 bg-blue-950 text-white px-6 py-2 rounded-full right-6"
                onClick={handleCheckout}>
                Delivery</button>
        </div>
    );
};

export default CheckoutPage;