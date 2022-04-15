import React from 'react'
import logos from "./images/logo.jpg"
import ress from './images/res.jpg'

const Dashr = () => {
  return (
    <>
        <div class="fade-in-image">
        <img  style={{marginLeft:"600px",borderRadius:"100px",height:"480px",marginTop:"65px"}}src={ress}/>
        </div>
        <div class="fade-in-text">
        <h1 style={{textAlign:"center",marginTop:"20px"}}>Welcome Receptionist</h1>
        </div>

    </>
  )
}

export default Dashr