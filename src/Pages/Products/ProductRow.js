import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.Init';
import { BsCartCheck } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';


const ProductRow = ({ index, product }) => {
    const { _id, productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, minOrder } = product;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    let email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            email = profile?.email;
        });
    };

    const addToCart = (_id) => {

        const item = { productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, email };

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
                toast.success(
                    <div class="flex items-center space-x-1">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src={productImg} alt={productName + 'img'} />
                            </div>
                        </div>
                        <div>
                            <div class="font-semibold">{productName}</div>
                            <div class="text-sm opacity-50">Added to Cart</div>
                        </div>
                    </div>
                );
            });
    };

    return (
        <div
            class="block p-4 rounded-lg shadow-lg shadow-indigo-100 border border-gray-400"
        >
            <img
                alt={productName + 'image'}
                src={productImg}
                class="object-cover w-60 h-56 rounded-md"
            />

            <div class="mt-4">
                <div>
                    <p className="text-sm text-gray-400">${productPrice}.00</p>
                    <p className="font-medium">{productName}</p>
                </div>

                <dl class="flex items-center mt-6 space-x-8 text-xs">
                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg
                            class="w-4 h-4 text-secondary"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Min Order
                            </dt>

                            <dd class="font-medium">
                                {minOrder}
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg
                            class="w-4 h-4 text-secondary"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Available
                            </dt>

                            <dd class="font-medium">
                                {productInStock}
                            </dd>
                        </div>
                    </div>
                </dl>

                <div className="flex justify-between items-center mt-6">
                    <button onClick={() => navigate(`/products/${_id}`)} class="btn btn-secondary btn-sm text-white">Details</button>
                    <BsCartCheck onClick={() => addToCart(_id)} className='text-2xl text-primary' />
                </div>
            </div>
        </div>
    );
};

export default ProductRow;