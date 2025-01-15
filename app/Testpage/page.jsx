"use client"
import Breadcrumb from '../Components/Breadcrumb';
import ProductCard from '../Components/ProductCard';
import { useEffect, useState } from 'react';

async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=21');
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

    return (
        <div>
            <div className='m-6 h-[30rem] content-center top-20 p-8'>
                <h1 className='text-8xl py-8'>All Products</h1>
                <p className='text-4xl'>Here's a list of all available products:</p>
                <Breadcrumb />
            </div>

            <div className="grid grid-cols-3 m-4 gap-4">
                {products.map(({ id, title, price}) => (
                  <div className="flex flex-col items-center justify-center h-[50vh] p-4" >
                        
                      <ProductCard title={title} price={price}  />
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
