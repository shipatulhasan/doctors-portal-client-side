import React from 'react';

const Headline = ({headerInfo}) => {
    const {miniText,headline} = headerInfo
    return (
        <div>
              <p className='text-primary font-bold text-sm tracking-widest uppercase'>{miniText}</p>
                <h2 className='font-semibold text-3xl'>
                {headline}
                </h2>
        </div>
    );
};

export default Headline;