import React from 'react';
import { useAuthState, useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading';
import auth from '../../../Hooks/Firebase.Init';

const UserProfile = () => {
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

    const updateUserProfile = (displayName, education, linkedin, photoURL) => {
        const userDetails = { displayName, education, linkedin, photoURL };

        // send data to server
        fetch('https://tools-manufacturer-server.herokuapp.com/add-user', {
            mode: 'no-cors',
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('User Data Added Successfully');
            });
    };

    const onSubmit = async (data) => {
        const displayName = data?.name;
        const education = data?.education;
        const linkedin = data?.linkedin;
        const photoURL = data?.photo;

        await updateProfile({ displayName, photoURL });
        updateUserProfile(displayName, education, linkedin, photoURL);
        await updateEmail(data?.email);
    };

    if (loading || eUpdating || pUpdating) {
        return <Loading />;
    };

    return (
        <div className='card items-center justify-center'>
            <div className='card-body'>
                <h3 className='text-4xl font-bold leading-6 text-secondary mb-4'>Update Your Profile</h3>

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
                            <span className="label-text">Educational Qualification</span>
                        </label>
                        <label className="input-group">
                            <span>Education</span>
                            <input
                                type='text'
                                placeholder={user?.education || 'Educational qualification'}
                                className='input input-bordered w-full max-w-xs'
                                {...register('education', {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                        </label>
                        <label className='label'>
                            {errors?.education?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.education?.message}</span>}
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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn Link</span>
                        </label>
                        <label className="input-group">
                            <span>LinkedIn</span>
                            <input
                                type='text'
                                placeholder={user?.linkedin || 'LinkedIn link'}
                                className='input input-bordered w-full max-w-xs'
                                {...register('linkedin', {
                                    required: {
                                        value: true,
                                        message: 'LinkedIn is Required'
                                    }
                                })}
                            />
                        </label>
                        <label className='label'>
                            {errors?.linkedin?.type === 'required' && <span className='label-text-alt text-red-500'>{errors?.linkedin?.message}</span>}
                        </label>
                    </div>

                    <p className='text-center text-red-500 mb-4'>{error || eError || pError}</p>

                    <input className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary max-w-xl' type='submit' value='Update Profile' />
                </form>
            </div>
        </div>
    );
};

export default UserProfile;