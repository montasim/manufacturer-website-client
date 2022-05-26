import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CartRow = ({ index, cart }) => {
    const { _id, productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, orderedQuantity, minOrder } = cart;

    const [userOrderedQuantity, setUserOrderedQuantity] = useState(orderedQuantity);

    console.log(`you have updated your query to ${userOrderedQuantity}`);

    if (userOrderedQuantity < minOrder) {
        toast.error('Ordered quantity is less than min order');
    };

    if (userOrderedQuantity > productInStock) {
        toast.error('Ordered quantity can not be more than stock');
    };

    const deleteFromCart = _id => {
        const confirm = window.confirm('Are You Sure?');

        if (confirm) {
            const url = `https://tools-manufacturer-server.herokuapp.com/delete-cart/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(
                            <div className='flex'>
                                <img className='w-20' src={productImg} alt="" />
                                <p className='ml-4'>{productName} deleted from cart.</p>
                            </div>
                        );
                    };
                });
        };
    };

    return (
        <li className="flex items-center justify-between py-4">
            <div className="flex items-start">
                <img
                    className="flex-shrink-0 object-cover w-32 h-32 rounded-lg"
                    src={productImg}
                    alt=""
                />

                <div className="ml-4">
                    <p className="text-sm">{productName}</p>
                    <p className='text-xs'>{productSellerName}</p>

                    <dl className="mt-2 space-y-1 text-xs text-gray-500">
                        <div>
                            <dt className="inline">Min Order: </dt>
                            <dd className="inline">{userOrderedQuantity}</dd>
                        </div>

                        <div>
                            <dt className="inline">In Stock: </dt>
                            <dd className="inline">{productInStock}</dd>
                        </div>

                        <form className='mt-4'>
                            <input onChange={e => setUserOrderedQuantity(e.target.value)} type="number" value={userOrderedQuantity} className="input input-xs input-bordered input-secondary w-20" defaultValue={minOrder} required />
                        </form>
                    </dl>
                </div>
            </div>

            <div>
                <p className="text-sm">
                    ${productPrice}
                    <small className="text-gray-500"> X {userOrderedQuantity}</small>
                </p>
            </div>

            <button onClick={() => deleteFromCart(_id)}
                className="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                type="button"
            >
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </li>
    );
};

export default CartRow;