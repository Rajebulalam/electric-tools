import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddReview = () => {

    const addReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const designation = event.target.designation.value;
        const ratings = event.target.number.value;
        const review = {
            name,
            description,
            designation,
            ratings
        };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
            })
    }

    return (
        <section>
            <h2 style={{ fontFamily: "Merienda" }} className='text-2xl font-bold pt-8 pb-6'>Add A Review :</h2>
            <form onSubmit={addReview}>
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="name" id="name" placeholder='Name' />
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="description" id="description" placeholder='Description' />
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="designation" id="designation" placeholder='Designation' />
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="number" id="number" placeholder='Give a ratings 1 to 5' />
                <div className='flex items-center justify-center'>
                    <button type="submit" className='btn bg-white text-secondary hover:bg-gradient-to-b hover:from-accent hover:to-neutral hover:text-white'>Add Review</button>
                </div>
            </form>
        </section>
    );
};

export default AddReview;