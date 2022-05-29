import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const logOut = async () => {
        await signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/signIn');
    }

    const menuItem = <>
        <li className='text-gray-500 hover:text-accent mx-1 font-bold uppercase text-sm'><Link to='/'>Home</Link></li>
        <li className='text-gray-500 hover:text-accent mx-1 font-bold uppercase text-sm'><Link to='/purchase'>Purchase</Link></li>
        {
            user && <li className='text-gray-500 hover:text-accent mx-1 font-bold uppercase text-sm'><Link to='/dashboard'>Dashboard</Link></li>
        }
        <div>
            <button className="btn btn-outline w-[110px] mx-1 bg-white text-secondary hover:bg-gradient-to-b hover:from-accent hover:to-neutral mb-3 sm:mb-0"><Link to='/signup'>Sign up</Link></button>
            {
                user ? <button onClick={logOut} className="btn btn-outline w-[110px] mx-1 sm:mt-2 bg-gradient-to-b from-accent to-neutral text-white hover:bg-gradient-to-b hover:from-white hover:to-white hover:text-secondary hover:border-secondary"><Link to='/signIn'>Sign Out</Link></button> : <button className="btn btn-outline w-[110px] mx-1 sm:mt-2 bg-gradient-to-b from-accent to-neutral text-white hover:bg-gradient-to-b hover:from-white hover:to-white hover:text-secondary hover:border-secondary"><Link to='/signIn'>Sign in</Link></button>
            }
        </div>
    </>

    return (
        <header className='bg-primary md:px-20 pt-2 pb-4'>
            <div className="navbar">
                <div className="navbar-start w-full sm:w-4/12">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' style={{ fontFamily: 'Merienda' }} className="normal-case text-3xl font-bold text-secondary">Electric Tools.</Link>
                </div>
                <div className="navbar-end hidden w-8/12 lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;