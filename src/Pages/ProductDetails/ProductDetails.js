import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { MdOutlineBrandingWatermark, MdOutlineLocalShipping } from 'react-icons/md';
import { AiOutlineDollar, AiOutlineStock } from 'react-icons/ai';
import { ImPriceTag } from 'react-icons/im';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.Init';

const ProductDetails = () => {
    const _id = useParams();
    const [product, setProduct] = useState([]);
    let location = useLocation();

    <Navigate state={{ from: location }} replace />

    useEffect(() => {
        fetch(`https://tools-manufacturer-server.herokuapp.com/products/${_id?.id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product]);

    const { productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, minOrder } = product;
    const [user] = useAuthState(auth);
    const email = user?.email;

    const addToCart = (_id) => {

        const item = { productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, minOrder, email };

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
        <div className='d-block mx-auto my-12 p-12'>

            <h2 className="text-2xl font-bold">Details Of {productName}</h2>

            <div className="container mt-16 px-6 mx-auto">
                <section className="text-gray-800 text-center md:text-left">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                <img src={productImg} alt="Trendy Pants and Shoes"
                                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12">
                                    <h2 className="text-3xl font-bold pb-2">{productName}</h2>
                                    <h4 className='text-xl pb-2'> Supplier: {productSellerName}</h4>
                                    <p className="text-gray-500 mb-6 pb-2">
                                        {[productDescription]}
                                    </p>
                                    <div className="flex flex-wrap mb-6">
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <MdOutlineBrandingWatermark className='mr-3' /> Category: {productCategory}
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <ImPriceTag className='mr-3' />
                                                Unit Price: ${productPrice}
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <AiOutlineStock className='mr-3' />
                                                In Stock: {productInStock}
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <AiOutlineDollar className='mr-3' />
                                                Total Price: {productInStock * productPrice}
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <MdOutlineLocalShipping className='mr-3' />
                                                Min Order: {3}
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => addToCart(_id)} type="button"
                                        className="inline-block px-7 py-3 bg-secondary text-white font-medium text-sm leading-snug uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default ProductDetails;