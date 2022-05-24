import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.Init';

const ProductRow = ({ index, product }) => {
    const { _id, name, category, supplierName, img, description, price, inStock, totalSold } = product;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    let email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            email = profile?.email;
        });
    }

    const addToCart = (_id) => {

        const item = { name, category, supplierName, img, description, price, inStock, totalSold, email };

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
                    <div class="flex items-center space-x-1">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src={img} alt={name + 'img'} />
                            </div>
                        </div>
                        <div>
                            <div class="font-semibold">{name}</div>
                            <div class="text-sm opacity-50">Added to Cart</div>
                        </div>
                    </div>
                );
            });
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button onClick={() => addToCart(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductRow;