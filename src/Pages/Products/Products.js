import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return (
        <div>
            <div className='flex items-center p-8  rounded'>
                <div className='mx-auto text-center mt-10 sm:mt-4'>
                    <h2 className='text-4xl font-bold text-secondary'>
                        Our Products
                    </h2>

                    <p className='mt-4 text-sm text-gray-700 max-w-[85ch]'>
                        Diagnostics, Inspection & Locating, Pressing, Drain Cleaning, Threading & Pipe Fabrication, Wrenches & Tubing Tools, Utility & Electricians Tools, General Purpose & Hand Tools, Wet/Dry Vacs, Power Tools
                    </p>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8 place-items-center my-20">
                {
                    products.map((product, index) => <ProductRow key={index} product={product} index={index} />)
                }
            </div>
        </div>
    );
};

export default Products;