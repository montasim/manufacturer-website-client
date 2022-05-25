import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Hooks/Firebase.Init';
import defaultUserImage from '../../../Assets/Images/defaultUserImage.png';

const AddCategory = () => {
    const [user] = useAuthState(auth);

    const addCategory = event => {
        event.preventDefault();

        const categoryName = event?.target?.categoryName?.value;;
        const categoryImg = event?.target?.categoryImg?.value;
        const categoryDescription = event?.target?.categoryDescription?.value;
        const categoryCreatedBy = user?.email;
        const categoryCreatedTime = new Date();

        const categoryDetails = { categoryName, categoryImg, categoryDescription, categoryCreatedBy, categoryCreatedTime };

        // send data to server
        fetch('https://tools-manufacturer-server.herokuapp.com/add-category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(categoryDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Category Added Successfully');
            });
    };

    return (
        <div>
            <form onSubmit={addCategory} className='flex h-screen flex-col items-center justify-center'>
                <h2 className='text-2xl text-bold mb-4'>Add A Category Here</h2>

                <input type="text" placeholder="Category Name" className="input input-bordered input-secondary w-full max-w-xl" name='categoryName' required />

                <input type="text" placeholder="Category Image" className="input input-bordered input-secondary w-full max-w-xl my-4" name='categoryImg' required />

                <textarea className="textarea textarea-secondary w-full max-w-xl" placeholder="Description" name='categoryDescription' required></textarea>

                <button type='submit' className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md max-w-xl text-white mt-4">Create Category</button>
            </form>
        </div>
    );
};

export default AddCategory;