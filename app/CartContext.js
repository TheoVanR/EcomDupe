"use client";

import React, { createContext, useState, useContext } from 'react';

// Create context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeItem = (index) => {
        setCartItems((prevItems) => prevItems.filter((item, i) => i !== index));
    };

    // Calculate the total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Clear the cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, totalAmount, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
