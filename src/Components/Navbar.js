import React from 'react';
import { BsCartCheck, BsSearch } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = ({ logo }) => {
    return (
        <header className="border-b border-gray-100">
            <div
                className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
            >
                <div className="flex items-center">
                    <button type="button" className="p-2 sm:mr-4 lg:hidden">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <Link to='/' className="flex">
                        <h5 className='text-4xl font-bold text-gray-700'>Jan<span className='text-blue-600'>Trik</span></h5>
                    </Link>
                </div>

                <div className="flex items-center justify-end flex-1">
                    <nav
                        className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
                    >
                        <a
                            href="/"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            Home
                        </a>

                        <a
                            href="/about"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            About
                        </a>

                        <a
                            href="/blogs"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            Blogs
                        </a>

                        <a
                            href="/contact"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            Contact
                        </a>

                        <a
                            href="/my-portfolio"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            My Portfolio
                        </a>

                        <a
                            href="/my-orders"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            My Orders
                        </a>

                        <a
                            href="/my-profile"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            My Profile
                        </a>
                    </nav>

                    <div className="flex items-center ml-8">
                        <div
                            className="flex items-center border-gray-100 divide-x divide-gray-100 border-x"
                        >
                            <span>
                                <a
                                    href="/search"
                                    className="block p-5 border-b-4 border-transparent hover:border-red-700"
                                >
                                    <BsSearch className='text-lg' />

                                    <span className="sr-only"> Search </span>
                                </a>
                            </span>

                            <span>
                                <a
                                    href="/cart"
                                    className="block p-5 border-b-4 border-transparent hover:border-red-700"
                                >
                                    <BsCartCheck className='text-xl' />

                                    <span className="sr-only">Cart</span>
                                </a>
                            </span>

                            <span>
                                <a
                                    href="/login"
                                    className="block p-5 border-b-4 border-transparent hover:border-red-700"
                                >
                                    <FiUser className='text-xl' />

                                    <span className="sr-only"> Login </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;