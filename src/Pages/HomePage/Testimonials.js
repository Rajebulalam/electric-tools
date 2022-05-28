import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Testimonials = () => {

    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('https://intense-garden-12250.herokuapp.com/reviews').then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <section className='py-10 pb-16'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-3xl py-4 pb-8 text-secondary'>What Our Clients Say?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <div key={review._id} className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure className="px-10 pt-12">
                            <img src={review.image} alt="person" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className='text-gray-600 font-semibold'> <span style={{ fontFamily: 'gerogia' }} className='font-bold text-4xl text-accent'>"</span>{review.description} </p>
                            <h2 className="card-title font-bold text-2xl">{review.name}</h2>
                            <span style={{ fontFamily: 'Merienda' }} className='text-secondary font-medium text-sm'>{review.designation}</span>
                            <p className='font-semibold'> Ratings : <span className='text-secondary'>{review.ratings}</span> </p>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    );
};

export default Testimonials;