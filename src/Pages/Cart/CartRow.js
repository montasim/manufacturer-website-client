import React from 'react';
import { toast } from 'react-toastify';

const CartRow = ({ index, cart }) => {
    const { _id, name, category, supplierName, img, price, minOrder, maxOrder, inStock, orderdQuantity } = cart;

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
                                <img className='w-20' src={img} alt="" />
                                <p className='ml-4'>{name} deleted from cart.</p>
                            </div>
                        );
                    }
                })
        }
    };


    return (
        <li className="flex items-center justify-between py-4">
            <div className="flex items-start">
                <img
                    className="flex-shrink-0 object-cover w-32 h-32 rounded-lg"
                    src={img}
                    alt=""
                />

                <div className="ml-4">
                    <p className="text-sm">{name}</p>
                    <p className='text-xs'>{supplierName}</p>

                    <dl className="mt-2 space-y-1 text-xs text-gray-500">
                        <div>
                            <dt className="inline">Min Order: </dt>
                            <dd className="inline">{minOrder}</dd>
                        </div>

                        <div>
                            <dt className="inline">Max Order: </dt>
                            <dd className="inline">{maxOrder}</dd>
                        </div>

                        <div>
                            <dt className="inline">In Stock: </dt>
                            <dd className="inline">{inStock}</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div>
                <p className="text-sm">
                    ${price}
                    <small className="text-gray-500"> X {orderdQuantity}</small>
                </p>
            </div>

            <button onClick={() => deleteFromCart(_id)}
                class="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                type="button"
            >
                <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </li>
    );
};

export default CartRow;