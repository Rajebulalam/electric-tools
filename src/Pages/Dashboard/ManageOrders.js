import React, { useEffect, useState } from 'react';

const ManageOrders = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])

    const handleDelete = id => {
        const url = `https://intense-garden-12250.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                }
            })
    }

    return (
        <section className='py-4'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl text-secondary font-bold text-center pb-6'>Manage  All Orders</h2>
            <div className="overflow-x-auto pt-8">
                <table className="table w-full">
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
                                    <td><label type='submit' htmlFor="confirm-modal" className="btn modal-button btn-sm bg-white text-secondary hover:bg-gradient-to-b hover:from-accent hover:to-neutral hover:text-white">
                                        Delete
                                    </label></td>
                                    <td>
                                        <input type="checkbox" id="confirm-modal" className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <label htmlFor="confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-black hover:bg-black border-0">✕</label>
                                                <p className="py-4 text-center pt-8 font-bold">Are you want to delete?</p>
                                                <div className="modal-action">
                                                    <label onClick={() => handleDelete(item._id)} htmlFor="confirm-modal" className="btn bg-black hover:bg-black border-0">Yes</label>
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
        </section>
    );
};

export default ManageOrders;