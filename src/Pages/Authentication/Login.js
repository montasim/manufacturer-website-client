import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data.email, data.password);
    };

    return (
        <div className='flex h-screen items-center justify-center lg:my-8'>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <h2 className='text-center text-2xl font-bold'>Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text'>Email</span>
                            </label>
                            <input
                                type='email'
                                placeholder='Your Email'
                                className='input input-bordered w-full max-w-xs'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors?.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.email?.message}</span>}
                                {errors?.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors?.email?.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Password'
                                className='input input-bordered w-full max-w-xs'
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>

                        <p className='text-center text-red-500 mb-4'></p>

                        <input className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full' type='submit' value='Login' />

                        <p className='text-lg mt-3 text-center'><small>Forgot password? <Link className='text-secondary' to='/reset-password'>Reset Password</Link></small></p>

                        <p className='text-lg mt-3 text-center'><small>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Signup</Link></small></p>
                    </form>

                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Login;