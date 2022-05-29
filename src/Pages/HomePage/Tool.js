import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {

    const { _id, name, image, description, minimumOrderQuantity, availableOrderQuantity, price } = tool;

    return (
        <div style={{ borderRadius: '35px 0px 35px 0px' }} className='bg-white shadow-lg relative h-[300px]'>
            <div className='px-6 relative'>
                <div className='absolute top-[-40px] right-[-20px] rounded-full bg-white w-[100px] h-[100px] border-4 border-secondary'>
                    <img className='w-[100px] h-[100px]' src={image} alt="tools" />
                </div>
                <h4 className='text-secondary font-bold pt-8'> ${price} </h4>
                <h2 className='font-bold py-3'> {name} </h2>
                <p className='text-gray-700 font-semibold text-[16px] pb-4'> {description} </p>
                <p className='text-gray-700'><strong> Minimum Order: <span className='text-secondary'>{minimumOrderQuantity}</span> pc </strong></p>
                <p className='pb-6 text-gray-600'><strong> Available Order: <span className='text-secondary'>{availableOrderQuantity}</span> pc </strong></p>
            </div>
            <button style={{ borderRadius: '35px 25px 25px 0px' }} className="btn btn-primary bg-gradient-to-b from-accent to-neutral text-white hover:bg-gradient-to-b hover:from-white hover:to-white hover:text-secondary font-bold hover:border-secondary px-5 absolute left-0 bottom-0"><Link to={`/purchase/${_id}`}>Purchase Now</Link></button>
        </div>
    );
};

export default Tool;