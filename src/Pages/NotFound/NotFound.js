import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../Components/MainButton';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col h-screen items-center justify-center my-4'>
            <h5 className='text-center text-xl text-gradient-to-r from-secondary to-primary w-full'>The Page You Are Looking Is</h5>
            <h1 className='text-6xl text-red-500 uppercase font-bold my-4'>Not Found</h1>
            <MainButton onClick={() => navigate('/')} design={'btn btn-active text-white uppercase mt-6'} text={'Back To Home'} />
        </div>
    );
};

export default NotFound;