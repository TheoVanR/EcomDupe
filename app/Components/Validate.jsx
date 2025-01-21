"use client";

import React, { useState } from 'react';
import { useCustomer } from '../Providers/Customer';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomerInfo from './CustomerInfo';
import Link from 'next/link';

const Validate = () => {
    const { logIn, logOut, customer } = useCustomer();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Cookie setting function
    function setCookie(name, value, exdays) {
        const date = new Date();
        date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/;`;
    }

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev); // Toggle modal state
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        logIn({ email, password });
        setCookie('customerEmail', email, 7);  // Optionally save email in cookie
        toggleModal(); // Close modal after login
    };

    return (
        <>
            {customer.isLoggedIn ? (
                <>
                    <button onClick={toggleModal}><FontAwesomeIcon icon={faUser} /></button>

                    {isModalOpen && (
                        <>
                            <div
                                className="fixed inset-0 bg-black opacity-20 z-60" // Overlay
                                aria-modal="true"
                                role="dialog"
                            />
                            <div
                                className="fixed py-12 px-6 shadow top-0 right-0 transform -translate-y-1/2 w-2/5 h-full bg-white z-50 flex opacity-100 animate-bounce-in"
                                aria-modal="true"
                                role="dialog"
                            >
                                <div className='w-full'>
                                    <div className='h-[50%]'>
                                        <CustomerInfo />
                                    </div>
                                    <div>
                                        <Link onClick={toggleModal} className="m-8" href="/Account" >Edit details</Link>
                                        <button onClick={logOut}>Log Out</button>
                                    </div>
                                    <button
                                        onClick={toggleModal}
                                        className="text-neutral text-xs bg-gray-100 px-6 py-2 rounded-full fixed bottom-10 right-6"
                                    >
                                        X Close
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <>
                    <button onClick={toggleModal}><FontAwesomeIcon icon={faUser} /></button>
                    {isModalOpen && (
                        <>
                            <div
                                className="fixed inset-0 bg-black opacity-20 z-60" // Overlay
                                aria-modal="true"
                                role="dialog"
                            />
                            <div
                                className="fixed top-0 shadow right-0 transform -translate-y-1/2 w-2/5 h-full bg-white z-50 opacity-100 animate-bounce-in"
                                aria-modal="true"
                                role="dialog"
                            >
                                <div className="bg-blue-950 flex justify-center items-center w-full h-[50vh] relative">
                                    <img src="/signature_club_bg.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
                                    <h1 className="text-white relative z-10">The Signature Club</h1>
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <ul className='p-6'>
                                            <li className='p-2 m-2 rounded-md border-2'>
                                                <input
                                                    type="text"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </li>
                                            <li className='p-2 m-2 rounded-md border-2'>
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </li>
                                        </ul>
                                        <div className="absolute w-full bottom-6 px-5 lg:px-10 py-2 bg-surface-100">
                                            <div className='flex justify-center mt-4 items-center w-full desktop-emphasis-l'>
                                                <button
                                                    className="bg-gray-100 rounded-full p-2 w-full text-center"
                                                    type="submit"
                                                >
                                                    Log In
                                                </button>
                                                <button
                                                    onClick={toggleModal}
                                                    className="text-neutral text-xs bg-gray-100 px-4 ml-4 py-3 rounded-full"
                                                >
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Validate;
