import React from 'react'
import loginBg from "../../assets/image/login-bg.png";
import { LOGIN_ROUTE } from '../../constants/routes';
import SignUp from '../../components/auth/SignUp';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
     <section className="py-12  min-h-[90vh]">
      <img src={loginBg} className="fixed top-0 left-0 opacity-10 -z-10" />
      <div className="max-w-screen-xl mx-12 px-4">
        <div className="flex flex-col xl:flex-row items-center justify-around min-h-[75vh]">
          <div className="md:w-1/2">
            <p className="text-3xl">Welcome to our</p>
            <h1 className="text-7xl text-teal-700">Shopping Site</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              labore exercitationem ipsum architecto sapiente optio.
            </p>
            <p className="mt-8">
              Already have an account? Please
              <Link to={LOGIN_ROUTE} className="text-teal-800 ml-2">
                Sign In
              </Link>
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:px-20 mt-12">
             <SignUp /> 
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Register
