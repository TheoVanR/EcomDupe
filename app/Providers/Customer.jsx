"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
    const [customer, setCustomer] = useState({
        email: '',
        name: '',
        lastname: '',
        password: '',
        address: '',
        city: '',
        postalCode: '',
        isLoggedIn: false,
    });

    // Load customer data from cookies if available
    useEffect(() => {
        const storedCustomer = Cookies.get('customer');
        if (storedCustomer) {
            setCustomer(JSON.parse(storedCustomer));
        }
    }, []);

    // Update cookie whenever customer state changes
    useEffect(() => {
        if (customer.isLoggedIn) {
            Cookies.set('customer', JSON.stringify(customer), { expires: 1 });
        } else {
            Cookies.remove('customer');
        }
    }, [customer]);

    const validateUserDetails = (userDetails) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{7,}$/;

        const isEmailValid = emailRegex.test(userDetails.email);
        const isPasswordValid = passwordRegex.test(userDetails.password);

        return isEmailValid && isPasswordValid;
    };

    const createUser = (userDetails) => {
        if (!validateUserDetails(userDetails)) {
            alert('Invalid email or password');
            return;
        }
        else {
            alert('User created successfully');
            setCustomer({
                ...customer,
                ...userDetails,
                isLoggedIn: true,
            });
        }

    };

    const logIn = (userDetails) => {
        if (!validateUserDetails(userDetails)) {
            alert('Invalid email or password');
            return;
        } else {
            alert('Logged in successfully');
            setCustomer((prevCustomer) => ({
                ...prevCustomer,
                ...userDetails,
                isLoggedIn: true,
            }));
        }



    };

    const logOut = () => {
        setCustomer({
            email: '',
            name: '',
            lastname: '',
            password: '',
            address: '',
            city: '',
            postalCode: '',
            isLoggedIn: false,
        });
        Cookies.remove('customer');
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
