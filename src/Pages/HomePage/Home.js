import React from 'react';
import Banner from './Banner';
import Summary from './Summary';
import Testimonials from './Testimonials';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='bg-primary md:px-20 px-5'>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;