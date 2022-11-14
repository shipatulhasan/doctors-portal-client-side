import React from 'react';

const TestimonialCard = ({data}) => {

    const {img,title,city,review} = data
    return (
        <div className= 'py-8 px-4 duration-300 transform  rounded shadow-lg shadow-slate-300 space-y-8'>
          
        <div className='space-y-4'>
        
        <p className=" text-black">
          {review}
        </p>
        </div>

        <div className="flex gap-4">
          <img
            className='object-cover w-12 h-12 rounded-full shadow ring-2 ring-primary border-2'
            src={img}
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold capitalize">{title}</p>
            <p className="text-sm text-gray-800">{city}</p>
          </div>
        </div>
        
      </div>
    );
};

export default TestimonialCard;