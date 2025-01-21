"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

// Create context
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // Load products data from cookies if available
    useEffect(() => {
        const storedProducts = Cookies.get('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    // Update cookie whenever products state changes
    useEffect(() => {
        if (products.length > 0) {
            Cookies.set('products', JSON.stringify(products), { expires: 1 });
        }
    }, [products]);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    return useContext(ProductContext);
};