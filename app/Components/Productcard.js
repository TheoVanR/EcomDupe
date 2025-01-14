"use client";
import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';



const ProductCard = () => {
    const { addToCart } = useCart();

    const [product, setProduct] = useState({});
    let url = "https://fakestoreapi.com/products/1";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);
    return (



        <div className="absolute  top-[10rem]">
            <div className='p-2'>
                <p className="text-2xl font-medium">{product.title}</p>

            </div >

            <div className='p-2'>
                <p className="text-base">{product.price}</p>

            </div>
            <div className='p-2'>
                <p className="product-desc">{product.description}</p>

            </div>
         
            <button onClick={() => addToCart(product)} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add to cart</button>
        </div>


    );
};

export default ProductCard;