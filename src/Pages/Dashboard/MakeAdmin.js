import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Admin from './Admin';

const MakeAdmin = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/admins', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(
            res => res.json()
        )
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <section className='py-4'>
            <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-center text-3xl text-secondary pb-4'>Make Admin</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr style={{ fontFamily: 'Merienda' }} className='text-secondary'>
                            <th> S.N. </th>
                            <th>Email</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <Admin
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></Admin>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MakeAdmin;