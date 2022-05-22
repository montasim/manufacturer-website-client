import React from 'react';

const MainButton = ({ design, text }) => {
    return (
        <button className={design} > {text}</button >
    );
};

export default MainButton;