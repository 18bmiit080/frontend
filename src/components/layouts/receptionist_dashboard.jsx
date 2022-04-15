import React from 'react'
import logos from "./images/logo.jpg"
import {Link} from 'react-router-dom'

const Receptionist_dashboard = () => {
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
                 <Link to={"/dashr"} class="nav_link active" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </Link> 
                 <Link to={"/dashr_pat"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-user nav_icon'></i> <span class="nav_name">Patients</span> </Link>
                 <Link to={"/dashr_doc"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-plus-medical nav_icon'></i> <span class="nav_name">Doctors</span> </Link>
                 <Link to={"/add_ser"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-component nav_icon'></i> <span class="nav_name">Services</span> </Link> 
                 <Link to={"/dashr_not"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-bell nav_icon'></i> <span class="nav_name">Notifications</span> </Link> 
                 <Link to={"/dashr_pro"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-user-account nav_icon'></i> <span class="nav_name">Profile</span> </Link> 
                 </div>
            </div> <Link to={"/login"} class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </Link>
        </nav>
    </div>
    </body>

    </>
  )
}

export default Receptionist_dashboard