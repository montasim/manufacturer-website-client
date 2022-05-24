import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiFillDelete, AiFillEdit, AiFillPlusSquare } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Hooks/Firebase.Init';

const CategoryRow = ({ index, category }) => {
    const { _id, categoryName, categoryImg, categoryDescription, categoryCreatedBy, categoryCreatedTime } = category;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    let email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            email = profile?.email;
        });
    }

    const itemDelete = _id => {
        const confirm = window.confirm('Are You Sure?');

        if (confirm) {
            const url = `https://tools-manufacturer-server.herokuapp.com/delete-category/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(
                            <div className='flex'>
                                <img className='w-20' src={categoryImg} alt="" />
                                <p className='ml-4'>{categoryName} deleted from inventory.</p>
                            </div>
                        );
                    }
                })
        }
    }

    return (
        <tr class="hover">
            <th>
                <label>{index + 1}</label>
            </th>
            <td>
                <div class="flex items-center space-x-1">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={categoryImg} alt={categoryName + 'img'} />
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold">{categoryName}</div>
                        <div class="text-sm opacity-50">{categoryCreatedTime}</div>
                    </div>
                </div>
            </td>
            <td>{categoryCreatedBy}</td>
            <td>
                <div class="flex items-center gap-1">
                    <button
                        class="z-10 block p-2 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                        type="button"
                    >
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>

                    <button onClick={() => itemDelete(_id)}
                        class="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                        type="button"
                    >
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default CategoryRow;