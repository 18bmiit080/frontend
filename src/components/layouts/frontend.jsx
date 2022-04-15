import React from 'react'
import { Outlet } from 'react-router-dom'
import Admin_dashboard from './admin_dashboard'

const Frontend = () => {
  return (
    <div>
        
        <Admin_dashboard/>
        <Outlet/>


    </div>
  )
}

export default Frontend