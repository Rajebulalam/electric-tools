import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItem = <>
        <li className='text-gray-500 hover:text-accent mx-1 font-bold uppercase text-sm'><Link to='/'>Home</Link></li>
        <li className='text-gray-500 hover:text-accent mx-1 font-bold uppercase text-sm'><Link to='/'>Tools</Link></li>
        <li className='text-gray-500 hover:text-accent mx-1 font-bold uppercase text-sm'><Link to='/purchase'>Purchase</Link></li>
        <div>
            <button class="btn btn-outline w-[110px] mx-1 bg-white text-secondary hover:bg-gradient-to-b hover:from-accent hover:to-neutral">Sign up</button>
            <button class="btn btn-outline w-[110px] mx-1 sm:mt-2 bg-gradient-to-b from-accent to-neutral text-white hover:bg-gradient-to-b hover:from-white hover:to-white hover:text-secondary hover:border-secondary">Sign in</button>
        </div>
    </>

    return (
        <header className='bg-primary md:px-20 pt-3'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' class="normal-case text-3xl font-bold text-secondary">Electric Tools.</Link>
                </div>
                <div class="navbar-end md:navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;