import React from 'react';
import { toast } from 'react-toastify';
import { GrUserAdmin } from 'react-icons/gr';

const MakeAdminRow = ({ user, index, refetch }) => {
    const { name, userEmail, userCreationTime, userRole } = user;

    const makeAdmin = (name, userEmail, userRole) => {
        const adminCreationTime = new Date();

        const userDetails = { name, userEmail, adminCreationTime, userRole };

        // send data to server
        fetch('https://tools-manufacturer-server.herokuapp.com/add-admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${userEmail} is ADMIN from ${adminCreationTime}`);
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
                <div onClick={() => makeAdmin(name, userEmail, 'admin')} className="badge badge-success gap-2">
                    <GrUserAdmin />
                    Make Admin
                </div>
            </td>
        </tr>
    );
};

export default MakeAdminRow;