import React, { useEffect, useState } from 'react';
import MyOrder from './MyOrder';

const MyOrders = () => {
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
                        products.map((product, index) => <MyOrder key={index} product={product} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;