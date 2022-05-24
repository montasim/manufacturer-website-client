import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../Components/MainButton';
import e404 from '../../Assets/GIF/e404.gif';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col h-screen items-center justify-center my-16'>
            <img src={e404} alt="" />
            <button onClick={() => navigate('/')} className='btn btn-active text-white uppercase'>Back to home</button>
        </div>
    );
};

export default NotFound;