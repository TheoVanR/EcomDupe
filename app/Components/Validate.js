"use client";
import React, { useState } from 'react';
import { useCustomer } from '../CustomerContext';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Validate = () => {
    const { logIn, logOut, customer } = useCustomer();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        logIn({ email, password });
    };

    return (
        <>
            {customer.isLoggedIn ? (
                <>
                    <button onClick={toggleModal}><FontAwesomeIcon icon={faUser} /></button>

                    {isModalOpen && (
                        <div
                            className="fixed py-12 px-6 top-0 right-0 transform -translate-y-1/2 w-1/3 h-full bg-white z-50 flex items-start justify-left opacity-100 animate-bounce-in"
                            aria-modal="true"
                            role="dialog"
                        >
                            <button onClick={toggleModal}><FontAwesomeIcon icon={faUser} /></button>
                            <p>Welcome {customer.email}</p>
                            <button onClick={logOut}>Log Out</button>
                            <button
                                onClick={toggleModal}
                                className="text-neutral text-xs bg-gray-100 px-6 py-2 rounded-full fixed bottom-10 right-6"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <button onClick={toggleModal}><FontAwesomeIcon icon={faUser} /></button>

                    {isModalOpen && (
                        <div
                            className="fixed py-12 px-6 top-0 right-0 transform -translate-y-1/2 w-1/3 h-full bg-white z-50 flex items-start justify-left opacity-100 animate-bounce-in"
                            aria-modal="true"
                            role="dialog"
                        >
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button type="submit">Log In</button>
                            </form>
                            <button onClick={toggleModal} className="text-neutral text-xs bg-gray-100 px-6 py-2 rounded-full fixed bottom-10 right-6">
                                Close
                            </button>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Validate;
