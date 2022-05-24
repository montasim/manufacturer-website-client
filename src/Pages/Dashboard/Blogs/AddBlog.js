import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Hooks/Firebase.Init';

const AddBlog = () => {
    const [user] = useAuthState(auth);

    const addBlog = event => {
        event.preventDefault();

        const blogTitle = event?.target?.blogTitle?.value;
        const blogDescription = event?.target?.blogDescription?.value;
        const blogCreatedBy = user?.email;
        const blogCreatedTime = new Date();

        const blogDetails = { blogTitle, blogDescription, blogCreatedBy, blogCreatedTime };

        // send data to server
        fetch('https://tools-manufacturer-server.herokuapp.com/add-blog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Blog Added Successfull');
            });

    };

    return (
        <div>
            <form onSubmit={addBlog} className='flex h-screen flex-col items-center justify-center'>
                <h2 className='text-3xl mb-8'>Add Blog</h2>
                <input type="text" placeholder="Title" class="input input-bordered input-secondary w-full max-w-xl" name='blogTitle' required />

                <textarea class="textarea textarea-secondary w-full max-w-xl my-4" placeholder="Description" name='blogDescription' required></textarea>

                <button type='submit' class="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md max-w-xl text-white">Create Blog</button>
            </form>
        </div>
    );
};

export default AddBlog;