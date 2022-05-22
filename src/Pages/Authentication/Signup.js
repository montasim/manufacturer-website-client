import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.Init';

const Signup = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        sendEmailVerification,
        vSending,
        vError
    ] = useSendEmailVerification(auth);

    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError
    ] = useSignInWithGoogle(auth);

    if (eLoading || gLoading || vSending) {
        return <Loading />;
    };

    if (eUser || gUser) {
        toast.success(`Welcome ${eUser?.displayName || eUser?.email || gUser?.user?.displayName} `);

        navigate('/');
    };

    const onSubmit = async (data) => {
        createUserWithEmailAndPassword(data?.email, data?.password);
        await sendEmailVerification();
        toast(`Email verification sent to ${data?.email}`);
    };

    return (
        <div className='flex h-screen items-center justify-center my-16'>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <h2 className='text-center text-2xl font-bold'>Signup</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='form-control w-full max-w-xs'>
                            <label className='label'>
                                <span className='label-text'>Name</span>
                            </label>
                            <input
                                type='text'
                                placeholder='Your Name'
                                className='input input-bordered w-full max-w-xs'
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors?.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.name?.message}</span>}
                            </label>
                        </div>

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

                        <p className='text-center text-red-500 mb-4'>{eError?.message.slice(10) || vError}</p>

                        <input className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full' type='submit' value='Signup' />

                        <p className='text-lg mt-3 text-center'><small>Forgot password? <Link className='text-secondary' to='/reset-password'>Reset Password</Link></small></p>

                        <p className='text-lg mt-3 text-center'><small>Already have an account? <Link className='text-secondary' to='/login'>Login</Link></small></p>
                    </form>

                    <div className='divider'>OR</div>

                    <p className='text-center text-red-500 mb-3'>{gError}</p>

                    <button onClick={() => signInWithGoogle()} className='btn btn-active text-white uppercase w-full' > Continue With Google</button >
                </div>
            </div>
        </div>
    );
};

export default Signup;