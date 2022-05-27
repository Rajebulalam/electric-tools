import React from 'react';

const Dashboard = () => {
    return (
        <section className='px-4 sm:px-16 py-10'>
            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col p-6">
                    <label for="dashboard-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-3xl text-secondary'>DashBoard</h2>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-90 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;