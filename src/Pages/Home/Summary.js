import React from 'react';

const Summary = () => {
    return (
        <section className='text-center'>
            <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
                <ul className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
                    <li className='p-8'>
                        <p className='text-3xl font-extrabold text-gray-800'>50</p>
                        <p className='mt-1 text-lg font-medium'>Shop</p>
                    </li>

                    <li className='p-8'>
                        <p className='text-3xl font-extrabold text-gray-800'>190k+</p>
                        <p className='mt-1 text-lg font-medium'>Users</p>
                    </li>

                    <li className='p-8'>
                        <p className='text-3xl font-extrabold text-gray-800'>$150k+</p>
                        <p className='mt-1 text-lg font-medium'>Profits</p>
                    </li>

                    <li className='p-8'>
                        <p className='text-3xl font-extrabold text-gray-800'>80+</p>
                        <p className='mt-1 text-lg font-medium'>Staff</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Summary;