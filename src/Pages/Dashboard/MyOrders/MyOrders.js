import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Hooks/Firebase.Init';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://tools-manufacturer-server.herokuapp.com/my-orders?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setMyOrders(data);
                });
        }
    }, [myOrders])


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Ordered Time</th>
                        <th>Total Product</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders?.map((order, index) => <MyOrderRow key={index} order={order} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;