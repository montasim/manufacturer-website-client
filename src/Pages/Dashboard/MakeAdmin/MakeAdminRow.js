import React from 'react';
import { toast } from 'react-toastify';
import { GrUserAdmin } from 'react-icons/gr';
import defaultAdminImage from '../../../Assets/Images/defaultAdminImage.png';

const MakeAdminRow = ({ user, index, refetch }) => {
    const { _id, email, role } = user;

    const makeAdmin = (email, role) => {
        const adminCreationTime = new Date();

        const userDetails = { email, adminCreationTime, role };

        // send data to server
        fetch(`https://tools-manufacturer-server.herokuapp.com/admin/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${email} is ADMIN from ${adminCreationTime}`);
            });
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
                <div onClick={() => makeAdmin(email, 'admin')} className="badge badge-success gap-2">
                    <GrUserAdmin />
                    Make Admin
                </div>
            </td>
        </tr>
    );
};

export default MakeAdminRow;