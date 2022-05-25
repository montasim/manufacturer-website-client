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
import defaultUserImage from '../../Assets/Images/defaultUserImage.png';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard/my-orders">My Orders</Link></li>
                    <li><Link to="/dashboard/my-blogs">My Blogs</Link></li>
                    <li><Link to="/dashboard/my-profile">My Profile</Link></li>
                    <li><Link to="/dashboard/add-review">Add Review</Link></li>
                    <li><Link to="/dashboard/add-blog">Add Blog</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/all-orders">All Orders</Link></li>
                        <li><Link to="/dashboard/all-category">All Category</Link></li>
                        <li><Link to="/dashboard/all-products">All Products</Link></li>
                        <li><Link to="/dashboard/all-users">All Users</Link></li>
                        <li><Link to="/dashboard/all-admin">All Admins</Link></li>
                        <li><Link to="/dashboard/all-reviews">All Reviews</Link></li>
                        <li><Link to="/dashboard/add-category">Add category</Link></li>
                        <li><Link to="/dashboard/add-product">Add Product</Link></li>
                        <li><Link to="/dashboard/add-admin">Add Admin</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;