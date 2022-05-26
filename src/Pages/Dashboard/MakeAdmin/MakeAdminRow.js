import React from 'react';
import { toast } from 'react-toastify';
import { GrUserAdmin } from 'react-icons/gr';
import defaultAdminImage from '../../../Assets/Images/defaultAdminImage.png';

const MakeAdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://tools-manufacturer-server.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
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
                                    <img src={defaultAdminImage} alt='' />
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold">{email}</div>
                            </div>
                        </div>
                    </td>
                    <td>{role}</td>
                    <td>
                        {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}
                    </td>
                </>
            }
        </tr>
    );
};

export default MakeAdminRow;