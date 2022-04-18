import React,{ useState } from 'react'
import axios from "axios"
import logos from "./images/logo.jpg"
import logins from "./images/Mobile-login-Cristina.jpg"
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {
  
  //grand code
  const [ email, setName ] = useState("")
	const [	password, setpass ] = useState("")

  let err= "";  
	async function postName(e) {
		e.preventDefault()
		try {
			const res = await axios.post("http://localhost:5000/api/auth", {
				email,password
      } )
      if(res.status===210 && res.data.r === "1"){
        window.location.href = "/patient_dashboard"; 
      }           
      // if(res.status===210 && res.data.r === "2"){
      //   window.location.href = "/AdminDesk"; 
      // } 
      
		} catch (error) {
      err=error;
			console.error(error)
      console.log(error.response.data);
		}
    if (err.match("")){
      console.log("done");
    }
	}

 //grand code


  const formik=useFormik({

    initialValues:{

      Name:'',
      Pass:''


    },

    validationSchema: yup.object({

      Name: yup.string()

        .required('*')

        .matches(/^[aA-zZ\s]+$/, "Only alphabets"),

       Pass: yup.string()

       .required('*'),
    }),

    onSubmit:values=>{

      alert(JSON.stringify(values));

    }

  });  return (
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
             <Link to={"/index"}><button class="btn btn-success" style={{marginLeft:"180px"}}>HOME</button>
             </Link>
                </div>
            </div>
    
        </div>
    </div>
    </header>

<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-6">
    <img src={logins} style={{maxWidth:"60%",margin:"150PX -150PX 0PX 200PX",borderRadius:"40%"}}></img>
    </div>
    <div class="col-sm-9 col-md-6">
    <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Login</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab"></label>
		<div class="login-form">
			<div class="sign-in-htm">
                
     <form action="#" method="post" onSubmit={postName}>               
				<div class="group">
              
					<div><label for="user" class="label" style={{textAlign:"left"}}>Username {formik.touched.Name && formik.errors.Name ? <span style={{color:'red',fontFamily:"sans-serif",fontWeight:"bold",fontSize:"15px",marginLeft:"5px"}}>{formik.errors.Name}</span> : null}</label>   </div>
					<input id="user" name="uname" type="text" class="input" placeholder='Enter Username' value={email} onChange={(e) => setName(e.target.value)} required />
                   
				</div>
				<div class="group">
					<label for="pass" class="label" style={{textAlign:"left"}}>Password {formik.touched.Name && formik.errors.Pass ? <span style={{color:'red',fontFamily:"sans-serif",fontWeight:"bold",fontSize:"15px",marginLeft:"5px"}}>{formik.errors.Pass}</span> : null}</label>
					<input id="pass" type="password" class="input" data-type="password" placeholder='Enter Password'  value={password} onChange={(e) => setpass(e.target.value)} required />
				</div>
				<div class="group">
					<input type="submit" style={{background:"#FFA500", borderRadius:"25px",padding:"12px 16px", width:"100%",color:"white"}} value="LOGIN"/>
				</div>
                </form>
				<div class="hr">
                <div class="foot-lnk">
                    <br/>
					<Link to="/otp">Forgot Password?</Link>
				</div>
                <br/>
                
                </div>
				<div class="foot-lnk">
					<Link to={"/register"}>Didn't have account??Register Here!!</Link>
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

export default Login

