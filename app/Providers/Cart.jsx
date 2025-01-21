"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

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

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    // Define printCart inside the provider
    const printCart = () => {
        console.log("Current Cart Items:", cartItems);
    };



    const clearCart = () => {
        setCartItems([]);
        Cookies.remove("cart");
    };
    // Calculate the total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const addQuant = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const subQuant = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Prevent quantity from dropping below 1
                    : item
            )
        );
    };


    useEffect(() => {
        const storedCart = Cookies.get("cart");
        if (storedCart) {
            try {
                setCartItems(JSON.parse(storedCart));
            } catch (error) {
                console.error("Error parsing cart data from cookies:", error);
            }
        }
    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            Cookies.set("cart", JSON.stringify(cartItems), { expires: 1 });
        } else {
            Cookies.remove("cart");
        }
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, totalAmount, clearCart, setCartItems, printCart, addQuant, subQuant }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
