import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsCartCheck, BsSearch } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Hooks/Firebase.Init';
import Loading from './Loading';

const Navbar = ({ logo }) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        toast(error);
    };

    const logout = () => {
        toast(`See You Soon ${user?.displayName || user?.email.split('@')[0]}`);
        signOut(auth);
    };

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
                        <h5 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-secondary to-primary'>JanTrik</h5>
                    </Link>
                </div>

                <div className="flex items-center justify-end flex-1">
                    <nav
                        className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
                    >

                        <Link
                            to="/"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            About
                        </Link>

                        <Link
                            to="/blogs"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            Blogs
                        </Link>

                        <Link
                            to="/contact"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            Contact
                        </Link>

                        <Link
                            to="/my-portfolio"
                            className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            My Portfolio
                        </Link>

                        {
                            !user ?
                                <>
                                    <Link
                                        to="/login"
                                        className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                                    >
                                        Login
                                    </Link>
                                </>
                                :
                                <>
                                    <Link
                                        to="/my-orders"
                                        className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                                    >
                                        My Orders
                                    </Link>

                                    <Link
                                        to="/my-profile"
                                        className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                                    >
                                        My Profile
                                    </Link>

                                    <Link onClick={() => logout()}
                                        to="/"
                                        className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                                    >
                                        Logout
                                    </Link>
                                </>
                        }
                    </nav>

                    <div className="flex items-center ml-8">
                        <div
                            className="flex items-center border-gray-100 divide-x divide-gray-100 border-x"
                        >
                            <span>
                                <Link
                                    to="/search"
                                    className="block p-5 border-b-4 border-transparent hover:border-red-700"
                                >
                                    <BsSearch className='text-lg' />

                                    <span className="sr-only"> Search </span>
                                </Link>
                            </span>

                            <span>
                                <Link
                                    to="/cart"
                                    className="block p-5 border-b-4 border-transparent hover:border-red-700"
                                >
                                    <BsCartCheck className='text-xl' />

                                    <span className="sr-only">Cart</span>
                                </Link>
                            </span>

                            {
                                !user &&
                                <span>
                                    <Link
                                        to="/login"
                                        className="block p-5 border-b-4 border-transparent hover:border-red-700"
                                    >
                                        <FiUser className='text-xl' />

                                        <span className="sr-only"> Login </span>
                                    </Link>
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;