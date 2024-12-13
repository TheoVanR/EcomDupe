"use client";

import React from 'react';
import { useCart } from '../CartContext';
import CustomerInfo from '../Components/CustomerInfo';

const CheckoutPage = () => {
    const { cartItems, totalAmount, clearCart, setCartItems } = useCart();

    const msg = {
        "Order": {
            "Id": 0,
            "dateOfOrder": "2024-06-08"
        },
        "Product": {
            "Id": 2,
            "title": "Navy shirt",
            "Price": 1599,
            "Category": "Shirt"
        },
        "Customer": {
            "Id": 2,
            
            "Email": "jane.doe@example.com",
            "adress": "456 Oak St",
            "postalCode": 67890,
            "City": "Shelbyville"
        }
    };
    
    const sendOrder = async () => {
        try {
            const response = await fetch('http://localhost:8080/Order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(msg)
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Failed to send order', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    const handleCheckout = () => {
        alert('Proceeding to checkout with items:', cartItems);
        console.log(msg);
        sendOrder();
        
    };

    const increment = (index) => {
        const newItems = [...cartItems];
        newItems[index].quantity++;
        setCartItems(newItems);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className='m-6 justify-left w-full py-20 h-[50rem]'>
            <h1>Checkout</h1>

            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        Item: {item.title} - ${item.price} x {item.quantity}
                        <button onClick={() => increment(index)}>
                            +
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Total: ${totalPrice.toFixed(2)}</h2>

            <h1>Check details</h1>
            <CustomerInfo />

            <button className="text-natural text-xs m-2 bg-blue-950 text-white px-6 py-2 rounded-full right-6"
                onClick={handleCheckout}>
                Delivery
            </button>
        </div>
    );
};

export default CheckoutPage;
