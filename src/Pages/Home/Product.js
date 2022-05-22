import React from 'react';

const Product = () => {
    return (
        <a
            href='/product/simple-watch'
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
        </a>
    );
};

export default Product;