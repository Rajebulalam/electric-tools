import React from 'react';
import Banner from './Banner';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='bg-primary md:px-20 px-5'>
            <Banner></Banner>
            <Tools></Tools>
        </div>
    );
};

export default Home;