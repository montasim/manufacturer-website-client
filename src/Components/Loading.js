import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-screen items-center justify-center my-16'>
            <progress className='progress progress-secondary w-56' value='40' max='100'></progress>
        </div>
    );
};

export default Loading;