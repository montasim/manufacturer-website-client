import React, { useEffect, useState } from 'react';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://tools-manufacturer-server.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews]);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Review Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map((review, index) => <ReviewRow
                            key={index}
                            review={review}
                            index={index}
                        ></ReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Reviews;