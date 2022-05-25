import React from 'react';

const Testimonials = () => {
    return (
        <section className='py-10 pb-16'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-3xl py-4 pb-8 text-secondary'>What Our Clients Say?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-12">
                        <img src="https://i.ibb.co/5rsT74T/person-1.png" alt="person" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-gray-600 font-semibold'> <span style={{ fontFamily: 'gerogia' }} className='font-bold text-4xl text-accent'>"</span>I am happy to work with them. There are very responsible. They always keep original product on delivery. They are product quality is very good. </p>
                        <h2 class="card-title font-bold text-2xl">Tabriaz Smith</h2>
                        <span className='text-secondary font-medium'>CEO of PADMA</span>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-white shadow-xl">
                    <figure class="px-10 pt-12">
                        <img src="https://i.ibb.co/HzYGHtK/person-3.png" alt="person" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-gray-600 font-semibold'> <span style={{ fontFamily: 'gerogia' }} className='font-bold text-4xl text-accent'>"</span>I am happy to work with them. There are very responsible. They always keep original product on delivery. They are product quality is very good. </p>
                        <h2 class="card-title font-bold text-2xl">Haris Luke</h2>
                        <span className='text-secondary font-medium'>CEO of TISTA</span>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-white shadow-xl">
                    <figure class="px-10 pt-12">
                        <img src="https://i.ibb.co/1nfLRNg/person-2.png" alt="person" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-gray-600 font-semibold'> <span style={{ fontFamily: 'gerogia' }} className='font-bold text-4xl text-accent'>"</span>I am happy to work with them. There are very responsible. They always keep original product on delivery. They are product quality is very good. </p>
                        <h2 class="card-title font-bold text-2xl pt-3">Denial Sams</h2>
                        <span className='text-secondary font-medium'>CEO of SURMA</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;