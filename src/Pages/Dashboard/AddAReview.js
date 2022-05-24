import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.Init';
import defaultUserImage from '../../Assets/Images/defaultUserImage.png';

const AddAReview = () => {
    const [user] = useAuthState(auth);

    const addReview = event => {
        event.preventDefault();

        const reviewerName = user?.displayName || user?.email.split('@')[0];
        const reviewerImg = user?.photoURL || defaultUserImage;
        const reviewDescription = event?.target?.reviewDescription?.value;
        const reviewRating = event?.target?.reviewRating?.value;
        const reviewEmail = user?.email;
        const reviewCreatedAt = new Date();

        const reviewDetails = { reviewerName, reviewerImg, reviewDescription, reviewRating, reviewEmail, reviewCreatedAt };

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
                <div class="form-control">
                    <div class="input-group">
                        <select class="select select-bordered select-secondary" name='reviewRating'>
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>
                        <button class="btn">Choose Review</button>
                    </div>
                </div>
                <textarea class="textarea textarea-secondary w-full max-w-xl my-4" placeholder="Description" name='reviewDescription' required></textarea>

                <button type='submit' class="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md max-w-xl text-white">Create Review</button>
            </form>
        </div>
    );
};

export default AddAReview;