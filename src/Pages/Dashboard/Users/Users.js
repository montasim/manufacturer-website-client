import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users]);

    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
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
                        users.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;