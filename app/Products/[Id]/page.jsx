"use client";

import CartBtn from "@/app/Components/CartBtn";
import Logo from "@/app/Components/Logo";
import { useEffect, useState } from "react";
import { useProducts } from "@/app/Providers/Product";

export default function ProductPage({ params }) {
    const { id } = params; // Get the product ID from the URL
    const { products } = useProducts(); // Fetch products from context
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchedProduct = products.find((p) => p.id === parseInt(id)); // Find product by ID
        setProduct(fetchedProduct || null); // Set product or null if not found
    }, [id, products]);

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl">Product not found.</p>
            </div>
        );
    }

    const { title, price, image } = product;

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <Logo />
                <img className="object-cover" src={image || "/shirt1.webp"} alt={title} />
                <div className="flex flex-col items-left justify-center h-[50vh] p-4">
                    <div className="my-[14rem]"></div>
                    <div className="p-2">
                        <p className="font-medium">{title}</p>
                    </div>
                    <div className="p-2">
                        <p className="text-base">${price}</p>
                    </div>
                    <CartBtn id={id} />
                </div>
            </div>
            <div className="h-[10rem]"></div>
        </div>
    );
}
