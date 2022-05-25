import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiFillDelete, AiFillEdit, AiFillPlusSquare } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Hooks/Firebase.Init';

const ProductRow = ({ index, product }) => {
    const { _id, productName, productCategory, productSellerName, productImg, productDescription, productPrice, productInStock, minOrder } = product;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    let email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            email = profile?.email;
        });
    }

    const itemDelete = _id => {
        const confirm = window.confirm('Are You Sure?');

        if (confirm) {
            const url = `https://tools-manufacturer-server.herokuapp.com/delete-product/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(
                            <div className='flex'>
                                <img className='w-20' src={productImg} alt="" />
                                <p className='ml-4'>{productName} deleted from inventory.</p>
                            </div>
                        );
                    }
                })
        }
    }

    const addToCart = () => {

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

    }

    return (
        <tr className="hover">
            <th>
                <label>{index + 1}</label>
            </th>
            <td>
                <div className="flex items-center space-x-1">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={productImg} alt={productName + 'img'} />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">{productName}</div>
                        <div className="text-sm opacity-50">{productCategory}</div>
                    </div>
                </div>
            </td>
            <td>{productInStock}</td>
            <td>${productPrice}</td>
            <td>${productInStock * productPrice}</td>
            <td>
                <div className="flex items-center gap-1">
                    <button
                        className="z-10 block p-2 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                        type="button"
                    >
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>

                    <button
                        onClick={() => addToCart()}
                        className="z-20 block p-2 text-green-700 transition-all bg-green-100 border-2 border-white rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
                        type="button"
                    >
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>

                    <button onClick={() => itemDelete(_id)}
                        className="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                        type="button"
                    >
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ProductRow;