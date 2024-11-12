"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

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
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            ...userDetails,
            isLoggedIn: true,
        }));
    };

    const logOut = () => {
        setCustomer({
            email: '',
            name: '',
            lastname: '',
            password: '',
            address: '',
            postalNumber: '',
            isLoggedIn: false,
        });
    };

    // Debugging: Log customer state whenever it updates
    useEffect(() => {
        console.log("Customer state updated:", customer);
    }, [customer]);

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
