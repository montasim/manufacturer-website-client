import React, { useEffect, useState } from 'react';
import QNARow from './QNARow';

const QNAS = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [blogs]);

    return (
        <section>
            <div className='space-y-4 mt-32 mb-20 md:px-20 sm:px-14 px-6'>
                {
                    blogs.map((blog, index) => <QNARow key={index} blog={blog} index={index} />)
                }
            </div>
        </section>
    );
};

export default QNAS;