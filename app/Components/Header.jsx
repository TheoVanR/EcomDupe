// components/Header.js
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cart from './Cart';
import Validate from './Validate';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const [isHomePage, setIsHomePage] = useState(true);

    useEffect(() => {
        setIsHomePage(router.pathname === '/');
    }, [router.pathname]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="fixed top-8 w-full z-50">
            <div className="flex items-center justify-end px-8 py-4">

                {/* Aligning the nav to the right */}
                <nav className="flex items-center py-4 w-1/4 rounded-full text-slate-950 bg-gray-100">
                    <a onClick={toggleModal} className="cursor-pointer px-[2rem] text-center">Shop</a>
                    <div className="px-[2rem]">
                        <Validate />
                    </div>

                    <div className="px-[2rem]">
                        <Cart />

                    </div>
                </nav>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-20 z-60" // Full screen transparent overlay with 20% opacity
                        aria-modal="true"
                        role="dialog"
                    >

                    </div>

                    <div
                        className="fixed py-12 px-6 top-0 right-0 transform shadow -translate-y-1/2 w-2/5 h-full bg-white z-51 flex items-start opacity-100 animate-bounce-in"
                        aria-modal="true"
                        role="dialog"
                    >
                        <ul className="flex flex-col text-natural space-y-4 list-none">
                            <h1 className="text-4xl text-neutral">Shop</h1>
                            <li onClick={toggleModal} className="text-2xl text-neutral">
                                <Link href="/Products">Products</Link>
                            </li>
                            <li onClick={toggleModal} className="text-2xl text-neutral">
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="text-neutral text-xs bg-gray-100 px-6 py-2 rounded-full fixed bottom-10 right-6"
                                >
                                    Close
                                </button>
                            </li>
                        </ul>
                    </div>


                </>
            )}

        </header>
    );
};

export default Header;
