import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import {AuthContext} from "../../components/AuthProvider/AouthProvider";
import toast from "react-hot-toast";
import useToken from '../../Hooks/useToken'

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [firebaseError, setFirebaseError] = useState("");
  const [loginUserEmail,setLoginUserEmail] = useState("")
  const [token] = useToken(loginUserEmail)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // use navigation
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";


  if(token){
    navigate(from, { replace: true })
    return
  }

  const handleLogin = (data) => {
    const email = data?.email;
    const pass = data?.password;

    signIn(email, pass)
      .then((result) => {
        const user = result.user
        // console.log(result.user);
        toast.success("Successfully logged in");
        reset();
        setLoginUserEmail(user?.email)
        
      })
      .catch((err) => {
        const message = err.message;
        setFirebaseError(message.split("/")[1].replace(/[)-]/g, " "));
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-96 mx-auto">
      <div className="card-body border border-secondary shadow-xl shadow-slate-300">
        <h2 className="text-center text-2xl mb-6">Login</h2>

        {firebaseError && (
          <p className="text-red-500 text-lg">{firebaseError}</p>
        )}
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-8">
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

            <div className="w-full">
              <input
                type="password"
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
              {errors.password && (
                <span className="text-red-500">{errors.password?.message}</span>
              )}
              <label className="label flex justify-end">
                <Link className="label-text-alt">Forgot password</Link>
              </label>
            </div>
          </div>

          <div>
            <Button text={"Submit"} />
          </div>
        </form>
        <div>
          <p className="pt-2">
            Don't have an account ?{" "}
            <Link to="/signup" className="text-primary">
              Please signup
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="hover:cursor-pointer w-2/3 mx-auto flex justify-start  items-center py-2 px-4 border-secondary border rounded-lg">
            <FcGoogle className="mr-3" />
            <p> Sign in with google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
