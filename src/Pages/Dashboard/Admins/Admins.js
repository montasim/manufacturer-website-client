import React, { useEffect, useState } from 'react';
import AdminRow from './AdminRow';

const Admins = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/users', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users]);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <AdminRow
                            key={user._id}
                            user={user}
                            index={index}
                        ></AdminRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Admins;