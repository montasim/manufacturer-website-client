import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
    return (
        <section>
            <div className='max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
                <div
                    className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center'
                >
                    <div className='max-w-lg mx-auto text-center lg:text-left lg:mx-0'>
                        <h2 className='text-3xl font-bold sm:text-4xl'>Find your career path</h2>

                        <p className='mt-4 text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                            aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                            Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                            Obcaecati, autem.
                        </p>

                        <Link
                            className='inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring'
                            to='/get-started'
                        >
                            <span className='text-sm font-medium'> Get Started </span>

                            <svg
                                className='w-5 h-5 ml-3'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                />
                            </svg>
                        </Link>
                    </div>

                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
                        <Link
                            className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                            to='/accountant'
                        >
                            <span className='inline-block p-3 rounded-lg bg-gray-50'>
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                                    <path
                                        d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                                    ></path>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                                    ></path>
                                </svg>
                            </span>

                            <h6 className='mt-2 font-bold'>Accountant</h6>

                            <p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </Link>

                        <Link
                            className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                            to='/accountant'
                        >
                            <span className='inline-block p-3 rounded-lg bg-gray-50'>
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                                    <path
                                        d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                                    ></path>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                                    ></path>
                                </svg>
                            </span>

                            <h6 className='mt-2 font-bold'>Accountant</h6>

                            <p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </Link>

                        <Link
                            className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                            to='/accountant'
                        >
                            <span className='inline-block p-3 rounded-lg bg-gray-50'>
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                                    <path
                                        d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                                    ></path>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                                    ></path>
                                </svg>
                            </span>

                            <h6 className='mt-2 font-bold'>Accountant</h6>

                            <p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </Link>

                        <Link
                            className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                            to='/accountant'
                        >
                            <span className='inline-block p-3 rounded-lg bg-gray-50'>
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                                    <path
                                        d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                                    ></path>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                                    ></path>
                                </svg>
                            </span>

                            <h6 className='mt-2 font-bold'>Accountant</h6>

                            <p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </Link>

                        <Link
                            className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                            to='/accountant'
                        >
                            <span className='inline-block p-3 rounded-lg bg-gray-50'>
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                                    <path
                                        d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                                    ></path>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                                    ></path>
                                </svg>
                            </span>

                            <h6 className='mt-2 font-bold'>Accountant</h6>

                            <p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </Link>

                        <Link
                            className='block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
                            to='/accountant'
                        >
                            <span className='inline-block p-3 rounded-lg bg-gray-50'>
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                                    <path
                                        d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                                    ></path>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                                    ></path>
                                </svg>
                            </span>

                            <h6 className='mt-2 font-bold'>Accountant</h6>

                            <p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;