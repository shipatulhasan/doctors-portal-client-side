import React from "react";
import Button from "../../../components/Button";
import { format } from "date-fns";

const BookingForm = ({ bookingTreatment,handleSubmit, selected }) => {
  const { name, slots } = bookingTreatment;
  const date = format(selected, "PP");

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
          <h3 className="text-lg font-bold">{name}</h3>
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
                    className="py-2 border-b border-slate-900 bg-transparent text-black focus:outline-none placeholder:text-slate-900"
                    readOnly
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label ">
                    <span className="label-text bg-gradient-to-r from-secondary to-primary px-3 py-1 rounded-full text-white ">
                      Select Time
                    </span>
                  </label>

                  <select
                    name="time"
                    className="py-2 border-b border-slate-900 bg-transparent text-black focus:outline-none placeholder:text-slate-900 hover:cursor-pointer"
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
                placeholder="Write your name"
                className="py-2 border-b border-slate-900 bg-transparent text-black focus:outline-none placeholder:text-slate-900"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Write your email"
                className="py-2 border-b border-slate-900 bg-transparent text-black focus:outline-none placeholder:text-slate-900"
                required
              />
              <input
                name="phone"
                type="text"
                placeholder="Write your phone number"
                className="py-2 border-b border-slate-900 bg-transparent text-black focus:outline-none placeholder:text-slate-900"
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
