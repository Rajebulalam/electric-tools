import { faComment, faFlag } from '@fortawesome/free-regular-svg-icons';
import { faListCheck, faPeopleLine, faPlug, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <section className='py-8 pb-16'>
            <h2 className='text-center font-bold text-3xl pt-4 pb-3 text-secondary' style={{ fontFamily: 'Merienda' }}>Business Summary</h2>
            <p className='text-center pb-14 font-medium'>We are provide the best equipment and service for our customer </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  text-center'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <FontAwesomeIcon className='text-3xl pb-2 text-secondary' icon={faPeopleLine}></FontAwesomeIcon>
                        <h2 className='text-4xl font-bold'>550+</h2>
                        <p className='text-secondary font-medium'>Customers</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <FontAwesomeIcon className='text-3xl pb-2 text-secondary' icon={faListCheck}></FontAwesomeIcon>
                        <h2 className='text-4xl font-bold'>150M+</h2>
                        <p className='text-secondary font-medium'>Annual Revenue</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faComment}></FontAwesomeIcon>
                        <h2 className='text-4xl pb-2 font-bold'>10K+</h2>
                        <p className='text-secondary font-medium'>Client Reviews</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <FontAwesomeIcon className='text-3xl pb-2 text-secondary' icon={faPlug}></FontAwesomeIcon>
                        <h2 className='text-4xl font-bold'>100+</h2>
                        <p className='text-secondary font-medium'>Electric Tools</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;