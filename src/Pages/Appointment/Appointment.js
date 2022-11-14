import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";
import BookingForm from "./AvailableAppointment/BookingForm";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  const [bookingTreatment, setBookingTreatement] = useState(null);

  const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const email = form.email.value
      const phone = form.phone.value
      const time = form.time.value
      const date = form.date.value

      const booking = {
        name,
        email,
        phone,
        time,
        date
      }
      form.reset()
    //   console.log(booking)
      setBookingTreatement(null)
  };

  return (
    <div>
      <AppointmentBanner selected={selected} setSelected={setSelected} />
      <div>
        <AvailableAppointment
          selected={selected}
          setBookingTreatement={setBookingTreatement}
        />
      </div>

      <>
        {bookingTreatment && (
          <BookingForm
            bookingTreatment={bookingTreatment}
            
            selected={selected}
            handleSubmit={handleSubmit}
          />
        )}
      </>
    </div>
  );
};

export default Appointment;
