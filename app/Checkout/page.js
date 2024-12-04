"use client";

import React from 'react';
import { useCart } from '../CartContext';
import CustomerInfo from '../Components/CustomerInfo';

const CheckoutPage = () => {
    const { cartItems, totalAmount, clearCart, setCartItems } = useCart();

    const msg = {
        "Order": {
            "Id": "12345",
            "dateOfOrder": "2024-11-20"
        },
        "Product": {
            "Id": "67890",
            "name": "Example Product",
            "description": "This is a sample product description.",
            "quantity": 2
        },
        "Id": 1,
        "title": "Sample Order",
        "Price": 99.99,
        "Category": "Electronics",
        "Customer": {
            "Id": 1,
            "name": "John Doe",
            "Email": "john.doe@example.com",
            "adress": "123 Main St",
            "postalCode": 12345,
            "City": "Sample City"
        }
    };
    
    const sendOrder = async () => {
        try {
            const response = await fetch('https://localhost/order', {
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
