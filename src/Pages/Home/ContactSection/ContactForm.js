import React from "react";
import Button from "../../../components/Button";

const ContactForm = () => {
  return (
    <form>
      <div className="card-body space-y-10">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="form-control md:w-1/2">
            <input
              type="email"
              placeholder="Write your email"
              className="py-2 border-b border-slate-200 bg-transparent text-white focus:outline-none placeholder:text-slate-200"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <input
              type="text"
              placeholder="Subject"
              className="py-2 border-b border-slate-200 bg-transparent text-white focus:outline-none placeholder:text-slate-200"
              required
            />
          </div>
        </div>

        <div className="form-control mt-4">
          <textarea
            className="focus:outline-none text-white bg-transparent border-b border-slate-200 placeholder:text-slate-200"
            placeholder="Write your problem"
            rows="5"
          ></textarea>
        </div>
        <div className=" mt-6 flex justify-end">
          <Button text={"Submit"} />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
