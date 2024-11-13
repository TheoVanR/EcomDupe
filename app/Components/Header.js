"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Cart from './Cart';
import Validate from './Validate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header className="fixed top-8 left-0 w-full z-50  ">
            <div className="flex items-center justify-between px-10 py-4">
                <Link href="/" className="text-white text-4xl">Eton</Link>

                <nav className="flex px-[8rem] py-4 rounded-full text-slate-950 bg-gray-100 space-x-8">
                    <a onClick={toggleModal} className="cursor-pointer ">Shop</a>
                    <Validate />
                    <button>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <Cart />
                </nav>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed py-12 px-6 top-0 right-0 transform -translate-y-1/2 w-1/3 h-full bg-white z-51 flex items-start opacity-100 animate-bounce-in"
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
            )}
        </header>
    );
};

export default Header;
