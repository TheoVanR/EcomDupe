"use client";

import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be managed by your authentication logic

    const addFavorite = (item) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFavorite = (itemId) => {
        setFavorites((prevFavorites) => prevFavorites.filter(item => item.id !== itemId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isLoggedIn, setIsLoggedIn }}>
            {children}
        </FavoritesContext.Provider>
    );
};
