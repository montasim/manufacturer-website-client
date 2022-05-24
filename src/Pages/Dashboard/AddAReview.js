import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.Init';

const AddAReview = () => {
    const [user] = useAuthState(auth);

    const addReview = event => {
        event.preventDefault();

        const reviewDescription = event?.target?.reviewDescription?.value;
        const createdBy = user?.email;

        const reviewDetails = { reviewDescription, createdBy };

        // send data to server
        fetch('https://tools-manufacturer-server.herokuapp.com/add-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Review Added Successfully');
            });
    };

    return (
        <div>
            <form onSubmit={addReview} className='flex h-screen flex-col items-center justify-center'>
                <textarea class="textarea textarea-secondary w-full max-w-xl my-4" placeholder="Description" name='reviewDescription' required></textarea>

                <button type='submit' class="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md max-w-xl text-white">Create Review</button>
            </form>
        </div>
    );
};

export default AddAReview;