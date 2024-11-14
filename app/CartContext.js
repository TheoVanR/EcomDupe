"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

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

    // Load cart data from cookies if available
    useEffect(() => {
        if (cartItems.length > 0) {
            Cookies.set('cart', JSON.stringify(cartItems), { expires: 1 });
        }
    }
        , [cartItems]);

    // Update cookie whenever cart state changes
    useEffect(() => {
        const storedCart = Cookies.get('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, totalAmount, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
