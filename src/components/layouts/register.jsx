import React,{ useState } from 'react'
import axios from "axios"
import logos from "./images/logo.jpg"
import registers from "./images/register.jpg"
import {Link, Outlet} from 'react-router-dom'
import * as yup from 'yup';


const Register = () => {
  const [fromData, setFormData] = useState({
    pname: "",
    address: "",
    contact_no:"",
    email:"",
    password:"",
    role:"1",
  });

  const {
    pname,
    address,
    contact_no,
    email,
    password,
    role,
  } = fromData;

  const onChange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });

  let save = async (e) => {
    e.preventDefault();
    
      const newUser = {
        pname,
        address,
        contact_no,
        email,
        password,
        role,
      };
      try {
        console.log(newUser);
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        console.log(body);
        const res = await axios.post(
          "api/user",
          body,
          config
        );
        if (res.status === 201) {
          console.log("Login Success");
          window.location.href = "/login";
        } else {
          //put alert
        }
      } catch (err) {
        console.error(err.response.data);
      }
    
  };
      
  
//     function GetSelectedTextValue() 
//   {
//     var x = document.getElementById("ddlSuggestion");
// var selectedValue = x.value;
// if(selectedValue=="od")
// {
// document.getElementById("txtComments").style.display = "block";
// }
// else
// {
// document.getElementById("txtComments").style.display = "none";
// }
// }
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
                <div class="col-sm-2 col-md-2 d-none d-lg-block appoint">
                    <Link to={"/index"}><button class="btn btn-success">HOME</button></Link>
                    <Link to={"/login"}><button class="btn btn-success" style={{marginLeft:"10px"}}>LOGIN</button></Link>
                </div>
            </div>
    
        </div>
    </div>
    </header>

    <div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-6">
    <img src={registers} style={{maxWidth:"80%",height:"700px",margin:"100PX -100PX 0 100PX",borderRadius:"40%"}}></img>
    </div>
    <div class="col-sm-9 col-md-6">
    <div class="login-wrap-register">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Register</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab"></label>
		<div class="login-form">
			<div class="sign-in-htm">
     
     
      <form action="#" method="post" onSubmit={save}> 
				<div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Patient Name  </label>
                    <input  id="user" name="pname" type="text" class="input" placeholder='Enter Name' style={{fontSize:"15px"}} required value={pname} onChange={(e) => onChange(e)}/>
				</div>
				<div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Address   </label>
                    <input  type="textarea"  class="input" placeholder='Enter Address' style={{fontSize:"15px"}} required name="address" value={address} onChange={(e) => onChange(e)}/>
				</div>
                <div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Gender</label>
                    <div class="label">
                    <div class="label"> <label for="html" style={{textAlign:"left",fontSize:"15px"}}>Male</label> <input type="radio" id="Male" value="M"  style={{marginLeft:"10px"}} onChange={(e) => onChange(e)} /> <label for="html" style={{marginLeft:"20px"}}>Female</label> <input type="radio" id="Female" name="Gender" value="F" style={{marginLeft:"10px"}}  /> </div>
                    <div class="label">  </div>
                    </div>
                   
				</div>
                <div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Email </label>
                    <input  id="user" name="email" type="email" class="input" placeholder='Enter Email' style={{fontSize:"15px"}} required value={email} onChange={(e) => onChange(e)}/>
				</div>
                <div class="group">
					<label for="pass" class="label" style={{textAlign:"left",fontSize:"15px"}}>Password </label>
					<input id="pass" type="password" class="input" name="password"  data-type="password" placeholder='Enter Password' style={{fontSize:"15px"}} required value={password} onChange={(e) => onChange(e)}/>
				</div>
                <div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Contact No </label>
                    <input  id="user" type="tel" class="input" name="contact_no" placeholder='Enter Contact' style={{fontSize:"15px"}} required value={contact_no} onChange={(e) => onChange(e)}/>
				</div>
        <input  id="user" type="textarea" class="input"  name="role" placeholder='Enter Address' style={{fontSize:"15px",display:"none"}} required value={role} onChange={(e) => onChange(e)}/>

                <div class="group" style={{padding:"0px 16px",background:"00ab9f",display:"block"}}>
					<label for="user" name="abc" class="label" style={{textAlign:"left",fontSize:"15px"}}>Reference By</label>
                    <select style={{width:"100%",color:"black",display:"block",borderRadius:"25px",padding:"12px 16px",background:"rgba(255,255,255,.1)",display:""}}  id="ddlSuggestion"  > 
                    <option style={{padding:"12px 16px",background:"00ab9f"}}>---SELECT---</option>  
                    <option style={{padding:"12px 16px",background:"00ab9f"}} value="od"   >Other Doctor</option>
                    <option style={{padding:"12px 16px",background:"00ab9f"}} value="relative">Relatives</option>
                    <option style={{padding:"12px 16px",background:"00ab9f"}} value="social">Social Media</option>
                    <option style={{padding:"12px 16px",background:"00ab9f"}} value="social">Other</option>
  </select>
				</div>
                
				<div class="group">
					<input type="text"   color="white" placeholder="Doctor Name" id="txtComments" class="input" style={{display:"none"}}  />
				</div>

				<div class="group">
					<input type="submit" class="button" value="REGISTER"/>
				</div>
                </form>
                <div class="foot-lnk">
					<Link to={"/login"}>Already have an Account?? Login!!</Link>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  </div>
</div>

<div class="container-fluid">

</div>
    </>
  )
}

export default Register