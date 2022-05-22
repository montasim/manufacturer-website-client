import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../../Components/MainButton';

const Product = ({ item }) => {
    const { _id, name, description, supplierName, price, stock, img } = item;

    return (
        <Link
            to='/purchase'
            className='block'
        >
            <div className='aspect-w-1 aspect-h-1'>
                <img
                    loading='lazy'
                    alt='Simple Watch'
                    className='object-cover rounded'
                    src={img}
                />
            </div>

            <div className='mt-2 p-2'>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-sm text-gray-700'>${price}</p>
                    <p className='text-sm text-gray-700'>Q {stock}</p>
                </div>

                <h5 className='font-medium mt-2'>{name?.length > 25 ? name.slice(0, 25) + ' ...' : name}</h5>

                <p className='mt-1 text-sm'>{supplierName}</p>

                <p className='mt-3'>{description?.length > 25 ? description.slice(0, 60) + ' ...' : description}</p>

                <p className='mt-1 text-sm text-gray-700'>Minimum Order: {10}</p>

                <MainButton design={'btn btn-sm btn-secondary text-white text-sm capitalize mt-5'} text={'Buy Now'} />
            </div>
        </Link>
    );
};

export default Product;