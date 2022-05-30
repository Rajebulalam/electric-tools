import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L52O4FA7cP9SUHlPYxOtGzRNYt6YvUu6VjcUFf8naO7xNagvQsOEdIaeiHVZSdmUZPy08AaUAwDBteeqdrVzGnS00Ih0emXfT');

const Payment = () => {

    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: order, isLoading, refetch } = useQuery(['order', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <section>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font-bold py-2 text-secondary text-center'>Welcome to Payment</h2>
            <div className='flex items-center justify-center pt-6'>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body text-center">
                            <h1 style={{ fontFamily: 'Merienda' }} className='text-3xl font-bold py-2 text-success'> {order.userName} </h1>
                            <h2 style={{ fontFamily: 'Merienda' }} class="text-3xl font-bold">{order.productName}</h2>
                            <p className='font-medium text-xl'> Quantity : {order.quantity} </p>
                            <p className='font-medium text-xl'> Price : $ {order.total} </p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl mt-6">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;