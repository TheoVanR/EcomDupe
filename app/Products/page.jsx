"use client"
import Breadcrumb from '../Components/Breadcrumb';
import ProductCard from '../Components/ProductCard';
import { useEffect } from 'react';
import { useProducts } from '../Providers/Product';
import Logo from '../Components/Logo';

const fakeApI = 'https://fakestoreapi.com/products?limit=21';

async function fetchProducts() {
    const res = await fetch(fakeApI);
    const data = await res.json();
    return data;
}

export default function Page() {
    const { products, setProducts } = useProducts();

    useEffect(() => {
        async function getProducts() {
            const data = await fetchProducts();
            console.log("Fetched products:", data); // Debug log
            setProducts(data);
        }
        getProducts();
    }, [setProducts]);


    return (
        <div>
            <Logo colorWhite={false} />

            <div className='m-6 h-[30rem] content-center top-20 p-8'>
                <h1 className='text-8xl py-8'>All Products</h1>
                <p className='text-4xl'>Here's a list of all available products:</p>
                <Breadcrumb />
            </div>

            <div className="grid grid-cols-3 m-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col items-start justify-start"> {/* Change items-center to items-start */}
                        <ProductCard id={product.id} title={product.title} price={product.price} />
                    </div>
                ))}
            </div>

        </div>
    );
}
