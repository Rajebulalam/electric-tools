import React from 'react';
import NewCollection from './NewCollection';
import Banner from './Banner';
import Collection from './Collection';
import Newsletter from './Newsletter';
import Summary from './Summary';
import Testimonials from './Testimonials';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='bg-primary md:px-20 px-5 pb-16'>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Collection></Collection>
            <NewCollection></NewCollection>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;