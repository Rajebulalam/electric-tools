import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Purchase = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const { image, name, description, minimumOrderQuantity, availableOrderQuantity, price } = product;

    const url = `http://localhost:5000/product/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, [url]);



    const [quantity, setQuantity] = useState(500);

    const handleQuantity = event => {
        setQuantity(event.target.value);
        console.log(event.target.value);
    }
    let error;

    if (quantity >= 500 && quantity <= 10000) {
        console.log('');
    }
    else if (quantity < 500) {
        error = 'Your Order Quantity Should Have Over 500pc';
    } else {
        error = "You can't purchase more than 10000 pc";
    }

    return (
        <section className='py-6 md:py-10 px-4 md:px-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                <div className='bg-stone-100 flex items-center justify-center'>
                    <img className='bg-white w-9/12 h-4/6 rounded' src={image} alt="productImage" />
                </div>
                <div className='bg-stone-100 flex items-center justify-center py-5 box-content'>
                    <div className='px-6'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font-bold pb-3'>Name: {name}</h2>
                        <h2 className='py-2'> <span style={{ fontFamily: 'Merienda' }} className='font-bold' >User Name :</span> {user?.displayName} </h2>
                        <p className='py-2'> <span style={{ fontFamily: 'Merienda' }} className='font-bold' >User Email :</span> {user?.email} </p>
                        <p className='py-2'><span style={{ fontFamily: 'Merienda' }} className='font-bold' >Description:</span> {description}</p>
                        <h4 className='py-2'><span style={{ fontFamily: 'Merienda' }} className='font-bold'>Minimum Order Quantity :</span> {minimumOrderQuantity}pc</h4>
                        <h4 className='py-2'><span style={{ fontFamily: 'Merienda' }} className='font-bold'>Available Order Quantity :</span> {availableOrderQuantity}pc</h4>
                        <p className='py-2'><span style={{ fontFamily: 'Merienda' }} className='font-bold'>Per Unit Price : </span> ${price} </p>
                        <div>
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold pb-2' htmlFor="address">Address : </label>
                            <textarea className='rounded p-2 border w-full border-gray-200' name="address" id="address" cols="60" rows="2" placeholder='Write your details...'></textarea>
                        </div>
                        <div className='pt-2'>
                            <label style={{ fontFamily: 'Merienda' }} className='font-bold pb-2 block' htmlFor="number">Your Order : {quantity}pc </label>
                            <input onBlur={handleQuantity} className='w-full p-2' type="number" name="number" id="number" placeholder='Minimum Order Quantity 500' />
                        </div>
                        <div>
                            <p className='text-red-500'> {error} </p>
                        </div>
                        <div className='flex items-center justify-center pt-5 py-3'>
                            <button disabled={error} type="submit" className='btn w-[110px] mx-1 bg-white text-secondary hover:bg-gradient-to-b hover:from-accent hover:to-neutral hover:text-white'>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;