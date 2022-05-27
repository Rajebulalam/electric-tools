import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MyProfile = () => {

    // const [users, setUsers] = useState([]);

    // const { data: users, isLoading, refetch } = useQuery('users', () => (
    //     fetch('http://localhost:5000/users').then(res => res.json())
    // ));

    // if (isLoading) {
    //     return <Loading></Loading>;
    // }

    return (
        <section className='py-4'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th> S.N. </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            users.map((user, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>Blue</td>
                                </tr>
                            )
                        } */}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyProfile;