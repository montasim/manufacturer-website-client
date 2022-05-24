import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.Init';

const ProductRow = ({ index, product }) => {
    const { _id, name, category, supplierName, img, description, price, inStock, totalSold } = product;
    const navigate = useNavigate();
    const productId = useParams();
    const [user] = useAuthState(auth);

    let email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            email = profile?.email;
        });
    }

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
                toast.success(
                    <div class="flex items-center space-x-1">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src={img} alt={name + 'img'} />
                            </div>
                        </div>
                        <div>
                            <div class="font-semibold">{name}</div>
                            <div class="text-sm opacity-50">Added to Cart</div>
                        </div>
                    </div>
                );
            });
    }

    return (
        <div
            class="block p-4 rounded-lg shadow-sm shadow-indigo-100"
        >
            <img
                alt="123 Wallaby Avenue, Park Road"
                src={img}
                class="object-cover w-full h-56 rounded-md"
            />

            <div class="mt-2">
                <dl>
                    <div>
                        <dt class="sr-only">
                            Price
                        </dt>

                        <dd class="text-sm text-gray-500">
                            ${price}
                        </dd>
                    </div>

                    <div>
                        <dt class="sr-only">
                            Address
                        </dt>

                        <dd class="font-medium">
                            {name}
                        </dd>
                    </div>
                </dl>

                <dl class="flex items-center mt-6 space-x-8 text-xs">
                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg
                            class="w-4 h-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Parking
                            </dt>

                            <dd class="font-medium">
                                2 spaces
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg
                            class="w-4 h-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Bathroom
                            </dt>

                            <dd class="font-medium">
                                2 rooms
                            </dd>
                        </div>
                    </div>

                    <div class="sm:inline-flex sm:items-center sm:shrink-0">
                        <svg
                            class="w-4 h-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>

                        <div class="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt class="text-gray-500">
                                Bedroom
                            </dt>

                            <dd class="font-medium">
                                4 rooms
                            </dd>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default ProductRow;