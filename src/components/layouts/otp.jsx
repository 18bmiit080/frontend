import React from 'react'
import logos from "./images/logo.jpg"
import fff from "./images/pass.jpg"
import { Link } from 'react-router-dom';
const Otp = () => {
  
  return (
    <>
    <header id="menu-jk">
    
    <div id="nav-head" class="header-nav">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-3 no-padding col-sm-12 nav-img">
                <img src={logos}/>
                   <a data-toggle="collapse" data-target="#menu" href="#menu" ><i class="fas d-block d-md-none small-menu fa-bars"></i></a>
                </div>
                <div id="menu" class="col-lg-8 col-md-9 d-none d-md-block nav-item">

                </div>
                <div class="col-sm-2 d-none d-lg-block appoint">
                    <Link to={"/index"}>
                    <button class="btn btn-success" style={{marginLeft:"180px"}}>HOME</button>
                    </Link>
                </div>
            </div>
    
        </div>
    </div>
    </header>
 
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-6">
    <img src={fff} style={{maxWidth:"60%",margin:"180PX -100PX 0 150PX",borderRadius:"40%"}}></img>
    </div>
    <div class="col-sm-9 col-md-6">
    <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">FORGET PASSWORD</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab"></label>
		<div class="login-form">
			<div class="sign-in-htm">
            <div class="card p-2 text-center" style={{ width: "600px",height:"210px",background:"transparent"}}>
            <h6 style={{color:"white",fontSize:"15px"}}>Please enter the one time password <br/> to verify your account</h6>
            <div> <span style={{color:"white",fontSize:"15px"}}>A code has been sent to</span> <small style={{color:"white",fontSize:"15px"}}>*******@gmail.com</small> </div>
            <form action=''>
            <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> <input class="m-2 text-center form-control rounded" style={{height:"60px",width:"60px",fontSize:"20px"}} type="text" id="first" maxlength="1" required/> <input class="m-2 text-center form-control rounded" style={{height:"60px",width:"60px",fontSize:"20px"}} type="text" id="second" maxlength="1" required/> <input class="m-2 text-center form-control rounded"  style={{height:"60px",width:"60px",fontSize:"20px"}} type="text" id="third" maxlength="1" required/> <input class="m-2 text-center form-control rounded" style={{height:"60px",width:"60px",fontSize:"20px"}} type="text" id="fourth" maxlength="1" required/> <input class="m-2 text-center form-control rounded" style={{height:"60px",width:"60px",fontSize:"20px"}} type="text" id="fifth" maxlength="1" required/> <input class="m-2 text-center form-control rounded" style={{height:"60px",width:"60px",fontSize:"20px"}} type="text" id="sixth" maxlength="1" required/> </div>
            <div class="mt-4"> <button style={{background:"#FFA500", borderRadius:"25px",padding:"12px 16px", width:"50%",color:"white"}} >Validate</button> </div>
            </form>
        </div>
        <div class="card-2">
            <div class="content d-flex justify-content-center align-items-center"> <span style={{color:"white",fontSize:"15px"}}>Didn't get the code</span>  <button style={{background:"#FFA500", borderRadius:"25px",padding:"0px 16px", width:"18%",color:"white",height:"25px"}} >RESEND</button>  </div>
        </div>
               
			</div>
		</div>
	</div>
</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Otp