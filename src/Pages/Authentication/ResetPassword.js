import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.Init';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const navigate = useNavigate();

    const [
        sendPasswordResetEmail,
        rSending,
        rError
    ] = useSendPasswordResetEmail(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await sendPasswordResetEmail(data?.email);
        toast(`Email verification sent to ${data?.email}`);
    };

    if (rSending) {
        return <Loading />;
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

                        <p className='text-center text-red-500 mb-4'>{rError}</p>

                        <input className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full' type='submit' value='Reset Password' />
                    </form>

                    <button onClick={() => navigate('/login')} className='btn btn-active text-white font-semibold uppercase'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;