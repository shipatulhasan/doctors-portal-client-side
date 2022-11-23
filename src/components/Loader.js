import React from 'react';



const Loader = () => {
    return (
      <div  className='flex justify-center h-60 items-center'>
         <div className="spinner-border animate-spin  w-8 h-8 border-4 rounded-full text-blue-300" role="status">
        <span className="visually-hidden">...</span>
      </div>
      </div>
       
       
    );
};

export default Loader;