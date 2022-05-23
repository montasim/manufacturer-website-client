import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { get } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../Hooks/Firebase.Init';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return (
        <div className='mx-10 my-12'>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-secondary text-white rounded-lg">
                                    <tr>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Serial
                                        </th>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Image
                                        </th>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Product Name
                                        </th>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Category
                                        </th>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Supplier
                                        </th>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Price
                                        </th>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Available
                                        </th>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Sold
                                        </th>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Total Price
                                        </th>
                                        <th scope="col" className="text-md font-medium  px-6 py-4 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, index) => <ManageProduct key={index} product={product} index={index} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;