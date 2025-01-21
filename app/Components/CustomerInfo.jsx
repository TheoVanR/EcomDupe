"use client";

import React from 'react';
import { useCustomer } from '../Providers/Customer';

const CustomerInfo = () => {
    const { customer } = useCustomer();

    return (
        <div className="customer-info">
            {customer.isLoggedIn ? (
                <div>
                    <p>Name: {customer.name} {customer.lastname}</p>
                    <p>Email: {customer.email}</p>
                    <p>Address: {customer.address}</p>
                    <p>City: {customer.city}</p>
                    <p>Postal Code: {customer.postalCode}</p>
                </div>
            ) : (
                <p>Please log in to see your account information.</p>
            )}
        </div>
    );
};

export default CustomerInfo;
