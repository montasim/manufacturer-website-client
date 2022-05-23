import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Hooks/Firebase.Init';
import useAdmin from '../../Hooks/useAdmin';
import { CgUserAdd } from 'react-icons/cg';
import { FaProductHunt } from 'react-icons/fa';
import { FiSettings, FiUsers } from 'react-icons/fi';
import { GoDiffAdded } from 'react-icons/go';
import { GrUserAdmin } from 'react-icons/gr';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlineRateReview } from 'react-icons/md';
import { RiUserAddLine } from 'react-icons/ri';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile mt-8">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side shadow-lg">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <Link
                        to='/dashboard/my-orders'
                        className='flex items-center px-4 py-2 text-gray-700  rounded-lg'
                    >
                        <HiOutlineShoppingBag />
                        <span className='ml-3 text-sm font-medium'> My Orders </span>
                    </Link>

                    <Link
                        to='/dashboard/add-review'
                        className='flex items-center px-4 py-2 text-gray-700  rounded-lg'
                    >
                        <MdOutlineRateReview />
                        <span className='ml-3 text-sm font-medium'> Add Review </span>
                    </Link>

                    <Link
                        to='/dashboard/my-profile'
                        className='flex items-center px-4 py-2 text-gray-700  rounded-lg'
                    >
                        <FiSettings />
                        <span className='ml-3 text-sm font-medium'> My profile </span>
                    </Link>

                    <Link
                        to='/dashboard/all-orders'
                        className='flex items-center px-4 py-2 text-gray-700  rounded-lg'
                    >
                        <HiOutlineShoppingBag />
                        <span className='ml-3 text-sm font-medium'> All Orders </span>
                    </Link>

                    <Link
                        to='/dashboard/add-product'
                        className='flex items-center px-4 py-2 text-gray-700  rounded-lg'
                    >
                        <GoDiffAdded />
                        <span className='ml-3 text-sm font-medium'> Add Products </span>
                    </Link>

                    <Link
                        to='/dashboard/all-products'
                        className='flex items-center px-4 py-2 text-gray-700  rounded-lg'
                    >
                        <FaProductHunt />
                        <span className='ml-3 text-sm font-medium'> All Products </span>
                    </Link>

                    <Link
                        to='/dashboard/add-user'
                        className='flex items-center px-4 py-2 text-gray-700  rounded-lg'
                    >
                        <RiUserAddLine />
                        <span className='ml-3 text-sm font-medium'> Add User </span>
                    </Link>

                    <Link
                        to='/dashboard/all-users'
                        className='flex items-center px-4 py-2 text-gray-700  rounded-lg'
                    >
                        <FiUsers />
                        <span className='ml-3 text-sm font-medium'> All Users </span>
                    </Link>

                    <Link
                        to='/dashboard/add-admin'
                        className='flex items-center px-4 py-2 text-gray-700  rounded-lg'
                    >
                        <CgUserAdd />
                        <span className='ml-3 text-sm font-medium'> Add Admin </span>
                    </Link>

                    <Link
                        to='/dashboard/all-admin'
                        className='flex items-center px-4 py-2 text-gray-700 rounded-lg'
                    >
                        <GrUserAdmin />
                        <span className='ml-3 text-sm font-medium'> All Admins </span>
                    </Link>
                </ul>

                <div className='sticky inset-x-0 bottom-0 border-t border-gray-100'>
                    <Link to='' className='flex items-center p-2 bg-white hover:bg-gray-50 shrink-0'>
                        <img
                            className='object-cover w-10 h-10 rounded-full'
                            src={user?.photoURL}
                            alt={user?.displayName || user?.email}
                        />

                        <div className='ml-1.5'>
                            <p className='text-xs'>
                                <strong className='block font-medium'>{user?.displayName || user?.email}</strong>

                                <span> {user?.email} </span>
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;