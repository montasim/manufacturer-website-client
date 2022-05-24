import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import MainButton from '../../Components/MainButton';
import auth from '../../Hooks/Firebase.Init';

const Product = ({ item }) => {
    const { _id, name, category, supplierName, img, description, price, inStock, totalSold, minOrder, maxOrder } = item;
    const [user] = useAuthState(auth);

    let email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            email = profile?.email;
        });
    };

    const addToCart = (_id) => {

        const item = { name, category, supplierName, img, description, price, inStock, totalSold, email };

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
                    src={img}
                />
            </div>

            <div className='mt-2 p-2'>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-sm text-gray-700'>${price}</p>
                    <p className='text-sm text-gray-700'>Q {inStock}</p>
                </div>

                <h5 className='font-medium mt-2'>{name?.length > 25 ? name.slice(0, 25) + ' ...' : name}</h5>

                <p className='mt-1 text-sm'>{supplierName}</p>

                <p className='mt-3'>{description?.length > 25 ? description.slice(0, 60) + ' ...' : description}</p>

                <p className='mt-1 text-sm text-gray-700'>Minimum Order: {10}</p>

                <button onClick={() => addToCart(_id)} className='btn btn-sm btn-secondary text-white text-sm capitalize mt-5'>Buy Now</button>
            </div>
        </Link>
    );
};

export default Product;