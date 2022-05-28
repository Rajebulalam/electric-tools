import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='px-4 sm:px-16 py-10'>
            <Helmet>
                <title>Dress Warehouse - Not Found</title>
            </Helmet>
            <div className='py-5 text-center'>
                <h1 className='text-5xl font-extrabold pb-6'>Opps!</h1>
                <h2 className='text-red-500 font-medium text-2xl pb-4'>404</h2>
                <h2 className='p-0 font-medium'>PAGE NOT FOUND</h2>
                <p className='fw-bold font-medium'>The page you are looking for might have been removed</p>
                <Link className=' btn btn-primary mt-4 px-4 py-2 mt-2 fw-bold rounded' to='/'>Take Me Home</Link>
            </div>
        </section>
    );
};

export default NotFound;