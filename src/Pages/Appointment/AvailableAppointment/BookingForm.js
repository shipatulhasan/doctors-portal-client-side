import React, {useContext} from "react";
import Button from "../../../components/Button";
import { format } from "date-fns";
import {AuthContext} from '../../../components/AuthProvider/AouthProvider'
import toast from "react-hot-toast";

const BookingForm = ({ bookingTreatment, selected,setBookingTreatement,refetch }) => {
  const { name, slots, price } = bookingTreatment;
  const date = format(selected, "PP");
  const {user} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const slot = form.slot.value
    const date = form.date.value

    const booking = {
      appointment_date:date,
      treatement:bookingTreatment.name,
      patient:name,
      slot,
      email,
      phone,
      price
    }

    // post data

    fetch('http://localhost:5000/bookings',{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      if(data.acknowledged){
        toast.success('booking confirmed')
        form.reset()
        refetch()
        setBookingTreatement(null)
      }
      else{
        toast.error(data.message)
        form.reset()
      }
    })
    .catch(err=>console.error(err))


  //   console.log(booking)
};


  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold ">{name}</h3>
          <form onSubmit={handleSubmit}>
            <div className="card-body space-y-10">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text bg-gradient-to-r from-secondary to-primary px-3 py-1 rounded-full text-white ">
                      Selected date
                    </span>
                  </label>
                  <input
                    name="date"
                    type="text"
                    defaultValue={date}
                    className="py-2 border-b border-slate-400 bg-transparent  focus:outline-none "
                    readOnly
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label ">
                    <span className="label-text  bg-gradient-to-r from-secondary to-primary px-3 py-1 rounded-full text-white ">
                      Select Time
                    </span>
                  </label>

                  <select
                    name="slot"
                    className="py-2 border-b border-slate-400 bg-transparent  focus:outline-none placeholder:text-slate-900 hover:cursor-pointer"
                  >
                    {slots.map((slot, i) => (
                      <option key={i}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
             
             
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                placeholder="Write your name"
                className="py-2 border-b border-slate-400 bg-transparent  focus:outline-none "
               
              />
              <input
                name="email"
                defaultValue={user?.email}
                type="email"
                placeholder="Write your email"
                className="py-2 border-b border-slate-400 bg-transparent focus:outline-none "
                readOnly
              />
              <input
                name="phone"
                type="text"
                placeholder="Write your phone number"
                className="py-2 border-b border-slate-400 bg-transparent  focus:outline-none "
                required
              />
              <div className=" mt-6 flex justify-end">
                <Button text={"Submit"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
