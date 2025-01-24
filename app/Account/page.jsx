"use client";
import React, { useState } from 'react';
import { useCustomer } from '../Providers/Customer';

const AccountPage = () => {
    const { customer, logIn } = useCustomer(); // Assuming logIn is used to update customer details in context

    // Local state for form inputs
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update customer details in context
        logIn({ name, lastname, address, city, postalCode, email, password });
        alert('User details updated successfully');
    };

    return (
        <div className="h-full">
            <img src="signature_club_bg.jpg" alt="" />
            <div className="absolute top-0 p-4 rounded-sm bg-slate-100 w-[30rem]">
                <h1 className="text-xl font-bold mb-4">Account Details</h1>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={customer.name || "Enter your name"}
                            className="p-2 border rounded"
                        />
                    </div>

                    {/* Lastname Field */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Lastname:</label>
                        <input
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder={customer.lastname || "Enter your lastname"}
                            className="p-2 border rounded"
                        />
                    </div>

                    {/* Address Field */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Address:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder={customer.address || "Enter your address"}
                            className="p-2 border rounded"
                        />
                    </div>

                    {/* City Field */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">City:</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder={customer.city || "Enter your city"}
                            className="p-2 border rounded"
                        />
                    </div>

                    {/* Postal Code Field */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Postal Code:</label>
                        <input
                            type="text"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            placeholder={customer.postalNumber || "Enter your postal code"}
                            className="p-2 border rounded"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={customer.email || "Enter your email"}
                            className="p-2 border rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={"Enter your password"}
                            className="p-2 border rounded"
                        />
                    </div>


                    {/* Save Changes Button */}
                    <button
                        className="bg-slate-950 p-2 rounded-full text-slate-200 w-full"
                        type="submit"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccountPage;
