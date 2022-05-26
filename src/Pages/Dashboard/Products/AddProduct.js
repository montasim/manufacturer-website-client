import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Hooks/Firebase.Init';

const AddAProduct = () => {
    const [user] = useAuthState(auth);
    const productAddedToDBAt = new Date();

    const addProduct = event => {
        event.preventDefault();

        const productName = event?.target?.productName?.value;
        const productCategory = event?.target?.productCategory?.value;
        const productSellerName = event?.target?.productSellerName?.value;
        const productImg = event?.target?.productImg?.value;
        const productDescription = event?.target?.productDescription?.value;
        const productPrice = event?.target?.productPrice?.value;
        const productInStock = event?.target?.productInStock?.value;
        const minOrder = event?.target?.minOrder?.value;
        const productAddedBy = user?.email;

        const productDetails = { productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, minOrder, productAddedBy, productAddedToDBAt };

        // send data to server
        fetch('https://tools-manufacturer-server.herokuapp.com/add-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast(
                    <div className='flex'>
                        <img className='w-20' src={productImg} alt="" />
                        <p className='ml-4'>{productName} added to inventory.</p>
                    </div>
                );
            });
    }

    return (
        <div>
            <form onSubmit={addProduct} className='flex h-screen flex-col items-center justify-center'>
                <h2 className='text-2xl text-bold mb-4'>Add A Product Here</h2>

                <input type="text" placeholder="Product Name" className="input input-bordered input-secondary w-full max-w-xl" name='productName' required />

                <input type="number" placeholder="Product Price" className="input input-bordered input-secondary w-full max-w-xl mt-4" name='productPrice' required />

                <div className='flex justify-between my-4'>
                    <input type="text" placeholder="Product Category" className="input input-bordered input-secondary w-full max-w-xl mr-4" name='productCategory' required />

                    <input type="text" placeholder="Product Seller Name" className="input input-bordered input-secondary w-full max-w-xl" name='productSellerName' required />
                </div>

                <div className='flex justify-between'>
                    <input type="number" placeholder="Product Stock" className="input input-bordered input-secondary w-full max-w-xl mr-4" name='productInStock' required />

                    <input type="number" placeholder="Min Order" className="input input-bordered input-secondary w-full max-w-xl" name='minOrder' required />
                </div>

                <input type="text" placeholder="Product Image" className="input input-bordered input-secondary w-full max-w-xl my-4" name='productImg' required />

                <textarea className="textarea textarea-secondary w-full max-w-xl" placeholder="Product Description" name='productDescription' required></textarea>

                <button type='submit' className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md max-w-xl text-white mt-4">Add product</button>
            </form>
        </div>
    );
};

export default AddAProduct;