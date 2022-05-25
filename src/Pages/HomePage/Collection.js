import React from 'react';

const Collection = () => {
    return (
        <section style={{ backgroundColor: '#FBFAF9 ' }} className='p-8'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-3xl text-secondary py-4'>Top Collections</h2>
            <p className='text-gray-700 font-medium text-center pb-8'>Our Best Electric Tools Collection is On</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div style={{ borderRadius: '0px 30px 0px 30px' }} className='bg-yellow-100 h-[350px]'>
                    <img style={{ borderRadius: '0px 30px 0px 100px' }} className='w-full h-[230px] bg-primary' src="https://i.ibb.co/MfRD8sX/family-handyman-removebg-preview.png" alt="product-img" />
                    <div className='pl-4 pt-6'>
                        <button type="submit" className='btn btn-sm bg-neutral text-white font-semibold px-4 read-only'> PHOTO </button>
                        <h2 className='text-2xl font-bold pt-2'>Family Handyman</h2>
                    </div>
                </div>
                <div style={{ borderRadius: '0px 30px 0px 30px' }} className='bg-yellow-100 h-[350px]'>
                    <img style={{ borderRadius: '0px 30px 0px 100px' }} className='w-full h-[230px] bg-primary' src="https://i.ibb.co/dfHpdKC/nedds-removebg-preview.png" alt="product-img" />
                    <div className='pl-4 pt-6'>
                        <button type="submit" className='btn btn-sm bg-neutral text-white font-semibold px-4 read-only'> PHOTO </button>
                        <h2 className='text-2xl font-bold pt-2'>Needle Tools</h2>
                    </div>
                </div>
                <div style={{ borderRadius: '0px 30px 0px 30px' }} className='bg-yellow-100 h-[350px]'>
                    <img style={{ borderRadius: '0px 30px 0px 100px' }} className='w-full h-[230px] bg-primary' src="https://i.ibb.co/CzH8P2w/pacer-group-removebg-preview.png" alt="product-img" />
                    <div className='pl-4 pt-6'>
                        <button type="submit" className='btn btn-sm bg-neutral text-white font-semibold px-4 read-only'> PHOTO </button>
                        <h2 className='text-2xl font-bold pt-2'>Pacer Group</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;