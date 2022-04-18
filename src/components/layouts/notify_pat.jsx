import React from 'react'
import recc from './images/shedu.jpg'
const Notify_pat = () => {
  return (
    <>
        
        <div class="container rounded bg-white mt-5 mb-5" style={{width:"50%",height:"600px"}}>
    <div class="row">
        <div class="col-md-3 border-right" style={{height:"600px"}}>
            <div class="d-flex flex-column align-items-center text-center p-3 py-5" style={{marginTop:"90px"}}><img class="rounded-circle mt-5" width="150px" height="200px"  src={recc}/></div>
        </div>
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h1 style={{textAlign:"center"}}>Notifications</h1>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Title</label><input type="text"   class="form-control" style={{width:"200%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8", color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Description</label><input type="text" class="form-control" placeholder="enter phone number"  style={{width:"95%",fontSize:"15px",height:"40px",boxShadow: "none",focusBorderColor: "#BA68C8",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/></div>
                    <div class="col-md-12"><label class="labels">Start Date</label> <input type="date" style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)",fontSize:"18px",boxShadow: "none",focusBorderColor: "#BA68C8"}}/> </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">End Date</label> <input type="date" style={{width:"100%",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)",fontSize:"18px",boxShadow: "none",focusBorderColor: "#BA68C8",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/> </div>
                    <div class="col-md-12"><label class="labels">Timings</label> <input type="time" style={{width:"100%",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)",fontSize:"18px",boxShadow: "none",focusBorderColor: "#BA68C8",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/> </div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-success" type="button ">SEND</button></div>
            </div>
        </div>
    </div> 




    </>
  )
}

export default Notify_pat