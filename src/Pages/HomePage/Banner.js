import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='relative md:w-6/12'>
                        <img className='w-full' src="https://i.ibb.co/89SmW1j/assignment-1-removebg-preview.png" alt='banner-img' />
                        <div className="absolute right-0 top-0 h-[50px] w-auto shadow-md font-bold px-2 rounded py-3 bg-white z-20">Electric Equipment</div>
                        <div className="absolute left-0 bottom-0 h-[50px] w-auto shadow-md font-bold px-2 rounded py-3 bg-white z-20">Electric Tools</div>
                    </div>
                    <div className='md:w-6/12'>
                        <h1 className="text-5xl font-bold md:pr-16 leading-tight" style={{ fontFamily: 'Merienda' }}>Best & Fastest <span className='text-accent'>Delivery</span> in Your Place</h1>
                        <p class="md:pr-16 py-5 text-gray-600 font-medium">Order your equipment any time and we will safely delivery them straight to your home. We will deliver it on time so you can relax.</p>
                        <button style={{ borderRadius: '0px 25px 25px 35px' }} class="btn btn-primary bg-gradient-to-b from-accent to-neutral text-white hover:bg-gradient-to-b hover:from-white hover:to-white hover:text-secondary font-bold hover:border-secondary px-5">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;