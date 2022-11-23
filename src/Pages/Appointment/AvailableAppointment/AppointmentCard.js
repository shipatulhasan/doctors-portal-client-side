import React from 'react';


const AppointmentCard = ({appointment, setBookingTreatement}) => {
    const {name,slots,price} = appointment
    return (
        <div className= 'p-8 text-center duration-300 transform  rounded shadow-lg shadow-slate-200 space-y-5'>
    
      <div className='space-y-4'>
      <p className="text-2xl md:text-2xl text-primary font-bold ">{name}</p>
      <p>
          {
              slots?.length ? slots[0] : 'Try another day'
          }
      </p>
      <p>
        {slots?.length} {slots.length > 1 ?'Spaces':'Space'} Available
      </p>
      <p className='font-semibold'>
        Price ${price}
      </p>
      </div>
      <div>

      
      <label 
      disabled={slots?.length===0 }
      onClick={()=>setBookingTreatement(appointment)}
      htmlFor="booking-modal" 
      className="btn px-5 bg-gradient-to-r from-secondary to-primary text-white border-none">Book Appointment</label>

      </div>

    </div>
    );
};

export default AppointmentCard;