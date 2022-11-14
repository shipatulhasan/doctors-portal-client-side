import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import { format } from "date-fns";

const AvailableAppointment = ({ selected,setBookingTreatement }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("appointment.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div className="py-20">
      <div className="pb-10">
        {selected ? (
          <p className="text-center text-secondary font-bold">
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
    </div>
  );
};

export default AvailableAppointment;
