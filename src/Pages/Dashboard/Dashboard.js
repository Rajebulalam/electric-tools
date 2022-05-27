import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section className='px-4 sm:px-10 py-10'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-6 ml-4 rounded-md bg-slate-200">
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-3xl text-secondary'>DashBoard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-slate-200 rounded-md">
                        <li className='pb-3 font-medium'><Link to='/dashboard'>My Orders</Link></li>
                        <li className='pb-3 font-medium'><Link to='/dashboard/reviews'>Add Reviews</Link></li>
                        <li className='font-medium'><Link to='/dashboard/profile'>My Profile</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;