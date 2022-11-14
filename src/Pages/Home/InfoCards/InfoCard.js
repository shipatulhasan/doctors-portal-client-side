import React from 'react';

const InfoCard = ({data}) => {

const {icon,title,details,bgColor} = data

    return (
        
               <div className= {`py-8 px-4 duration-300 transform ${bgColor}  rounded shadow-sm flex items-center  gap-5`}>
        <div className="">
          <img  src={icon} alt="" />
        </div>
        <div className='space-y-4'>
        <p className="text-2xl md:text-3xl text-white font-bold ">{title}</p>
        <p className=" text-white">
          {details}
        </p>
        </div>
        
      </div>
        
    );
};

export default InfoCard;