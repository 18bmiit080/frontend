import React from 'react'
import logos from "./images/logo.jpg"
import redd from "./images/red.png"

const Dashr_resetp = () => {
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
                 <a href="#" class="nav_link " style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </a> 
                <a href="#" class="nav_link " style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-user nav_icon'></i> <span class="nav_name">Patients</span> </a>
                <a href="#" class="nav_link " style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-plus-medical nav_icon'></i> <span class="nav_name">Doctors</span> </a>
                 <a href="#" class="nav_link " style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-bell nav_icon'></i> <span class="nav_name">Notifications</span> </a> 
                 <a href="#" class="nav_link active" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-user-account nav_icon'></i> <span class="nav_name">Profile</span> </a> 
                 </div>
            </div> <a href="#" class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
        </nav>
    </div>
        
    </body>

    <div class="container rounded bg-white mt-5 mb-5" style={{width:"50%"}}>
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5" style={{marginTop:"100px"}}><img class="rounded-circle mt-5" width="150px" src={redd}/></div>
        </div>
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h1 class="text-right">Reset Password</h1>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Old Password</label><input type="text"  value=""  class="form-control" style={{width:"400%",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">New Password</label><input type="text"  value=""  class="form-control" style={{width:"400%",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>

                <div class="row mt-2">
                    <div class="col-md-6"><button class="btn btn-success" type="button ">Change</button></div>
                </div>
            </div>
        </div>
    </div> 


    </>
  )
}

export default Dashr_resetp