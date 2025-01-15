'use client';

import { useCart } from '../CartContext';

const CartBtn = ({ id, title, price }) => {
    const { addToCart } = useCart();

    

    const handleAddToCart = () => {
        const product = { id, title, price };
        addToCart(product);
        console.log(`${title} added to cart`); // Debugging line
    };

    return (
        <button
            onClick={handleAddToCart}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
            Add to cart
        </button>
    );
};

export default CartBtn;
