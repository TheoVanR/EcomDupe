import React, { useState } from 'react';
import Link from 'next/link';

const Shop = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev); // Toggle modal state
    };

    return (
        <>
            <a onClick={toggleModal} className="cursor-pointer px-8 text-center">
                Shop
            </a>

            {/* Modal */}
            {isModalOpen && (
                <div className='z-50  relative'>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black opacity-20 z-40"
                        aria-hidden="true"

                    />

                    {/* Modal Content */}
                    <div
                        className="fixed top-0 right-0 w-2/5 h-full bg-white shadow-lg z-50 p-6 flex flex-col"
                        aria-modal="true"
                        role="dialog"
                    >
                        <h1 className="text-4xl text-neutral mb-6">Shop</h1>
                        <ul className="flex flex-col space-y-4 text-neutral">
                            <li onClick={toggleModal} className="text-2xl text-neutral">
                                <Link href="/Products">Products</Link>
                            </li>
                            <li onClick={toggleModal} className="text-2xl text-neutral">
                                <Link href="/">Home</Link>
                            </li>
                        </ul>
                        <button
                            onClick={toggleModal}
                            className="text-neutral text-xs bg-gray-100 px-6 py-2 rounded-full mt-auto self-end"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Shop;
