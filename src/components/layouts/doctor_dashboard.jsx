import React from 'react'
import {Link} from 'react-router-dom'

const Doctor_dashboard = () => {
  return (
    <>
     <body id="body-pd">
    <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <div class="header_img">  <img src={logos}/> </div>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> <a href="#" class="nav_logo" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i  style={{color:"white",fontSize:"large"}}class='bx bx-user nav_icon'></i> <span class="nav_logo-name">Welcome</span> </a>
                <div class="nav_list">
                 <Link to={"/dashd"} class="nav_link active" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </Link> 
                 <Link to={"/dashd_pat"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-user nav_icon'></i> <span class="nav_name">Patients</span> </Link>
                <Link to={"/dashd_app"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-calender-plus nav_icon'></i> <span class="nav_name">Appointments</span> </Link>
                <Link to={"/dashd_pro"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-user-account nav_icon'></i> <span class="nav_name">Profile</span> </Link> 
                 </div>
            </div> <Link to={"/login"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </Link>
        </nav>
    </div>
    </body>
    
    
    </>
  )
}

export default Doctor_dashboard