import React from 'react'
import logos from "./images/logo.jpg"
import registers from "./images/register.jpg"
import { useFormik } from 'formik';
import {Link, Outlet} from 'react-router-dom'
import * as yup from 'yup';
const Register = () => {
      
  const formik=useFormik({

    initialValues:{

      Name:'',
      Address:'',
      Email:'',
      Pass:'',
      Contact:'',
    },

    validationSchema: yup.object({

      Name: yup.string()

        .required('*')

        .matches(/^[aA-zZ\s]+$/, "Only alphabets"),
      Address: yup.string()
        
      .required('*'),

      Email: yup.string()
        
      .required('*')
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid Email Id")
      ,


       Pass: yup.string()

       .required('*')
       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,"must contain 1 Uppercase,1 Lowercase,1 Number, 1 Symbol, Min 8"),

       Contact: yup.string()

       .required('*')
       .matches(/[6789][0-9]{9,9}$/,"Invalid Phone Number"),


    }),

    onSubmit:values=>{

      alert(JSON.stringify(values));

    }

  }); 
    function GetSelectedTextValue() 
  {
    var x = document.getElementById("ddlSuggestion");
var selectedValue = x.value;
if(selectedValue=="od")
{
document.getElementById("txtComments").style.display = "block";
}
else
{
document.getElementById("txtComments").style.display = "none";
}
}
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
            <form action="/patient_dashboard">
				<div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Patient Name  {formik.touched.Name && formik.errors.Name ? <span style={{color:'red',fontFamily:"sans-serif",fontWeight:"bold",fontSize:"15px",marginLeft:"5px"}}>{formik.errors.Name}</span> : null}</label>
                    <input  id="user" type="text" class="input" placeholder='Enter Name' style={{fontSize:"15px"}} required {...formik.getFieldProps("Name")}/>
				</div>
				<div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Address   {formik.touched.Address && formik.errors.Address? <span style={{color:'red',fontFamily:"sans-serif",fontWeight:"bold",fontSize:"15px",marginLeft:"5px"}}>{formik.errors.Address}</span> : null}</label>
                    <input  id="user" type="textarea" class="input" placeholder='Enter Address' style={{fontSize:"15px"}} required {...formik.getFieldProps("Address")}/>
				</div>
                <div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Gender</label>
                    <div class="label">
                    <div class="label"> <label for="html" style={{textAlign:"left",fontSize:"15px"}}>Male</label> <input type="radio" id="Male" name="Gender" value="M"  style={{marginLeft:"10px"}}/> <label for="html" style={{marginLeft:"20px"}}>Female</label> <input type="radio" id="Female" name="Gender" value="F" style={{marginLeft:"10px"}} /> </div>
                    <div class="label">  </div>
                    </div>
                   
				</div>
                <div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Email {formik.touched.Email && formik.errors.Email ? <span style={{color:'red',fontFamily:"sans-serif",fontWeight:"bold",fontSize:"15px",marginLeft:"5px"}}>{formik.errors.Email}</span> : null}</label>
                    <input  id="user" type="email" class="input" placeholder='Enter Email' style={{fontSize:"15px"}} required {...formik.getFieldProps("Email")}/>
				</div>
                <div class="group">
					<label for="pass" class="label" style={{textAlign:"left",fontSize:"15px"}}>Password {formik.touched.Pass && formik.errors.Pass ? <span style={{color:'red',fontFamily:"sans-serif",fontWeight:"bold",fontSize:"15px",marginLeft:"5px"}}>{formik.errors.Pass}</span> : null}</label>
					<input id="pass" type="password" class="input" data-type="password" placeholder='Enter Password' style={{fontSize:"15px"}} required {...formik.getFieldProps("Pass")}/>
				</div>
                <div class="group">
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Contact No {formik.touched.Contact && formik.errors.Contact ? <span style={{color:'red',fontFamily:"sans-serif",fontWeight:"bold",fontSize:"15px",marginLeft:"5px"}}>{formik.errors.Contact}</span> : null}</label>
                    <input  id="user" type="tel" class="input" placeholder='Enter Contact' style={{fontSize:"15px"}} required {...formik.getFieldProps("Contact")}/>
				</div>
                <div class="group" style={{padding:"0px 16px",background:"00ab9f",display:"block"}}>
					<label for="user" class="label" style={{textAlign:"left",fontSize:"15px"}}>Reference By</label>
                    <select style={{width:"100%",color:"black",display:"block",borderRadius:"25px",padding:"12px 16px",background:"rgba(255,255,255,.1)"}} name="color" id="ddlSuggestion" onChange={GetSelectedTextValue}> 
                    <option style={{padding:"12px 16px",background:"00ab9f"}}>---SELECT---</option>  
                    <option style={{padding:"12px 16px",background:"00ab9f"}} value="od"   >Other Doctor</option>
                    <option style={{padding:"12px 16px",background:"00ab9f"}} value="relative">Relatives</option>
                    <option style={{padding:"12px 16px",background:"00ab9f"}} value="social">Social Media</option>
                    <option style={{padding:"12px 16px",background:"00ab9f"}} value="social">Other</option>
  </select>
				</div>
                
				<div class="group">
					<input type="text"   color="white" placeholder="Doctor Name" id="txtComments" class="input" style={{display:"none"}} required {...formik.getFieldProps("dname")}/>
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