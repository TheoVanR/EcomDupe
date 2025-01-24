"use client";

import CartBtn from "@/app/Components/CartBtn";
import Logo from "@/app/Components/Logo";
import { useProducts } from "@/app/Providers/Product";

export default function ProductPage({ params }) {
    const { products } = useProducts(); // Fetch products from context
    const id = Number(params.Id); // Use the correct case for `Id`

    // Find the product based on the ID
    const product = products.find((product) => product.id === id);

    // Handle case where the product is not found
    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl font-bold">Product not found.</p>
            </div>
        );
    }

    const { title, price } = product;

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <Logo />
                <img
                    className="object-cover"
                    src={"/shirt1.webp"} // Replace with product.image if available
                    alt={title || "Product Image"}
                />
                <div className="flex flex-col items-left justify-center h-[50vh] p-4">
                    <div className="my-[14rem]"></div>
                    <div className="p-2">
                        <h2 className="font-medium"> {title}</h2>
                    </div>
                    <div className="p-2">
                        <p className="text-base">Price: ${price}</p>
                    </div>
                    <CartBtn id={id} title={title} price={price} />
                </div>
            </div>
            <div className="h-[10rem]"></div>
        </div>
    );
}
