import React from 'react'
import logos from "./images/logo.jpg"
import fff from "./images/pass.jpg"
import { useFormik } from 'formik';
import * as yup from 'yup';

const Forget = () => {
  const formik=useFormik({

    initialValues:{

      Pass:'',
      Pass1:''

    },

    validationSchema: yup.object({

       Pass: yup.string()

       .required('*')
       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,"must contain 1 Uppercase,1 Lowercase,1 Number, 1 Symbol, Min 8"),

       Pass1: yup.string()

       .required('*')
       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,"must contain 1 Uppercase,1 Lowercase,1 Number, 1 Symbol, Min 8"),


    }),

    onSubmit:values=>{

      alert(JSON.stringify(values));

    }

  }); 
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
                    <button class="btn btn-success" style={{marginLeft:"180px"}}>HOME</button>
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
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">New Password </label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab"></label>
		<div class="login-form">
			<div class="sign-in-htm">
                <form action="">

               
				<div class="group">
					<label for="pass" class="label" style={{textAlign:"left"}}>New Password  {formik.touched.Pass && formik.errors.Pass ? <span style={{color:'red',fontFamily:"sans-serif",fontWeight:"bold",fontSize:"15px",marginLeft:"5px"}}>{formik.errors.Pass}</span> : null}</label>
					<input id="pass" type="password" class="input" data-type="password" placeholder='Enter New Password' required {...formik.getFieldProps("Pass")}/>
				</div>
				<div class="group">
					<label for="pass" class="label" style={{textAlign:"left"}}>Confirm Password {formik.touched.Pass1 && formik.errors.Pass1 ? <span style={{color:'red',fontFamily:"sans-serif",fontWeight:"bold",fontSize:"15px",marginLeft:"5px"}}>{formik.errors.Pass1}</span> : null}</label>
					<input id="newpass" type="password" class="input" data-type="password" placeholder='Confirm New Password' required {...formik.getFieldProps("Pass1")}/>
				</div>
				<div class="group">
					<input type="submit" style={{background:"#FFA500", borderRadius:"25px",padding:"12px 16px", width:"100%",color:"white"}} value="CHANGE"/>
				</div>
                </form>
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

export default Forget