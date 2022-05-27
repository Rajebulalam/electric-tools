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
                console.log(data);
                setItems(data);
            })
    }, [url]);

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.total}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrder;