import React from 'react';
import { toast } from 'react-toastify';

const Admin = ({ user, index, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://intense-garden-12250.herokuapp.com/admins/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an Admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast('Successfully make an admin');
                }
            })
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-sm bg-black hover:bg-white hover:text-black border-1 border-black">Make Admin</button> : 'Already Admin'}</td>
        </tr>
    );
};

export default Admin;