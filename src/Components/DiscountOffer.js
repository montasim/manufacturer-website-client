import React from 'react';

const DiscountOffer = () => {
    return (
        <section className='relative overflow-hidden rounded-lg shadow-2xl pb-80 lg:pb-0'>
            <div className='p-8 ml-auto text-center lg:w-2/3 sm:p-12'>
                <p className='text-sm font-semibold tracking-widest uppercase'>
                    Run with the pack
                </p>

                <h5 className='mt-6 font-black uppercase'>
                    <span className='text-5xl font-black sm:text-6xl'>Get 20% off</span>
                    <span className='block mt-2 text-sm'>On your next order over $50</span>
                </h5>

                <Link
                    className='inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-black '
                    to=''
                >
                    Get Discount
                </Link>

                <p className='mt-12 text-xs font-medium text-gray-400 uppercase'>
                    Offer valid until 24th March, 2021 *
                </p>
            </div>

            <div className='absolute bottom-0 left-0 w-full h-80 lg:h-full lg:w-1/3'>
                <img
                    alt=''
                    className='absolute inset-0 object-cover w-full h-full'
                    src='https://www.hyperui.dev/photos/shoe-1.jpeg'
                />
            </div>
        </section>
    );
};

export default DiscountOffer;