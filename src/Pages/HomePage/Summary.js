import { faComment, faFlag } from '@fortawesome/free-regular-svg-icons';
import { faFeed, faListCheck, faP, faPeopleGroup, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <section className='py-8'>
            <h2 className='text-center font-bold text-3xl pt-4 pb-3 text-secondary' style={{ fontFamily: 'Merienda' }}>Business Summary</h2>
            <p className='text-center pb-14 font-medium'>We are provide the best equipment and service for our customer </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  text-center'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <FontAwesomeIcon className='text-3xl pb-2 text-secondary' icon={faFlag}></FontAwesomeIcon>
                        <h2 className='text-4xl font-bold'>50</h2>
                        <p className='text-secondary font-medium'>Country</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <FontAwesomeIcon className='text-3xl pb-2 text-secondary' icon={faListCheck}></FontAwesomeIcon>
                        <h2 className='text-4xl font-bold'>100+</h2>
                        <p className='text-secondary font-medium'>Complete Projects</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <FontAwesomeIcon className='text-3xl text-secondary' icon={faPeopleGroup}></FontAwesomeIcon>
                        <h2 className='text-4xl pb-2 font-bold'>98+</h2>
                        <p className='text-secondary font-medium'>Happy Clients</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <FontAwesomeIcon className='text-3xl pb-2 text-secondary' icon={faComment}></FontAwesomeIcon>
                        <h2 className='text-4xl font-bold'>100+</h2>
                        <p className='text-secondary font-medium'>Clients Feedback</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;