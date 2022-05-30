import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <section className='px-4 sm:px-10 py-10'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-6 ml-4 rounded-md bg-slate-200">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-slate-200 rounded">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-slate-200 lg:bg-transparent rounded-md">
                        <li className='font-medium hover:text-secondary'><Link to='/dashboard'>My Profile</Link></li>
                        {
                            admin ? <>
                                <li className='font-medium hover:text-secondary'><Link to='/dashboard/admin'>Make Admin</Link></li>
                                <li className='font-medium hover:text-secondary'><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                                <li className='font-medium hover:text-secondary'><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                            </> : <>
                                <li className='font-medium hover:text-secondary'><Link to='/dashboard/order'>My Orders</Link></li>
                                <li className='font-medium hover:text-secondary'><Link to='/dashboard/reviews'>Add Reviews</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;