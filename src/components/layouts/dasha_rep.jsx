import React from 'react'
import logos from "./images/logo.jpg"
import dlogo from "./images/dlogo.png"
import pat from "./images/pat1.png"
import servv from "./images/service.png"
import { Link, Outlet } from 'react-router-dom';

const Dasha_rep = () => {
  return (
    <>    
    <Outlet/>
    <div class="container-fluid pt-4 px-4">
                <div class="row g-6">
                    <div class="col-sm-8 col-xl-3" style={{marginLeft:"70px",marginTop:"70px"}} >
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <img style={{height:"70px",marginLeft:"80px"}} src={dlogo}/>
                                <p style={{marginLeft:"40px",fontSize:"30px"}} class="mb-2">Doctors</p>
                        </div>
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <h1 style={{marginLeft:"165px",fontSize:"30px",marginTop:"-60px"}}>0</h1>
                        </div>
                    </div>
                    <div class="col-sm-8 col-xl-3" style={{marginLeft:"70px",marginTop:"70px"}} >
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <img style={{height:"70px",marginLeft:"80px"}} src={pat}/>
                                <p style={{marginLeft:"40px",fontSize:"30px"}} class="mb-2">Patients</p>
                        </div>
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <h1 style={{marginLeft:"165px",fontSize:"30px",marginTop:"-60px"}}>0</h1>
                        </div>
                    </div>

                    <div class="col-sm-8 col-xl-3"  style={{marginLeft:"70px",marginTop:"70px"}}>
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                        <img style={{height:"70px",marginLeft:"80px"}} src={servv}/>
                                <p style={{marginLeft:"40px",fontSize:"30px"}} class="mb-2">Machines</p>
                        </div>
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <h1 style={{marginLeft:"165px",fontSize:"30px",marginTop:"-60px"}}>0</h1>
                        </div>
                    </div>

                </div>
            </div>
    
    </>
  )
}

export default Dasha_rep