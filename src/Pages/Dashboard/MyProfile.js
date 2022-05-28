import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/users', {
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th> S.N. </th>
                            <th>Email</th>
                            <th>Email</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>Blue</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyProfile;