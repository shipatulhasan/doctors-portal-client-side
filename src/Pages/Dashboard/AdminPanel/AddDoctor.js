import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader";
import toast from 'react-hot-toast'

const AddDoctor = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()

  const { data: speciality, isLoading } = useQuery({
    queryKey: ["appointmentspeciality"],
    queryFn: () =>
      fetch("http://localhost:5000/appointmentspeciality").then((res) =>
        res.json()
      ),
  });

  const handleDoctor = (data) => {
    console.log(data);
    const image = data.img[0]
    const formData = new FormData();
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`

    fetch(url,{
        method:'post',
        body:formData
    })
    .then(res=>res.json())
    .then(imgData=>{
        if(imgData.success){
            const img = imgData.data.url
            const doctor = {
                name:data.name,
                email:data.email,
                speciality:data.speciality,
                thumbnail:img
            }

            fetch('http://localhost:5000/doctors',{
                method:'post',
                headers:{
                    'content-type':'application/json',
                    authorization:`Bearer ${localStorage.getItem('my-token')}`
                },
                body:JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    toast.success('Successfully added')
                    reset()
                    navigate('/dashboard/manage-doctors')
                }
            })
            .catch(err=>console.error(err))
        }
        
    })
    .catch(err=>console.error(err))


  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-96">
      <div className="card-body border border-secondary shadow-xl shadow-slate-300">
        <h2 className="text-center text-2xl mb-6">Add a Doctor</h2>

        <form onSubmit={handleSubmit(handleDoctor)}>
          <div className="space-y-8">
            <div>
              <input
                {...register("name", {
                  required: "You have to add name",
                })}
                type="name"
                placeholder="type name..."
                className="py-2 w-full border-b border-slate-400 bg-transparent focus:outline-none "
              />
              {<errors className="name"></errors> && (
                <span className="text-red-500">{errors.name?.message}</span>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder="type email..."
                className="py-2 w-full border-b border-slate-400 bg-transparent focus:outline-none "
              />
              {errors.email && (
                <span className="text-red-500">{errors.email?.message}</span>
              )}
            </div>

            <div className="form-control w-full border border-slate-400 px-3">
              <label className="label ">
                <span className="label-text ">speciality</span>
              </label>

              <select
                name="speciality"
                {...register("speciality")}
                className="py-2 bg-transparent  focus:outline-none placeholder:text-slate-900 hover:cursor-pointer"
              >
                {speciality.map((field) => (
                  <option key={field._id}>{field.name}</option>
                ))}
              </select>
            </div>

            <div>
              <input
                {...register("img")}
                type="file"
                placeholder="upload image"
                className="focus:outline-none"
              />
            </div>

            <div>
              <Button text={"Add Doctor"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
