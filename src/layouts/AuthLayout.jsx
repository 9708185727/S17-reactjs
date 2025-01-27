import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { LOGIN_ROUTE } from '../constants/routes'
import { Navigate } from 'react-router-dom'
const AuthLayout = () => {
   const {user} =useSelector((state)=>state.auth)
   console.log(user)
  return (
    <>
     
{user?<Outlet/>:<Navigate to={LOGIN_ROUTE}/>}
    </>
  )
}

export default AuthLayout
