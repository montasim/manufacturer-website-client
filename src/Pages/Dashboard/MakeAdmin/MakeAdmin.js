import React, { useEffect, useState } from 'react';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/users')
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
                        users.map((user, index) => <MakeAdminRow
                            key={user._id}
                            user={user}
                            index={index}
                        ></MakeAdminRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;