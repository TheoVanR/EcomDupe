"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

// Create context
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fakeApi = 'https://fakestoreapi.com/products?limit=21';

    // Fetch products from the API
    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(fakeApi);
            if (!res.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await res.json();
            setProducts(data);
            Cookies.set('products', JSON.stringify(data), { expires: 1 }); // Cache in cookies
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Load products from cookies or fetch if not available
    useEffect(() => {
        const storedProducts = Cookies.get('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            fetchProducts(); // Fetch only if no cached data is available
        }
    }, []);

    return (
        <ProductContext.Provider value={{ products, fetchProducts, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
};

// Custom hook to use product context
export const useProducts = () => {
    return useContext(ProductContext);
};
