import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from './Shared/Loading';
import googleIcon from '../images/google.png';
import githubIcon from '../images/github.png';
import faceBookIcon from '../images/facebook.png';
import useToken from '../hooks/useToken';

const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || googleUser);

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate]);

    if (loading || updating || googleLoading || githubLoading) {
        return <Loading></Loading>;
    }

    let signupError;
    if (error || updateError || googleError || githubError) {
        signupError = <p>{error?.message} || {updateError?.message} || {googleError?.message} || {githubError?.message} </p>
    }


    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data?.name });
        alert('User Created & Profile Updated');
    };

    return (
        <section style={{ backgroundColor: '#FBFAF9 ' }} className='px-4 py-14 sm:p-14'>
            <div className='py-8 bg-white rounded-md w-full sm:w-5/12 mx-auto px-6'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-3xl text-secondary pb-6'>Sign up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full lg:max-w-lg">
                        <label className="label">
                            <span style={{ fontFamily: 'Merienda' }} className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full lg:max-w-lg"
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Name Required'
                                }
                            })}
                        />
                        <label className="label">
                            {
                                errors.name?.type === 'required' &&
                                <span className="text-red-500">{errors.name.message}</span>
                            }
                        </label>
                    </div>
                    <div className="form-control w-full lg:max-w-lg">
                        <label className="label">
                            <span style={{ fontFamily: 'Merienda' }} className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full lg:max-w-lg"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email Required"
                                },
                                pattern: {
                                    value: /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/,
                                    message: 'Please provide a valid email'
                                }
                            })}
                        />
                        <label className="label">
                            {
                                errors.email?.type === 'required' && <span className="text-red-500">{errors.email.message}</span>
                            }
                            {
                                errors.email?.type === 'pattern' && <span className="text-red-500">{errors.email.message}</span>
                            }
                        </label>
                    </div>
                    <div className="form-control w-full lg:max-w-lg">
                        <label className="label">
                            <span style={{ fontFamily: 'Merienda' }} className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full lg:max-w-lg"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password Required'
                                },
                                pattern: {
                                    value: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                    message: 'Please provide a valid password that should contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character and minimum 8 digit or more'
                                }
                            })}
                        />
                        <label className="label">
                            {
                                errors.password?.type === 'required' && <span className="text-red-500">{errors.password.message}</span>
                            }
                            {
                                errors.password?.type === 'pattern' && <span className="text-red-500">{errors.password.message}</span>
                            }
                        </label>
                    </div>
                    <div>
                        <p className='text-red-500'>{signupError}</p>
                    </div>
                    <div className='text-center pt-6'>
                        <button type="submit" className='btn px-8 bg-white text-secondary hover:bg-gradient-to-b hover:from-accent hover:to-neutral hover:text-white'>Register</button>
                    </div>
                    <div className='pt-4 text-center'>
                        <Link className='text-secondary font-medium' to='/signIn'>Already have an account?</Link>
                    </div>
                    <div className="divider">OR</div>
                    <div className='flex items-center justify-center pt-4'>
                        <button onClick={() => signInWithGoogle()} className='p-3 border-2 border-gray-200 w-[60px] h-[60px] mx-2' type="submit"> <img src={googleIcon} alt="google-icon" /> </button>
                        <button onClick={() => signInWithGithub()} className='p-3 border-2 border-gray-200 w-[60px] h-[60px] mx-2' type="submit"> <img src={githubIcon} alt="google-icon" /> </button>
                        <button className='p-3 border-2 border-gray-200 w-[60px] h-[60px] mx-2' type="submit"> <img src={faceBookIcon} alt="google-icon" /> </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Signup;