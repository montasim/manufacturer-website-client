import React from 'react';
import { useAuthState, useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';
import auth from '../../Hooks/Firebase.Init';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        user,
        loading,
        error
    ] = useAuthState(auth);

    const [
        updateEmail,
        eUpdating,
        eError
    ] = useUpdateEmail(auth);

    const [
        updateProfile,
        pUpdating,
        pError
    ] = useUpdateProfile(auth);

    const onSubmit = async (data) => {
        const displayName = data?.name;
        const photoURL = data?.photo;

        await updateProfile({ displayName, photoURL });
        await updateEmail(data?.email);

        toast.success(
            <div>
                <h5 className='text-xl'>Profile Updated</h5>

                <p>Name: {displayName}</p>
                <p>Email: {data?.email}</p>
                <p>PhotoURL: {photoURL}</p>
            </div>
        );
    };

    if (loading || eUpdating || pUpdating) {
        return <Loading />;
    };

    console.log(user)

    return (
        <div className='card items-center justify-center'>
            <div className='card-body'>
                <h3 className='text-4xl font-bold leading-6 text-secondary mb-4'>Update Your Profile</h3>
                <p className='mt-1 text-md text-gray-600'>
                    This information will be used to login so be careful what you share.
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input
                                type='text'
                                placeholder={user?.displayName || 'Provide your name'}
                                className='input input-bordered w-full max-w-xs'
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                        </label>
                        <label className='label'>
                            {errors?.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.name?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input
                                type='email'
                                placeholder={user?.email}
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
                        </label>
                        <label className='label'>
                            {errors?.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.email?.message}</span>}
                            {errors?.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors?.email?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Photo</span>
                        </label>
                        <label className="input-group">
                            <span>Photo</span>
                            <input
                                type='text'
                                placeholder={user?.photoURL || 'Provide your photoURL'}
                                className='input input-bordered w-full max-w-xs'
                                {...register('photo', {
                                    required: {
                                        value: true,
                                        message: 'Photo is Required'
                                    }
                                })}
                            />
                        </label>
                        <label className='label'>
                            {errors?.photo?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.photo?.message}</span>}
                        </label>
                    </div>

                    <p className='text-center text-red-500 mb-4'>{error || eError || pError}</p>

                    <input className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary max-w-xl' type='submit' value='Update Profile' />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;