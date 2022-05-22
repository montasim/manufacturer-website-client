import React from 'react';

const Summary = () => {
    return (
        <section className='text-center'>
            <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
                <ul className='grid grid-cols-2 gap-4 border-2 border-teal-600 rounded-xl lg:grid-cols-4'>
                    <li className='p-8'>
                        <p className='text-2xl font-extrabold text-teal-500'>50</p>
                        <p className='mt-1 text-lg font-medium'>Websites</p>
                    </li>

                    <li className='p-8'>
                        <p className='text-2xl font-extrabold text-teal-500'>190k+</p>
                        <p className='mt-1 text-lg font-medium'>Impressions</p>
                    </li>

                    <li className='p-8'>
                        <p className='text-2xl font-extrabold text-teal-500'>$150k+</p>
                        <p className='mt-1 text-lg font-medium'>Profits</p>
                    </li>

                    <li className='p-8'>
                        <p className='text-2xl font-extrabold text-teal-500'>10+</p>
                        <p className='mt-1 text-lg font-medium'>Staff</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Summary;