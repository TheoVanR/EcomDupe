"use client";

import Link from "next/link";

const Logo = ({ colorWhite, isHomePage }) => {
    return (
        <div className="mx-8 z-50 absolute top-8">
            <Link
                id="logo-text"
                href="/"
                className={
                    colorWhite || isHomePage ? "text-white" : "text-slate-950"
                }
            >
                ETON
            </Link>
        </div>
    );
};

export default Logo;
