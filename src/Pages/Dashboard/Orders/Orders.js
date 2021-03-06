import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Ordered By</th>
                        <th>Paid Status</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <OrderRow key={index} order={order} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;