"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Cart from './Cart';
import Validate from './Validate';



const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <header>
            <div className=" z-30 absolute top-10 m-[10] left-20  w-20   decoration-none text-neutral">
                <Link className="text-neutral text-4xl" href="/Landing">Eton</Link>
            </div>
            <nav className="sticky top-16 z-50  ">
                <div className="max-w-screen-xl flex-wrap justify-between ">
                    <div className="md:block  absolute px-20  right-10 rounded-full bg-gray-100 py-4" id="navbar-default">
                        <ul className="font-medium flex flex-col md:p-0  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
                            <li>
                                <a onClick={toggleModal} className="cursor-pointer">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral">Journal</a>
                            </li>
                            <Validate />
                            <Cart />
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed py-12 px-6 top-0 right-0 transform -translate-y-1/2 w-1/3 h-full bg-white z-51 flex items-start justify-left opacity-0 animate-bounce-in"
                    aria-modal="true"
                    role="dialog"
                >
                    <ul className="flex flex-col text-natural space-y-4 list-none">
                        <h1 className="text-4xl text-neutral">
                            Shop
                        </h1>
                        <li onClick={toggleModal} className="text-2xl text-neutral">
                            <Link href="/Products" className="">Products</Link>
                        </li>
                        <li onClick={toggleModal} className="text-2xl text-neutral">
                            <Link href="/Landing" >Home</Link>
                        </li>
                        <li onClick={toggleModal} className="text-2xl text-neutral">

                        </li>
                        <li>
                            <button
                                onClick={toggleModal}
                                className="text-natural text-xs bg-gray-100 px-6 py-2 rounded-full fixed bottom-10 right-6"
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

export default Navbar;
