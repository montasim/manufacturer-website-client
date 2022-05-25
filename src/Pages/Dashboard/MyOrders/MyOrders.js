import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Hooks/Firebase.Init';
import MyOrderRow from './MyOrderRow';
import axios from 'axios';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://tools-manufacturer-server.herokuapp.com/orders/email=${user?.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        };
    }, [user]);

    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Ordered By</th>
                        <th>Total Product</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, index) => <MyOrderRow key={index} order={order} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;