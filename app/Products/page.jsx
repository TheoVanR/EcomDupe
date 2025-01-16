"use client"
import Breadcrumb from '../Components/Breadcrumb';
import ProductCard from '../Components/ProductCard';
import { useEffect, useState } from 'react';

const fakeApI = 'https://fakestoreapi.com/products?limit=21';
const BlueAPI= 'http://localhost:8080/Product';


async function fetchProducts() {
    const res = await fetch(fakeApI);
    const data = await res.json();
    return data;
}

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const data = await fetchProducts();
            console.log('Fetched products:', data); // Debugging line
            setProducts(data);
        }
        getProducts();
    }, []);

    return (
        <div>
            <div className='m-6 h-[30rem] content-center top-20 p-8'>
                <h1 className='text-8xl py-8'>All Products</h1>
                <p className='text-4xl'>Here's a list of all available products:</p>
                <Breadcrumb />
            </div>

            <div className="grid grid-cols-3 m-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col items-center justify-center h-[50vh] p-4">
                        <ProductCard id={product.id} title={product.title} price={product.price} />
                    </div>
                ))}
            </div>
        </div>
    );
}
