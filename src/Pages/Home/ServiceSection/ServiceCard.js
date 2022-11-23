import React from 'react';

const ServiceCard = ({data}) => {
    const {img,title,details} = data
    return (
        <div className= 'p-8 text-center duration-300 transform  rounded shadow-lg shadow-slate-200 space-y-5'>
        
          <img  className="mx-auto w-20" src={img} alt="" />
      
        <div className='space-y-4'>
        <p className="text-2xl md:text-2xl text-secondary font-bold ">{title}</p>
        <p>
          {details}
        </p>
        </div>
        
      </div>
    );
};

export default ServiceCard;