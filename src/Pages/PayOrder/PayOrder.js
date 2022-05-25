import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KzgdMJVa6zVY99CaGts94G8qqJirQWPMAET7VBqrec0wWSxhuuRtgQNPA3SuwzjQKOv6QWwjgMWEfZ83N1qLNUU00IX1ciL6e');

const PayOrder = () => {
    const { id } = useParams();
    const url = `https://secret-dusk-46242.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />;
    };

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                    <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default PayOrder;