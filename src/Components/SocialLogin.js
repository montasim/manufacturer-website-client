import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Hooks/Firebase.Init';
import Loading from './Loading';
import MainButton from './MainButton';

const SocialLogin = () => {
    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError
    ] = useSignInWithGoogle(auth);

    if (gLoading) {
        return <Loading />;
    };

    if (gUser) {
        toast.success(`Welcome ${gUser?.displayName || gUser?.email}`);
    };

    return (
        <div>
            <div className='divider'>OR</div>

            <p className='text-center text-red-500 mb-3'>{gError}</p>
            <MainButton onClick={() => signInWithGoogle()} design={'btn btn-active text-white uppercase w-full'} text={'Continue With Google'} />
        </div>
    );
};

export default SocialLogin;