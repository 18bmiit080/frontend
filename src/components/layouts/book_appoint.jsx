import React from 'react'
import logos from "./images/logo.jpg"
import bookss from "./images/book.jpg"

const Book_appoint = () => {
    function GetSelectedTextValue() 
  {
    var x = document.getElementById("ddlSuggestion");
var selectedValue = x.value;
if(selectedValue=="Sports")
{
document.getElementById("txtComments").style.display = "block";
}
else
{
document.getElementById("txtComments").style.display = "none";
}
}
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
                <div class="nav_list" >
                 <a href="#" class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </a> 
                <a href="#" class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-user nav_icon'></i> <span class="nav_name">Patients</span> </a>
                <a href="#" class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-plus-medical nav_icon'></i> <span class="nav_name">Doctors</span> </a>
                 <a href="#" class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-face nav_icon'></i> <span class="nav_name">Receptionist</span> </a> 
                 <a href="#" class="nav_link " style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-report nav_icon'></i> <span class="nav_name">Reports</span> </a>
                 <a href="#" class="nav_link active" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bxs-user-account nav_icon'></i> <span class="nav_name">Profile</span> </a> 
                 </div>
            </div> <a href="#" class="nav_link" style={{padding: "1.5rem 0px 1.5rem 3.5rem"}}> <i style={{fontSize: "large"}}class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
        </nav>
    </div>
    </body>
    
    <div class="container rounded bg-white mt-5 mb-5" style={{width:"50%"}}>
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"style={{marginTop:"50px",height:"100%"}}><img class="rounded-circle mt-5" width="250px" height="300px" src={bookss} ></img></div>
        </div>
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h1 class="text-right">Book Appointment</h1>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Domain of Treatment </label>
                    <select style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}} name="color" id="ddlSuggestion"> 
                    <option>---SELECT---</option>  
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Sports">Sports</option>
  </select>
  </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"> <label class="labels">Area Of Pain</label>
                    <input type="text" style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)",fontSize:"18px"}}/></div>
                    <div class="col-md-12"><label class="labels">Select Date</label><br/>
                <br/> 
                    <input type="date" style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)",fontSize:"18px"}}/> </div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-success" type="button ">Book Now</button></div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Book_appoint