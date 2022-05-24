import React from 'react';

const Review = ({ customerReview }) => {
    const { reviewerName, reviewerImg, reviewDescription, reviewCreatedAt, reviewRating } = customerReview;

    return (
        <div>
            <img
                src={reviewerImg}
                alt={`${reviewerName}'s` + 'photo'}
                className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
            />

            <blockquote
                className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
            >
                <p className="text-lg font-bold text-gray-700">{reviewerName}</p>
                <p className="mt-1 text-xs font-medium text-gray-500">
                    Digital Marketing at Studio
                </p>
                <p className="mt-4 text-sm text-gray-500">
                    {reviewDescription}
                </p>

                <div className="flex space-x-0.5 justify-center mt-8">
                    Ratings: {reviewRating} / 5
                </div>

                <small className='mt-4'>{reviewCreatedAt?.slice(0, 10)}</small>
            </blockquote>
        </div>
    );
};

export default Review;