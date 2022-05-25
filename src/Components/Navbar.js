import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsCartCheck, BsSearch } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Hooks/Firebase.Init';
import Loading from './Loading';
import defaultUserImage from '../Assets/Images/defaultUserImage.png';

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

        localStorage.removeItem('accessToken');
    };

    const navbarRoute = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/my-portfolio'>My Portfolio</Link></li>
        {
            !user ?
                <>
                </> :
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link onClick={() => logout()} to='/'>Logout</Link></li>
                </>
        }
        <li><Link to='/search'> <BsSearch className='text-lg' /></Link></li>
        <li><Link to='/cart'> <BsCartCheck className='text-xl' /></Link></li>
        {
            !user ?
                <>
                    <li><Link to='/login'> <FiUser className='text-xl' /></Link></li>
                </> :
                <>
                    <li className="flex py-[-4] bg-secondary rounded-3xl">
                        <img className='w-6 h-6' src={user?.photoURL || user?.user?.photoURL || defaultUserImage} alt="" />
                        <small>{user?.displayName || user?.user?.displayName || user?.email.split('@')[0]}</small>
                    </li>
                </>
        }
    </>;

    return (
        <div className="navbar bg-base-100 lg:mx-10 sm:mx-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className={`btn btn-ghost lg:hidden ${user ? '' : 'md:hidden sm:hidden'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarRoute}
                    </ul>
                </div>
                <Link to='/'><h5 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-secondary to-primary'>JanTrik</h5></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarRoute}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;