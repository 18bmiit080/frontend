import React from 'react'
import logos from "./images/logo.jpg"
import redd from "./images/red.png"

const Dashr_resetp = () => {
  return (
    <>
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