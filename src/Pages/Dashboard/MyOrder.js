import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const email = user?.email;
    const url = `http://localhost:5000/items?email=${email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [url])

    const handleDelete = id => {
        const url = `http://localhost:5000/items/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = items.filter(product => product._id !== id);
                    setItems(remaining);
                }
            })
    }

    return (
        <section>
            <div class="overflow-x-auto pt-8">
                <table class="table w-full">
                    <thead>
                        <tr style={{ fontFamily: 'Merienda' }} className='text-center text-secondary'>
                            <th>S.N.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.total}</td>
                                    <td><label type='submit' htmlFor="confirm-modal" class="btn modal-button btn-sm bg-white text-secondary hover:bg-gradient-to-b hover:from-accent hover:to-neutral hover:text-white">
                                        Delete
                                    </label></td>
                                    <td>
                                        <input type="checkbox" id="confirm-modal" class="modal-toggle" />
                                        <div class="modal modal-bottom sm:modal-middle">
                                            <div class="modal-box">
                                                <label htmlFor="confirm-modal" class="btn btn-sm btn-circle absolute right-2 top-2 bg-black hover:bg-black border-0">✕</label>
                                                <p class="py-4 text-center pt-8 font-bold">Are you want to delete?</p>
                                                <div class="modal-action">
                                                    <label onClick={() => handleDelete(item._id)} htmlFor="confirm-modal" class="btn bg-black hover:bg-black border-0">Yes</label>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section >
    );
};

export default MyOrder;