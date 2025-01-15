"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

// Create context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
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
        const storedCart = Cookies.get('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Update cookie whenever cart state changes
    useEffect(() => {
        if (cartItems.length > 0) {
            Cookies.set('cart', JSON.stringify(cartItems), { expires: 1 });
        }
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, totalAmount, clearCart, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
