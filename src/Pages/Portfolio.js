import React from 'react';

const Portfolio = () => {
    return (
        <section className='px-4 sm:px-16 py-10 bg-slate-200'>
            <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-center text-3xl py-4 pb-8'>My Portfolio</h2>
            <div className='py-8 px-8 w-full sm:w-2/4 mx-auto rounded-md bg-white'>
                <div className='w-full sm:w-4/6 mx-auto'>
                    <h2 className='text-2xl font-medium'><span style={{ fontFamily: 'Merienda' }}>Name : </span> MD. Rajebul Alam</h2>
                    <p className='text-xl py-2'> <span style={{ fontFamily: 'Merienda' }}>Email : </span> rajebul.alam17@gmail.com </p>
                    <p className='text-xl py-2'> <span style={{ fontFamily: 'Merienda' }}>Education : </span> MBA </p>
                    <p className='text-xl font-semibold py-2'> <span style={{ fontFamily: 'Merienda' }}>My Skills : </span> </p>
                    <ul className='text-xl list-disc px-16'>
                        <li className='list-disc'>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;