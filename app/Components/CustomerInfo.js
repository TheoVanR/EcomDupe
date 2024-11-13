"use client";

import React from 'react';
import { useCustomer } from '../CustomerContext';

const CustomerInfo = () => {
    const { customer } = useCustomer();

    return (
        <div className="customer-info">
            {customer.isLoggedIn ? (
                <div>
                    <h2>Welcome, {customer.name} {customer.lastname}!</h2>
                    <p>Email: {customer.email}</p>
                    <p>Address: {customer.address}</p>
                    <p>Postal Number: {customer.postalNumber}</p>
                </div>
            ) : (
                <p>Please log in to see your account information.</p>
            )}
        </div>
    );
};

export default CustomerInfo;
