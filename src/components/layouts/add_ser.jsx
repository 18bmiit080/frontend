import React from 'react'
import recc from './images/add.jpg'

const add_ser = () => {
  return (
    <>

<div class="container rounded bg-white mt-5 mb-5" style={{width:"50%",height:"600px"}}>
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5" style={{marginTop:"90px"}}><img class="rounded-circle mt-5" width="150px" height="200px"  src={recc}/><span> <div class="mt-5 text-center"><button class="btn btn-success" type="button ">Upload Image</button></div> </span></div>
        </div>
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h2 style={{textAlign:"center"}}>Service Details</h2>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Machine Name</label><input type="text"   class="form-control" style={{width:"200%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Description</label><input type="text" class="form-control" placeholder="enter phone number"  style={{width:"95%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                    <div class="col-md-12"><label class="labels">Price</label><input type="text" class="form-control" placeholder="enter address line 1"  style={{width:"95%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-success" type="button ">ADD</button></div>
            </div>
        </div>
    </div> 

    </>
  )
}

export default add_ser