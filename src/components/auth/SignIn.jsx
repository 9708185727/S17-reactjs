import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../constants/regex";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Spinner from "../Spinner";

import { useDispatch, useSelector } from "react-redux";

import { userLogin } from "../../redux/auth/authActions";

const SignForm = () => {
  const [showpassword,setShowpassword]=useState(false)
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
 const {loading,error}=useSelector((state)=>state.auth)
  const dipatch= useDispatch()
  function SubmitForm(data) {
    dipatch(userLogin(data))
   
  }
useEffect(()=>{
toast(error,{
  type:"error",
  autoClose:1500,
})
},[error])
  return (
    <form
      className="w-full bg-slate-100 py-10 px-14 shadow"
      onSubmit={handleSubmit(SubmitForm)}
    >
      <div className="py-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "email should include example12@gmail.com",
            },
          })}
          className="w-full mt-1 py-1 px-2 rounded"
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.email?.message}
        </p>
      </div>
      <div className="py-1 relative">
        <label htmlFor="password">Password</label>
        <input
          type={showpassword?"text":"password"}
          id="password"
          className="w-full mt-1 py-1 px-2 rounded"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 8,
              message: "password length must be greater than 8",
            },
          })}
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.password?.message}
        </p>
        <button className="absolute right-3 top-10" type="button" onClick={()=>setShowpassword(!showpassword)}>
          {
            showpassword?<FaEye/>:<FaEyeSlash/>
          }
        </button>
      </div>
      <div className="mt-5 text-center">
        <button
          type="submit"
          className="bg-teal-700 text-white rounded px-5 py-1 cursor-pointer flex items-center mx-auto "
        >
          Login{loading?<Spinner className='w-4 h-4' />:null}
        </button>
      </div>
    </form>
  );
};

export default SignForm;
