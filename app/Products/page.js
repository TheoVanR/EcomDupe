"use client";
import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import Link from 'next/link';
import Breadcrumb from '../Components/Breadcrumb';




export default function Page({ product }) {
    const { addToCart } = useCart();

    const [products, setProducts] = useState([]);
    let url = "https://fakestoreapi.com/products?limit=21";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);


    return (
        <div>
            <div className='m-6 h-[30rem] content-center top-20 p-8'>
                <h1 className='text-8xl py-8'>All Products</h1>
                <p className='text-4xl'>Here's a list of all available products:</p>
                <Breadcrumb />
            </div>

            <div className="grid grid-cols-3 m-4 gap-4">
                {products.map(product => (
                    <div key={product.id}>
                        <div className=" flex flex-col items-center justify-center h-[50vh] p-10">
                            <img className="w-[20vw] h-[30vh] object-cover" src="/shirt1.webp" alt={product.title} />
                            <div className="text-left mt-4">
                                <Link href="./Products/ProductInfo">{product.title}</Link>
                                <p>{product.Category}</p>
                                <p>Price: {product.price.toFixed(2)}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

