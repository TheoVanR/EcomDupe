"use client";
import React, { useState } from 'react';
import { useCustomer } from '../CustomerContext';

const Validate = () => {
    const { logIn } = useCustomer(); // Access logIn function from context
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass user details to the logIn function
        logIn({ email, password });
        closeModal();
    };

    return (
        <>
            <button onClick={openModal}>Log In</button>

            {/* Modal */}
            {isModalOpen && (
                <div className="p-6 m-8 bg-white border  shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="p-2 border-2">
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="p-2 border-2">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <p>Forgot password?</p>
                        <button type="submit" className="rounded-full px-10 bg-gray-400">Log In</button>
                    </form>
                    <button onClick={closeModal} className="mt-4">Close</button>
                </div>
            )}
        </>
    );
};

export default Validate;
