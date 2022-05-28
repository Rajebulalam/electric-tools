import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Profile from './Profile';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch(`http://localhost:5000/users?email=${user?.email}`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>;
    }

    const email = user?.email;
    const name = user?.displayName;

    const updateProfile = event => {
        event.preventDefault();
        const education = event.target.education.value;
        const district = event.target.district.value;
        const city = event.target.city.value;
        const phone = event.target.phone.value;
        const linkedin = event.target.linkedin.value;
        const img = event.target.img.value;
        const update = {
            name,
            email,
            education,
            district,
            city,
            phone,
            linkedin,
            img
        };

        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    return (
        <section className='py-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='bg-white rounded-sm py-4 flex items-center justify-center'>
                    <div className='text-center'>
                        <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-3xl text-secondary pb-8'>Your Profile</h2>
                        <p style={{ fontFamily: 'Merienda' }} className='text-2xl font-bold pb-2'> {user?.displayName} </p>
                        <p className='text-xl font-medium'> {user?.email} </p>
                        {
                            users.map(use => <Profile
                                key={use._id}
                                use={use}
                            ></Profile>)
                        }
                    </div>
                </div>
                <div className='bg-white rounded py-4 flex items-center justify-center'>
                    <div>
                        <h2 style={{ fontFamily: 'Merienda' }} className='font-bold text-3xl text-secondary pb-6'>Update Profile</h2>
                        <form onSubmit={updateProfile}>
                            <div className="pb-4">
                                <label style={{ fontFamily: 'Merienda' }} className='font-bold' htmlFor="education">Education</label>
                                <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" name="education" id="education" />
                            </div>
                            <div className="pb-4">
                                <label style={{ fontFamily: 'Merienda' }} className='font-bold' htmlFor="district">District</label>
                                <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' t type="text" name="district" id="district" />
                            </div>
                            <div className="pb-4">
                                <label style={{ fontFamily: 'Merienda' }} className='font-bold' htmlFor="city">City</label>
                                <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="city" id="city" />
                            </div>
                            <div className="pb-4">
                                <label style={{ fontFamily: 'Merienda' }} className='font-bold' htmlFor="phone">Phone</label>
                                <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="phone" id="phone" />
                            </div>
                            <div className='pb-4'>
                                <label style={{ fontFamily: 'Merienda' }} className='font-bold' htmlFor="linkedin">Linkedin Profile Link</label>
                                <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="linkedin" id="linkedin" />
                            </div>
                            <div className="pb-4">
                                <label style={{ fontFamily: 'Merienda' }} className='font-bold' htmlFor="img">Image Link</label>
                                <input className='bg-slate-200 p-3 w-full lg:max-w-lg rounded-sm' type="text" name="img" id="img" />
                            </div>
                            <div>
                                <button type="submit" className='btn'>Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;