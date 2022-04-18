import React from 'react'
import logos from "./images/logo.jpg"
import recc from "./images/rec.jpg"
import { Link } from 'react-router-dom';

const Add_rec = () => {
  return (
    <>

     
    <div class="container rounded bg-white mt-5 mb-5" style={{width:"50%",height:"600px"}}>
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5" style={{marginTop:"90px"}}><img class="rounded-circle mt-5" width="150px" height="200px"  src={recc}/></div>
        </div>
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h2 style={{textAlign:"center"}}>Receptionist Details</h2>
                </div>
                <form action="">
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text"   class="form-control" style={{width:"200%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Contact Number</label><input type="text" class="form-control" placeholder="enter phone number"  style={{width:"95%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address line 1"  style={{width:"95%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>
                <div class="row mt-2">
                <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id"  style={{width:"95%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Password</label><input type="password" data-type="password"  class="form-control" style={{width:"200%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>
                <div class="mt-5 text-center"><Link to="/frontend/dasha_rec"><button class="btn btn-success" type="button ">ADD</button></Link></div>
                </form>
                
            </div>
        </div>
    </div> 
    </>
  )
}

export default Add_rec