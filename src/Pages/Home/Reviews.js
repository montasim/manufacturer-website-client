import React, { useEffect, useState } from 'react';
import { MdOutlineReviews } from 'react-icons/md';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://posdash-server.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="bg-white">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
                <div className="max-w-xl mx-auto text-center">
                    <div className='flex items-center justify-center'>
                        <MdOutlineReviews className='text-4xl mr-4' />
                        <h2 className="text-4xl font-bold sm:text-3xl items-center">
                            Review From <span className='text-secondary text-4xl'>Customers</span>
                        </h2>
                    </div>

                    <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
                        POSData is a world class inventory management system. We provide live support to all of our user. Hear more from our honorable users.
                    </p>
                </div>

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
                >
                    {
                        reviews.map((review, index) => <Review key={index} customerReview={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;