import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    return (
        <section>
            <div className='max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch'>
                    <div className='flex items-center p-8 bg-gray-100 rounded'>
                        <div className='mx-auto text-center lg:text-left'>
                            <h2 className='text-4xl font-bold text-secondary'>
                                Products
                            </h2>

                            <p className='mt-4 text-sm text-gray-700 max-w-[45ch]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cupiditate mollitia saepe vitae libero nobis.
                            </p>

                            <Link
                                to='/collections/watches'
                                className='inline-block px-6 py-3 mt-6 text-sm text-white bg-gradient-to-r from-secondary to-primary'
                            >
                                View the Range
                            </Link>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12'>
                        <Product />

                        <Link
                            to='/product/simple-watch'
                            className='block'
                        >
                            <div className='aspect-w-1 aspect-h-1'>
                                <img
                                    loading='lazy'
                                    alt='Simple Watch'
                                    className='object-cover rounded'
                                    src='https://images.unsplash.com/photo-1523275335684-37898b6baf30'
                                />
                            </div>

                            <div className='mt-2'>
                                <h5 className='font-medium'>
                                    Simple Watch
                                </h5>

                                <p className='mt-1 text-sm text-gray-700'>
                                    $150
                                </p>
                            </div>
                        </Link>

                        <Link
                            to='/product/simple-watch'
                            className='block'
                        >
                            <div className='aspect-w-1 aspect-h-1'>
                                <img
                                    loading='lazy'
                                    alt='Simple Watch'
                                    className='object-cover rounded'
                                    src='https://images.unsplash.com/photo-1523275335684-37898b6baf30'
                                />
                            </div>

                            <div className='mt-2'>
                                <h5 className='font-medium'>
                                    Simple Watch
                                </h5>

                                <p className='mt-1 text-sm text-gray-700'>
                                    $150
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;