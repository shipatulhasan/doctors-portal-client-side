import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import {useQuery} from '@tanstack/react-query'
import { format } from "date-fns";
import Loader from "../../../components/Loader";
import BookingForm from "./BookingForm";

const AvailableAppointment = ({ selected }) => {

  const [bookingTreatment, setBookingTreatement] = useState(null);

  const date = format(selected, "PP")
  

  const {data:appointments,isLoading,refetch} = useQuery({
    queryKey:['appointments',date],
    queryFn:async()=>{
      const res = await fetch(`http://localhost:5000/appointmentOpotions?date=${date}`)
      const data = await res.json()
      return data
    }
  })

  if(isLoading){
    return <Loader />
  }


  return (
    <div className="py-20">
      <div className="pb-10">
        {selected ? (
          <p className="text-xl text-center text-secondary font-bold">
            Available Appointments on {format(selected, "PP")}{" "}
          </p>
        ) : (
          <p className="text-center text-secondary font-bold">Try again </p>
        )}
      </div>

      <div className="grid gap-10 md:grid-cols-3 mx-10">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment._id} appointment={appointment} setBookingTreatement={setBookingTreatement} />
        ))}
      </div>

      <>
        {bookingTreatment && (
          <BookingForm
            bookingTreatment={bookingTreatment}
            setBookingTreatement={setBookingTreatement}
            
            selected={selected}
            refetch={refetch}
            
          />
        )}
      </>
    </div>
  );
};

export default AvailableAppointment;
