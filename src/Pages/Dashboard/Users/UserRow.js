import React from 'react';
import { toast } from 'react-toastify';
import defaultUserImage from '../../../Assets/Images/defaultUserImage.png';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const UserRow = ({ user, index, refetch }) => {
    const { _id, email, role } = user;

    const options = {
        title: 'Are You Sure Want To Delete',
        buttons: [
            {
                label: 'Yes',
                onClick: () => deleteUser(_id)
            },
            {
                label: 'No',
                onClick: () => ''
            }
        ],
        closeOnEscape: true,
        closeOnClickOutside: true,
        keyCodeForClose: [8, 32],
        willUnmount: () => { },
        afterClose: () => { },
        onClickOutside: () => { },
        onKeypress: () => { },
        onKeypressEscape: () => { },
        overlayClassName: "overlay-custom-class-name"
    };

    const deleteUser = _id => {
        const url = `https://tools-manufacturer-server.herokuapp.com/delete-user/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.dismiss(`Deleted ${email} from User`);
                };
            });
    };

    return (
        <tr className="hover">
            {
                role !== 'admin' &&
                <>
                    <th>
                        <label>{index + 1}</label>
                    </th>
                    <td>
                        <div className="flex items-center space-x-1">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={defaultUserImage} alt='' />
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold">{email}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div onClick={() => confirmAlert(options)} className="flex items-center gap-1">
                            <button
                                className="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                                type="button"
                            >
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </>
            }
        </tr>
    );
};

export default UserRow;