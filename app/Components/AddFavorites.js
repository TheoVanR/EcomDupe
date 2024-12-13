"use client";

import React from 'react';
import { useFavorites } from '../FavoritesContext';
import { faHeart } from '@fortawesome/free-regular-svg-icons';



const AddFavorites = ({ item }) => {
    const { addFavorite, isLoggedIn } = useFavorites();

    const handleAddFavorite = () => {
        if (isLoggedIn) {
            addFavorite(item);
        } else {
            alert('Please log in to add items to your favorites.');
        }
    };

    return (
        <button onClick={handleAddFavorite}>
          < FontAwesomeIcon icon={faHeart} />
        </button>
    );
};

export default AddFavorites;
