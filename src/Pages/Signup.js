import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <section style={{ backgroundColor: '#FBFAF9 ' }} className='px-4 py-14 sm:p-14'>
            <div className='py-8 bg-white rounded-md w-full sm:w-5/12 mx-auto px-6'>
                <h2 style={{ fontFamily: 'Merienda' }} className='text-center font-bold text-3xl text-secondary pb-6'>Sign up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full lg:max-w-lg">
                        <label class="label">
                            <span style={{ fontFamily: 'Merienda' }} class="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" class="input input-bordered w-full lg:max-w-lg"
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Name Required'
                                }
                            })}
                        />
                        <label class="label">
                            {
                                errors.name?.type === 'required' &&
                                <span class="text-red-500">{errors.name.message}</span>
                            }
                        </label>
                    </div>
                    <div class="form-control w-full lg:max-w-lg">
                        <label class="label">
                            <span style={{ fontFamily: 'Merienda' }} class="label-text font-semibold">Email</span>
                        </label>
                        <input type="text" placeholder="Your Email" class="input input-bordered w-full lg:max-w-lg"
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
                        <label class="label">
                            {
                                errors.email?.type === 'required' && <span class="text-red-500">{errors.email.message}</span>
                            }
                            {
                                errors.email?.type === 'pattern' && <span class="text-red-500">{errors.email.message}</span>
                            }
                        </label>
                    </div>
                    <div class="form-control w-full lg:max-w-lg">
                        <label class="label">
                            <span style={{ fontFamily: 'Merienda' }} class="label-text font-semibold">Password</span>
                        </label>
                        <input type="text" placeholder="Password" class="input input-bordered w-full lg:max-w-lg"
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
                        <label class="label">
                            {
                                errors.password?.type === 'required' && <span class="text-red-500">{errors.password.message}</span>
                            }
                            {
                                errors.password?.type === 'pattern' && <span class="text-red-500">{errors.password.message}</span>
                            }
                        </label>
                    </div>
                    <div className='text-center pt-6'>
                        <button type="submit" className='btn px-8 bg-white text-secondary hover:bg-gradient-to-b hover:from-accent hover:to-neutral hover:text-white'>Register</button>
                    </div>
                    <div className='pt-4 text-center'>
                        <Link className='text-secondary font-medium' to='/signIn'>Already have an account?</Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Signup;