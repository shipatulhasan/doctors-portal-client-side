import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../components/AuthProvider/AouthProvider";
import toast from "react-hot-toast";
import useToken from '../../Hooks/useToken'

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firebaseError,setFirebaseError] = useState('')
  const {createUser, updateUser} = useContext(AuthContext)
  const [createUserEmail,setCreateUserEmail] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [token]= useToken(createUserEmail)
  const navigate = useNavigate()
 


   if(token){
    navigate('/')
  }

  const handleRegister = (data) => {
    const email = data.email
    const pass = data.password
    const name = data.name
    const photo = data.photourl

    const profile = {
      displayName:name,
      photoURL:photo
    }


    createUser(email,pass)
    .then(result=>{
      const user = result.user
      console.log(user)
      

      handleUpdate(profile)

      // save user to database
      saveUser(name,email)


    })
    .catch(err=>{
      const message = err.message
      const myError = message.split('/')[1].replace(/[)-]/g,' ')
      setFirebaseError(myError)
      console.error(err.message)
    })
   
  };

const handleUpdate= (profile)=>{
  updateUser(profile)
  .then(()=>{ })
  .catch(err=>console.error(err.message))
}

const saveUser = (name,email)=>{
  fetch('http://localhost:5000/user',{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({
      name,
      email
    })
  })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('Succesfully registered')
        reset()
        // console.log(data)
      
        setCreateUserEmail(email)
      }
    
    
  })
}

  return (
    <div className="min-h-screen flex items-center justify-center w-96 mx-auto">
      <div className="card-body space-y-6 border border-secondary shadow-xl  shadow-slate-300">
       
        <h2 className="text-center text-xl mb-6">Sign up</h2>
        {
          firebaseError && <p className="text-red-500 text-lg">
            {firebaseError}
          </p>
        }
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="space-y-8">
            <div>
              <input
                {...register("name", { required: "user name is required" })}
                type="text"
                placeholder="Jhon doe"
                className="py-2 w-full border-b border-slate-400 bg-transparent focus:outline-none "
              />
              {errors.name && (
                <span className="text-red-500">{errors.name?.message}</span>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder="jhon@gmail.com"
                className="py-2 w-full border-b border-slate-400 bg-transparent focus:outline-none"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email?.message}</span>
              )}
            </div>
            <div>
              <input
                {...register("photourl")}
                type="text"
                placeholder="profile picture link"
                className="py-2 w-full border-b border-slate-400 bg-transparent focus:outline-none "
              />
            </div>
            <div>

            <div className="w-full relative flex items-center justify-center">
              <input
                type={isOpen ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters or longer",
                  },
                  pattern: {
                    value: /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                    message:
                      "password must have one special character,one uppercase, one number",
                  },
                })}
                placeholder="type password..."
                className="py-2 border-b border-slate-400 bg-transparent w-full focus:outline-none "
              />
              <div
                className="absolute right-0 mt-1 mr-3 cursor-pointer text-gray-500 text-sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
             
            </div>
            {errors.password && (
                <span className="text-red-500">{errors.password?.message}</span>
              )}
            </div>
          </div>

         
          <div className=" mt-6">
            <Button className="w-full" text={"Submit"} />
          </div>
        </form>
        <div>
          <p className="pt-2">
            Don't have an account ?{" "}
            <Link to="/login" className="text-primary">
              Please login
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="hover:cursor-pointer w-2/3 mx-auto flex justify-start  items-center py-2 px-4 border-secondary border rounded-lg">
            <FcGoogle className="mr-3" />
            <p> Sign up with google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
