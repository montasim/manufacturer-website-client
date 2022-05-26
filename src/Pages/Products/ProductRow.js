import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.Init';
import { BsCartCheck } from 'react-icons/bs';
import { MdOutlineDeliveryDining, MdBookmarkBorder } from 'react-icons/md';


const ProductRow = ({ index, product }) => {
    const { _id, productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, minOrder } = product;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user?.email;
    const orderedQuantity = minOrder;

    const addToCart = (_id) => {

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
                toast.success(
                    <div className="flex items-center space-x-1">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={productImg} alt={productName + 'img'} />
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">{productName}</div>
                            <div className="text-sm opacity-50">Added to Cart</div>
                        </div>
                    </div>
                );
            });
    };

    return (
        <div
            className="block p-4 rounded-lg shadow-lg shadow-indigo-100 border border-gray-400"
        >
            <img
                alt={productName + 'image'}
                src={productImg}
                className="object-cover w-60 h-56 rounded-md"
            />

            <div className="mt-4">
                <div>
                    <p className="text-sm text-gray-400">${productPrice}.00</p>
                    <p className="font-medium">{productName}</p>
                </div>

                <dl className="flex items-center mt-6 space-x-8 text-xs">
                    <div className="sm:inline-flex sm:items-center sm:shrink-0">
                        <MdBookmarkBorder className='text-2xl text-secondary' />

                        <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-500">
                                Min Order
                            </dt>

                            <dd className="font-medium">
                                {minOrder}
                            </dd>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:items-center sm:shrink-0">
                        <MdOutlineDeliveryDining className='text-2xl text-secondary' />

                        <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-500">
                                Available
                            </dt>

                            <dd className="font-medium">
                                {productInStock}
                            </dd>
                        </div>
                    </div>
                </dl>

                <div className="flex justify-between items-center mt-6">
                    <button onClick={() => navigate(`/products/${_id}`)} className="btn btn-secondary btn-sm text-white">Details</button>
                    <BsCartCheck onClick={() => addToCart(_id)} className='text-2xl text-primary' />
                </div>
            </div>
        </div>
    );
};

export default ProductRow;