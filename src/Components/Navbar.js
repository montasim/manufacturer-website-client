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
                </>
        }
    </>;

    return (
        <div class="navbar bg-base-100 lg:mx-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class={`btn btn-ghost lg:hidden ${user ? '' : 'md:hidden sm:hidden'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarRoute}
                    </ul>
                </div>
                <Link to='/'><h5 className='font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-secondary to-primary'>JanTrik</h5></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navbarRoute}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;