import React from 'react'
import logos from "./images/logo.jpg"
import { Link } from 'react-router-dom';

const Dasha_pro = () => {
  return (
    <>
    <div class="container rounded bg-white mt-5 mb-5" style={{width:"50%"}}>
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Edogaru</span><span> <div class="mt-5 text-center"><button class="btn btn-success" type="button ">Upload Image</button></div> </span></div>
        </div>
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text"  value=""  class="form-control" style={{width:"200%",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Contact Number</label><input type="text" class="form-control" placeholder="enter phone number" value="" style={{width:"95%",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address line 1" value="" style={{width:"95%",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="" style={{width:"95%",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-success" type="button ">Save Profile</button></div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Dasha_pro