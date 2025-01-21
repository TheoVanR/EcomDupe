"use client";
import CartBtn from "../Components/CartBtn";

import Link from "next/link";
import { useEffect, useState } from "react";

async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products?limit=21");
    const data = await res.json();
    return data;
}

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const data = await fetchProducts();
            setProducts(data);
        }
        getProducts();
    }, []);

    let id = 3;

    return (
        <div className="grid grid-cols-3 m-4 gap-4">


            <div className="flex flex-col items-start justify-start">
                <div className="p-4 border shadow-md w-full">
                    <div className="flex justify-center">
                        <img
                            className="w-[20vw] h-[30vh] object-cover"
                            src="/shirt1.webp"

                        />
                    </div>

                    <div className="p-2 text-left">
                        <p


                            className="font-medium"
                        >
                            Långt jävl namn
                        </p>
                    </div>
                    <div className="p-2 text-left">
                        <p className="text-base">$Long ass name</p>
                    </div>

                    <div className="p-2 text-left">
                        <CartBtn />

                    </div>
                </div>
                <div className="p-4 border shadow-md w-full">
                    <div className="flex justify-center">
                        <img
                            className="w-[20vw] h-[30vh] object-cover"
                            src="/shirt1.webp"

                        />
                    </div>

                    <div className="p-2 text-left">
                        <p


                            className="font-medium"
                        >
                            Långt jävl namn
                        </p>
                    </div>
                    <div className="p-2 text-left">
                        <p className="text-base">$Long ass name</p>
                    </div>

                    <div className="p-2 text-left">
                        <CartBtn />

                    </div>
                </div>

            </div>
        </div>
    );
}
