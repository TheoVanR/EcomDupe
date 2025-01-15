import React from 'react';

const Breadcrumb = () => (
    <nav className="flex py-2 " aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-xs font-medium text-neutral ">
                    Business Shirts
                </a>
            </li>
            <li>
                <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-2 h-2 text-neutral mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <a href="#" className="ms-1 text-xs font-medium text-neutral ">Solid Shirts</a>
                </div>
            </li>
            <li aria-current="page">
                <div className="flex items-center">
                    <svg className="rtl:rotate-180 w-2 h-2 text-neutral mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="ms-1 text-xs font-medium text-neutral md:ms-2 ">Twill</span>
                </div>
            </li>
        </ol>
    </nav>
);

export default Breadcrumb;