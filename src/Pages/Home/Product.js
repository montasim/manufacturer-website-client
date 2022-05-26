import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Hooks/Firebase.Init';

const Product = ({ item }) => {
    const { _id, productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, minOrder } = item;
    const [user] = useAuthState(auth);
    const email = user?.email;

    const addToCart = (_id) => {
        const orderedQuantity = minOrder;

        if (orderedQuantity <= productInStock) {
            const item = { productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, orderedQuantity, minOrder, email };

            // send data to server
            fetch('https://tools-manufacturer-server.herokuapp.com/add-cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(data => {
                });
        };
    };

    return (
        <Link
            to='/cart'
            className='block'
        >
            <div className='aspect-w-1 aspect-h-1'>
                <img
                    loading='lazy'
                    alt='Simple Watch'
                    className='object-cover rounded'
                    src={productImg}
                />
            </div>

            <div className='mt-2 p-2'>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-sm text-gray-700'>${productPrice}</p>
                    <p className='text-sm text-gray-700'>Q {productInStock}</p>
                </div>

                <h5 className='font-medium mt-2'>{productName?.length > 25 ? productName.slice(0, 25) + ' ...' : productName}</h5>

                <p className='mt-1 text-sm'>{productName}</p>

                <p className='mt-3'>{productDescription?.length > 25 ? productDescription.slice(0, 60) + ' ...' : productDescription}</p>

                <p className='mt-1 text-sm text-gray-700'>Minimum Order: {minOrder}</p>

                <button onClick={() => addToCart(_id)} className='btn btn-sm btn-secondary text-white text-sm capitalize mt-5'>Buy Now</button>
            </div>
        </Link>
    );
};

export default Product;