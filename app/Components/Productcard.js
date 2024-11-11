"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon, faLeaf, faIndustry, faCloud } from '@fortawesome/react-fontawesome';

const ProductCard = () => {
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
        <div className='py-6'>


            <nav className="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center text-xs font-medium text-neutral ">

                            Businesskjortor
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-2 h-2 text-neutral mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" class="ms-1 text-xs font-medium text-neutral ">Enfärgade skjortor</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-2 h-2 text-neutral mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-xs font-medium text-neutral md:ms-2 ">Twill</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="p-6 m-8 ">
                <div className='p-2'>
                    <p className="text-2xl font-medium">{product.title}</p>

                </div >

                <div className='p-2'>
                    <p className="text-base">{product.price}</p>

                </div>
                <div className='p-2'>
                    <p className="product-desc">{product.description}</p>

                </div>
                <span>
                    <FontAwesomeIcon icon={faLeaf} />
                </span>
                <span>
                    <FontAwesomeIcon icon={faIndustry} />
                </span>
                <span>
                    <FontAwesomeIcon icon={faCloud} />
                </span>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
            </div>
        </div>

    );
};

export default ProductCard;