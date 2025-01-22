"use client";

import Breadcrumb from '../Components/Breadcrumb';
import ProductCard from '../Components/ProductCard';
import Logo from '../Components/Logo';
import { useProducts } from '../Providers/Product';

export default function Page() {
    const { products } = useProducts(); // Access products from context

    if (!products || products.length === 0) {
        // Show a loading or empty state if products are not yet available
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl">Loading products...</p>
            </div>
        );
    }

    return (
        <div>
            <Logo colorWhite={false} />

            <div className="m-6 h-[30rem] content-center top-20 p-8">
                <h1 className="text-8xl py-8">All Products</h1>
                <p className="text-4xl">Here's a list of all available products:</p>
                <Breadcrumb />
            </div>

            <div className="grid grid-cols-3 gap-4 m-4">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col items-start justify-start">
                        <ProductCard id={product.id} title={product.title} price={product.price} />
                    </div>
                ))}
            </div>
        </div>
    );
}
