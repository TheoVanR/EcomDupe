"use client";
import React, { useState } from 'react';
import { useCustomer } from '../Providers/Customer';

const AccountPage = () => {
    const { customer, logIn } = useCustomer();  // Assuming logIn is used to update customer details in context

    // Local state for form inputs
    const [name, setName] = useState(customer.name || '');
    const [lastname, setLastname] = useState(customer.lastname || '');
    const [address, setAddress] = useState(customer.address || '');
    const [city, setCity] = useState(customer.city || '');
    const [postalCode, setPostalCode] = useState(customer.postalNumber || '');
    const [email, setEmail] = useState(customer.email || '');
    const [password, setPassword] = useState(customer.password || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update customer details in context
        logIn({ name, lastname, address, city, postalCode, email, password });
        alert('User details updated successfully');
    };

    return (
        <div className="h-full m-10">
            <div className="h-[10rem]"></div>
            <div className="h-[10rem]">
                <h1>Account Details</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Lastname:</label>
                    <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <label>City:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <label>Postal Code:</label>
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default AccountPage;