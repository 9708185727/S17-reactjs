import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../constants/regex'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../redux/auth/authActions';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';
const SignUp = () => {
  const {register,handleSubmit,formState,watch}=useForm()
  const [showpassword,setShowpassword]=useState(false)
  const {loading,error}=useSelector((state)=>state.auth)
  const {errors}=formState
  const dispatch=useDispatch()
const password=watch("password")
  function SubmitForm(data){
  dispatch(userRegister(data))
  }
  useEffect(()=>{
  toast(error,{
    type:"error",
    autoClose:1500,
  })
  },[error])

  
  return (
    <>
     <form
      className="w-full bg-slate-100 py-10 px-14 shadow"
     onSubmit={handleSubmit(SubmitForm)}
    >
      <div className="py-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "name is required",
           
          })}
          className="w-full mt-1 py-1 px-2 rounded"
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.name?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          {...register("address", {
            required: "address is required",
           
          })}
          className="w-full mt-1 py-1 px-2 rounded"
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.address?.message}
        </p>
      </div>
      <div className="py-1">
        <label htmlFor="Phone">Phone</label>
        <input
          type="Number"
          id="phone"
          {...register("phone", {
            required: "phone is required",
           
          })}
          className="w-full mt-1 py-1 px-2 rounded"
        />
        <p className="text-red-500 text-sm my-1 mt-2">
          {errors.phone?.message}
        </p>
      </div>

      
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
      {/* //password */}
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
                  // pattern:{
                  //   value:PASSWORD_REGEX,
                  //   message:"password contains atleast one UpperCase, LowerCase and digits"

                  // }
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
            {/* //confirmPassword */}
             <div className="py-1 relative">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type={showpassword?"text":"password"}
                      id="password"
                      className="w-full mt-1 py-1 px-2 rounded"
                      {...register("confirmPassword", {
                        required: "confirmpassword is required",
                      validate:(value)=>{
                      return value==password||"Password and confirmpassword doesnot match"
                       }                 
                         })}
                    />
                    <p className="text-red-500 text-sm my-1 mt-2">
                      {errors.confirmPassword?.message}
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
          Register{loading?<Spinner className='w-4 h-4'/>:null}
        </button>
      </div>
      </form>
    </>
  )
}

export default SignUp
