import React from 'react';

const Newsletter = () => {
    return (
        <section className='px-4 py-10 sm:p-14 bg-white rounded'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-3xl text-secondary'>Get The Latest Deals</h2>
            <p className='text-center text-gray-600 font-medium pt-4'>To get our latest news and offers connect with us.</p>
            <div className='flex items-center justify-center pt-6'>
                <div className="form-control">
                    <div className="input-group">
                        <input className='px-4 border' type="email" name="email" id="email" placeholder='Your Email' />
                        <button type='submit' className="btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;