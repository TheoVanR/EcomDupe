// components/Header.js
"use client";

import Cart from './Cart';
import Validate from './Validate';
import Shop from './Shop';

const Header = () => {

    return (
        <header className="fixed top-8 w-full z-30">
            <div className="flex items-center justify-end px-8 py-4">
                <nav className="flex items-center py-4 w-1/4 rounded-full text-slate-950 bg-gray-100">
                    <Shop />
                    <Validate />
                    <Cart />
                </nav>
            </div>
        </header>
    );
};

export default Header;
