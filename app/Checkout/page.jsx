"use client";

import React from 'react';
import { useCart } from '../Providers/Cart';
import CustomerInfo from '../Components/CustomerInfo';

const CheckoutPage = () => {
    const { cartItems, addQuant, subQuant } = useCart();


    const handleCheckout = () => {
        alert('Proceeding to checkout with items:', cartItems);
        console.log(msg);
        sendOrder();
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='m-6 justify-left w-full py-20 h-[50rem]'>
            <div className='w-2/3 m-4'>
                <h1>Checkout</h1>

                <ul>
                    {cartItems.map((item, index) => (
                        <li className="m-2 flex " key={index}>
                            <p className="m-2">{item.title}</p>
                            <p className="m-2">${item.price}</p>
                            <p className="m-2">Qty:  {item.quantity}</p>
                            <button className='mx-2' onClick={() => subQuant(item.id)}>-</button>

                            <button className='mx-2' onClick={() => addQuant(item.id)}>+</button>

                        </li>
                    ))}
                </ul>
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
            </div>



            <div className='w-1/3 m-4'>
                <h1>Check details</h1>
                <CustomerInfo />
            </div>


            <button className="text-natural text-xs m-2 bg-blue-950 text-white px-6 py-2 rounded-full right-6"
                onClick={handleCheckout}>
                Delivery
            </button>
        </div>
    );
};

export default CheckoutPage;
