import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { get } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import auth from '../../../Hooks/Firebase.Init';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>In Stock</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                        <th>Sold</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <ManageProduct key={index} product={product} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;