import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Hooks/Firebase.Init';
import useAdmin from '../../Hooks/useAdmin';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BiCategory, BiMessageSquareAdd } from 'react-icons/bi';
import { CgUserAdd } from 'react-icons/cg';
import { FaProductHunt } from 'react-icons/fa';
import { FiSettings, FiUsers } from 'react-icons/fi';
import { GoDiffAdded } from 'react-icons/go';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlineRateReview, MdAddComment } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { SiMicrodotblog } from 'react-icons/si';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side shadow-xl">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {
                        !admin && <>
                            <li>
                                <Link to="/dashboard/my-orders">
                                    <HiOutlineShoppingBag className='text-secondary' />
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/my-blogs">
                                    <SiMicrodotblog className='text-secondary' />
                                    My Blogs
                                </Link>
                            </li>
                        </>
                    }
                    <li>
                        <Link to="/dashboard/my-profile">
                            <FiSettings className='text-secondary' />
                            My Profile
                        </Link>
                    </li>
                    {
                        !admin && <>
                            <li>
                                <Link to="/dashboard/add-review">
                                    <BiMessageSquareAdd className='text-secondary' />
                                    Add Review
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/add-blog">
                                    <MdAddComment className='text-secondary' />
                                    Add Blog
                                </Link>
                            </li>
                        </>
                    }
                    {admin && <>
                        <li>
                            <Link to="/dashboard/all-orders">
                                <HiOutlineShoppingBag className='text-secondary' />
                                All Orders
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/all-category">
                                <BiCategory className='text-secondary' />
                                All Category
                            </Link>
                        </li>
                        <li><Link to="/dashboard/all-products">
                            <FaProductHunt className='text-secondary' />
                            All Products</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/all-users">
                                <FiUsers className='text-secondary' />
                                All Users
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/all-admin">
                                <RiAdminLine className='text-secondary' />
                                All Admins
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/all-reviews">
                                <MdOutlineRateReview className='text-secondary' />
                                All Reviews
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/add-category">
                                <AiOutlineAppstoreAdd className='text-secondary' />
                                Add category
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/add-product">
                                <GoDiffAdded className='text-secondary' />
                                Add Product
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/add-admin">
                                <CgUserAdd className='text-secondary' />
                                Add Admin
                            </Link>
                        </li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;