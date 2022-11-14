import React from 'react';

const Button = ({text}) => {
    return (
        <div>
            <button className="px-4 py-2 rounded font-semibold text-white bg-gradient-to-r from-secondary to-primary border-none">{text}</button>
        </div>
    );
};

export default Button;