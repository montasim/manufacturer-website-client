import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.Init';
import CartRow from './CartRow';

const Cart = () => {
    const [user] = useAuthState(auth);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/cart')
            .then(res => res.json())
            .then(data => setCart(data));
    }, [cart]);

    const placeOrder = event => {
        event.preventDefault();

        const orderedProducts = cart;
        const orderStatus = 'DUE PAYMENT'
        const orderedUserName = event?.target?.orderedUserName?.value;
        const orderDeliveryAddress = event?.target?.orderDeliveryAddress?.value;
        const orderedUserEmail = user?.email;
        const orderedUserPhone = event?.target?.orderedUserPhone?.value;
        const orderCreatedTime = new Date();

        const blogDetails = { orderedProducts, orderStatus, orderedUserName, orderDeliveryAddress, orderedUserEmail, orderedUserPhone, orderCreatedTime };

        // send data to server
        fetch('https://tools-manufacturer-server.herokuapp.com/add-order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order Placed Successfully. Pay to continue.');
            });

    };

    return (
        <section>
            <h1 className="sr-only">Checkout</h1>
            <div className="relative mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="py-12 bg-gray-50 md:py-24">
                        <div className="max-w-lg px-4 mx-auto lg:px-8">
                            <div className="mt-8">
                                <div className='flex justify-between'>
                                    <p className="text-2xl font-medium tracking-tight"></p>
                                    <p className="text-xl tracking-tight">Total: {cart.length} Products</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Products you selected to buy</p>
                            </div>

                            <div className="mt-12">
                                <div className="flow-root">
                                    <ul className="-my-4 divide-y divide-gray-200">
                                        {
                                            cart.map((cart, index) => <CartRow key={index} cart={cart} index={index} />)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-12 bg-white md:py-24">
                        <div className="max-w-lg px-4 mx-auto lg:px-8">
                            <form onSubmit={placeOrder} className="grid grid-cols-6 gap-4">

                                <div className="col-span-6">
                                    <label className="block mb-1 text-sm text-gray-600" for="orderedUserName">
                                        Name
                                    </label>

                                    <input type="text" placeholder="Name" class="input input-bordered input-secondary w-full max-w-xl" name='orderedUserName' required />
                                </div>

                                <div className="col-span-6">
                                    <label className="block mb-1 text-sm text-gray-600" for="address">
                                        Delivery Address
                                    </label>

                                    <input type="text" placeholder="Delivery Address" class="input input-bordered input-secondary w-full max-w-xl" name='orderDeliveryAddress' required />
                                </div>

                                <div className="col-span-6">
                                    <label className="block mb-1 text-sm text-gray-600" for="name">
                                        Email
                                    </label>

                                    <input type="text" value={user?.email} class="input input-bordered input-secondary w-full max-w-xl" name='blogTitle' required />
                                </div>

                                <div className="col-span-6">
                                    <label className="block mb-1 text-sm text-gray-600" for="phone">
                                        Phone
                                    </label>

                                    <input type="text" placeholder="Title" class="input input-bordered input-secondary w-full max-w-xl" name='orderedUserPhone' required />
                                </div>

                                <div className="col-span-6">
                                    <button type='submit' class="btn btn-secondary w-full text-white">Continue Checkout</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;