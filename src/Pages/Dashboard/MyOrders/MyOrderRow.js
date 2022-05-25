import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Hooks/Firebase.Init';

const MyOrderRow = ({ index, order }) => {
    const { _id, orderCreatedTime, orderedProducts, orderStatus } = order;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    let email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            email = profile?.email;
        });
    }

    const deleteOrder = _id => {
        const confirm = window.confirm('Are You Sure?');

        if (confirm) {
            const url = `https://tools-manufacturer-server.herokuapp.com/delete-order/${_id}`;
            fetch(url, {
                mode: 'no-cors',
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(
                            <div className='flex'>
                                <p className='ml-4'>{_id} deleted from inventory.</p>
                            </div>
                        );
                    }
                })
        }
    }

    return (
        <tr className="hover">
            <th>
                <label>{index + 1}</label>
            </th>
            <td>
                <div className="font-semibold">{orderCreatedTime}</div>
            </td>
            <td>{orderedProducts.length}</td>
            <td>
                <div onClick={() => navigate('/pay-order')} className="badge badge-primary text-white">{orderStatus}</div>
            </td>
            <td>
                <div className="flex items-center gap-1">
                    <button onClick={() => deleteOrder(_id)}
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

export default MyOrderRow;