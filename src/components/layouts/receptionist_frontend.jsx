import React from 'react'
import { Outlet } from 'react-router-dom'
import Receptionist_dashboard from './receptionist_dashboard'


const Receptionist_frontend = () => {
  return (
    <div>
        <Receptionist_dashboard/>
        <Outlet/>
      


    </div>
  )
}

export default Receptionist_frontend