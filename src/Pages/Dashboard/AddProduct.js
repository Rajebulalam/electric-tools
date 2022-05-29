import React from 'react';

const AddProduct = () => {

    const addReview = event => {
        event.preventDefault();
        const image = event.target.image.value;
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const minimumOrderQuantity = event.target.minimumOrderQuantity.value;
        const availableOrderQuantity = event.target.availableOrderQuantity.value;
        const review = {
            image,
            name,
            description,
            price,
            minimumOrderQuantity,
            availableOrderQuantity
        };

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })
    }

    return (
        <section className='py-4'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl font-bold pb-6'>Add A Product :</h2>
            <form onSubmit={addReview}>
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="image" id="image" placeholder='Provide a image link' />
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="name" id="name" placeholder='Product Name' />
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="description" id="Product Description" placeholder='Description' />
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="price" id="price" placeholder='Price' />
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="minimumOrderQuantity" id="minimumOrderQuantity" placeholder='Minimum Ordered Quantity' />
                <input className='p-2 w-full md:w-3/6 mx-auto block mb-4 rounded-sm' type="text" name="availableOrderQuantity" id="availableOrderQuantity" placeholder='Available Ordered Quantity' />
                <div className='flex items-center justify-center'>
                    <button type="submit" className='btn bg-white text-secondary hover:bg-gradient-to-b hover:from-accent hover:to-neutral hover:text-white'>Add Review</button>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;