import React from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data?.email);
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <h2 className='text-center text-2xl font-bold'>Reset Password</h2>

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

                        <p className='text-center text-red-500 mb-4'></p>

                        <input className='btn w-full max-w-xs text-white' type='submit' value='Reset Password' />
                    </form>

                    <button className='btn btn-outline'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;