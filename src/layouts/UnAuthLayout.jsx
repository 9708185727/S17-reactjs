import React from 'react'
import { Outlet } from 'react-router-dom'
import { HOME_ROUTE } from '../constants/routes'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const UnAuthLayout = () => {
    const {user} =useSelector((state)=>state.auth)
    return (
      <>
       
        {user?<Navigate to={HOME_ROUTE}/>:<Outlet/>}
      </>
  )
}

export default UnAuthLayout
