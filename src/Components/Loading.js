import React from 'react';

const Loading = () => {
    return (
        <div>
            <progress class="progress progress-info w-56" value="40" max="100"></progress>
        </div>
    );
};

export default Loading;