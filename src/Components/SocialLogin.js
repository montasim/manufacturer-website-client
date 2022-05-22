import React from 'react';
import MainButton from './MainButton';

const SocialLogin = () => {
    return (
        <div>
            <div className='divider'>OR</div>

            <p className='text-center text-red-500 mb-3'>{ }</p>
            <MainButton design={'btn btn-active text-white uppercase w-full'} text={'Continue With Google'} />
        </div>
    );
};

export default SocialLogin;