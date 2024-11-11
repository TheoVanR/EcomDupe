"use client";
import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import Link from 'next/link';




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
                <nav className="flex py-2 " aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-xs font-medium text-neutral ">
                                Business Shirts
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-2 h-2 text-neutral mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#" className="ms-1 text-xs font-medium text-neutral ">Solid Shirts</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-2 h-2 text-neutral mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-xs font-medium text-neutral md:ms-2 ">Twill</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="grid grid-cols-3 m-4 gap-4">
                {products.map(product => (
                    <div key={product.id}>
                        <div className=" flex flex-col items-center justify-center h-[50vh] p-10">
                            <img className="w-[20vw] h-[30vh] object-cover" src="/shirt1.webp" alt={product.title} />
                            <div className="text-left mt-4">
                                <Link href="./Products/ProductInfo">{product.title}</Link>
                                <p>{product.price.toFixed(2)}</p>
                                <button onClick={() => addToCart(product)}>Add to cart</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

