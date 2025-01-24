'use client';

import { useCart } from '../Providers/Cart';
import { useState } from 'react';

const CartBtn = ({ id, title, price }) => {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = () => {
        const product = { id, title, price }; // Check if id, title, and price are correct
        console.log("Adding product to cart:", product); // Debug log
        addToCart(product);
        setIsModalOpen(true);
    };

    return (
        <>
            <button
                onClick={handleAddToCart}
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                Add to cart
            </button>

            {isModalOpen && (
                <div className='absolute z-50 rounded-md top-[7rem] right-10 text-center p-2 bg-gray-100 mx-auto h-[3rem] w-[14rem] flex items-center justify-between'>
                    <p className=''>Product added to cart</p>
                    <button onClick={() => setIsModalOpen(false)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        x
                    </button>
                </div>
            )}
        </>
    );
};

export default CartBtn;
