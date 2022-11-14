import React, { useState } from 'react';

import banner from '../../assets/images/bg.png'
import img from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({selected, setSelected}) => {
    
    return (
        <div>
            <div
      className=" bg-no-repeat bg-cover bg-center flex flex-col justify-center min-h-[50vh] lg:min-h-[90vh]"
      style={{
        backgroundImage: `url(${banner})`
        
      }}
    >
      <div className="py-20 flex flex-col-reverse md:flex-row justify-center items-center mx-5 gap-10">
      <div className="bg-white shadow-xl p-5 rounded-xl">
      <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      
    />
      
      </div>
      <div className="w-full lg:w-1/2 ">
        <img
          src={img}
          className="w-11/12 mx-auto rounded-lg "
          alt=""
        />
      </div>
      </div>

     
    </div>
        </div>
    );
};

export default AppointmentBanner;