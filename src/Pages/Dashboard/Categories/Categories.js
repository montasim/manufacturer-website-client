import React, { useEffect, useState } from 'react';
import CategoryRow from './CategoryRow';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [categories]);

    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Category Name</th>
                        <th>Category Created By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category, index) => <CategoryRow key={index} category={category} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Categories;