import React from 'react'
import adminss from "./images/welcome.jpg"
import { Link } from 'react-router-dom';

const Dasha = () => {
   
  return (
    <>
        <div class="fade-in-image">
        <img  style={{marginLeft:"190px",borderRadius:"100px",height:"550px",marginTop:"80px"}}src={adminss}/>
        </div>
        <div class="fade-in-text">
        <h1 style={{textAlign:"center",marginTop:"20px"}}>Welcome Admin</h1>
        </div>
        
    
    </>
  )
}

export default Dasha