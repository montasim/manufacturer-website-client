import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <section>
            <div className='max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch'>
                    <div className='flex items-center p-8 bg-gray-100 rounded'>
                        <div className='mx-auto text-center lg:text-left'>
                            <h2 className='text-4xl font-bold text-secondary'>
                                Our Products
                            </h2>

                            <p className='mt-4 text-sm text-gray-700 max-w-[45ch]'>
                                Diagnostics, Inspection & Locating, Pressing, Drain Cleaning, Threading & Pipe Fabrication, Wrenches & Tubing Tools, Utility & Electricians Tools, General Purpose & Hand Tools, Wet/Dry Vacs, Power Tools
                            </p>

                            <Link
                                to='/products'
                                className='inline-block px-6 py-3 mt-6 text-sm text-white bg-gradient-to-r from-secondary to-primary'
                            >
                                All Products
                            </Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12'>
                        {
                            products?.slice(-3).map((item, index) => <Product key={index} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;