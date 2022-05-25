import React from 'react';

const NewCollection = () => {
    return (
        <section style={{ backgroundColor: '#FBFAF9 ' }} className='px-4 py-8 mt-14'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-3xl text-secondary pt-4 pb-3'>New Collections</h2>
            <p className='text-gray-600 font-medium text-center pb-10'>Our new collection with new deals and offers</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='shadow-2xl rounded-full w-[130px] mt-[-10px]' src="https://i.ibb.co/K920g1Q/work-Pro-tools-removebg-preview.png" alt="work-pro-tool" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">Work Pro Tool</h2>
                        <p>If you are in present world then you should use modern equipment in your work place.</p>
                        <p className='text-secondary pt-3 font-bold' style={{ fontFamily: 'Merienda' }}>Available</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='shadow-2xl rounded-full w-[130px] mt-[-10px]' src="https://i.ibb.co/M7DWMhw/harbor-freight-tool-removebg-preview.png" alt="work-pro-tool" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">Harbor Frieght Tool</h2>
                        <p>If you are in present world then you should use modern equipment in your work place.</p>
                        <p className='text-secondary pt-3 font-bold' style={{ fontFamily: 'Merienda' }}>Available</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='shadow-2xl rounded-full w-[130px] mt-[-10px]' src="https://i.ibb.co/HgcmjJK/insuleted-tools-removebg-preview.png" alt="work-pro-tool" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">Insulated Tool</h2>
                        <p>If you are in present world then you should use modern equipment in your work place.</p>
                        <p className='text-secondary pt-3 font-bold' style={{ fontFamily: 'Merienda' }}>Available</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCollection;