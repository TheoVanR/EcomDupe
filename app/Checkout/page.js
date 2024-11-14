"use client";

import React from 'react';
import { useCart } from '../CartContext';
import CustomerInfo from '../Components/CustomerInfo';

const CheckoutPage = () => {
    const { cartItems, totalPrice, clearCart } = useCart();


    const handleCheckout = () => {
        // Implement checkout logic here
        alert('Proceeding to checkout with items:', cartItems);
        clearCart();
    };
    const increment = (index) => {
        const newItems = [...cartItems];
        newItems[index].quantity++;
        setCartItems(newItems);
    }

    return (
        <div className='m-6 justify-left bg-gray-100 w-full py-20 h-[50rem]'>
            <h1>Checkout</h1>

            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        Item: {item.title} - ${item.price}  {item.quantity}
                        <button onClick={increment}>
                            +
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Total: ${totalPrice}</h2>

            <h1>Check detalis</h1>
            <CustomerInfo />

            <button className="text-natural text-xs m-2 bg-blue-950 text-white px-6 py-2 rounded-full right-6"
                onClick={handleCheckout}>
                Delivery</button>
        </div>
    );
};

export default CheckoutPage;