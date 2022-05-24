import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { _id, name, userEmail, userCreationTime, userRole } = user;

    const deleteUser = _id => {
        const confirm = window.confirm('Are You Sure?');

        if (confirm) {
            const url = `https://tools-manufacturer-server.herokuapp.com/delete-user/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.dismiss(`Deleted ${userEmail} from User`);
                    };
                });
        };
    };

    return (
        <tr className="hover">
            <th>
                <label>{index + 1}</label>
            </th>
            <td>
                <div className="flex items-center space-x-1">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src='' alt='' />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">{name}</div>
                        <div className="text-sm opacity-50">{userCreationTime}</div>
                    </div>
                </div>
            </td>
            <td>{userRole}</td>
            <td>
                <div onClick={() => deleteUser(_id)} className="flex items-center gap-1">
                    <button
                        className="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                        type="button"
                    >
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UserRow;