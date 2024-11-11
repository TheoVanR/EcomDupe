"use client";
import React, { createContext, useState, useContext } from 'react';

// Create the context
const CustomerContext = createContext();

// Create a provider component
const CustomerProvider = ({ children }) => {
    const [customer, setCustomer] = useState({
        email: '',
        name: '',
        lastname: '',
        password: '',
        address: '',
        postalNumber: '',
        isLoggedIn: false,
    });

    const createUser = (userDetails) => {
        setCustomer({
            ...customer,
            ...userDetails,
            isLoggedIn: true,
        });
    };

    const logIn = (userDetails) => {
        setCustomer({
            ...customer,
            ...userDetails,
            isLoggedIn: true,
        });
    };

    const logOut = () => {
        setCustomer({
            email: '',
            name: '',
            lastName: '',
            password: '',
            address: '',
            postalNumber: '',
            isLoggedIn: false,
        });
    };

    return (
        <CustomerContext.Provider value={{ customer, createUser, logOut, logIn }}>
            {children}
        </CustomerContext.Provider>
    );
};

export { CustomerContext, CustomerProvider };

export const useCustomer = () => {
    return useContext(CustomerContext);
};
