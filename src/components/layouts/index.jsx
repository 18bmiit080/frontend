import React from 'react'
import imgsss from "./images/slider/slider_1.jpg"
import imgssse from "./images/slider/slider_3.jpg"
import logos from "./images/logo.jpg"
import why from "./images/why.jpg"
import vi from "./images/video.mp4"
import vhh from "./login"
import {Link, Outlet} from 'react-router-dom'
import Login from './login'
import { Routes,Route } from 'react-router-dom';
// import ss from "./assets/js/jquery-3.2.1.min.js"

const Home = () => {

  return (
    <>
    <body>
    <header id="menu-jk">
        <div id="nav-head" class="header-nav">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-3 no-padding col-sm-12 nav-img">
                    <img src={logos}/>
                       <a data-toggle="collapse" data-target="#menu" href="#menu" ><i class="fas d-block d-md-none small-menu fa-bars"></i></a>
                    </div>
                    <div id="menu" class="col-lg-8 col-md-9 d-none d-md-block nav-item">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about_us">About Us</a></li> 
                            <li><a href="#gallery">Our Team</a></li>
                            <li><a href="#contact_us">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-2 d-none d-lg-block appoint">
                    <Link to={"/login"}>   
                    <button style={{marginLeft:"150px"}} class="btn btn-success"  id="buttonn">LOGIN</button>
                    </Link>
                    </div>
                </div>

            </div>
        </div>
    </header>
   <div  class="slider container-fluid">
   		<ul id="slider" style={{}} >
   			<li data-active="0" style={{backgroundImage:"url("+imgsss+")",backgroundRepeat:"no-repeat" ,position:"absolute",backgroundSize:"100%",backgroundPosition:"Center"}}>
   				<div class="slider-layer" style ={{backgroundImage:"linear-gradient(90deg, #00ab9f 0%, rgba(255,255,255,0) 100%)"}} >
					<div class="container"  >
						<h1 class="animated  slideInDown " >You are in the Right Place <br/> at the Right Time</h1>
						<p class="animated  zoomInLeft " style={{marginTop:"10px",fontFamily:"Beau-Rivage"}}>Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself.<br/><br/> Sufficient for the day is its own trouble.</p>
						<div class="buttn-row animated  zoomInLeft">
                        <Link to={"/register"}>   
                    <button style={{marginLeft:"150px"}} class="btn btn-success"  id="buttonn">REGISTER</button>
                    </Link>
						</div>
					</div>   
   				</div>
   			</li>
   		</ul>
   </div>

    <section id="services" class="key-features">
        <div class="container">
            <div class="inner-title">

                <p style={{fontSize:"40px"}}>Machines Available</p><br/>
            </div>

            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-hospital-alt"></i>
                        <h5>Newest Technologies</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-user-md"></i>
                        <h5>Experianced Doctors</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-briefcase-medical"></i>
                        <h5>High Customer Satisfaction</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-capsules"></i>
                        <h5>Pharma Pipeline</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="fas fa-prescription-bottle-alt"></i>
                        <h5>Pharma Team</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>



                <div class="col-md-4 col-sm-6">
                    <div class="single-key">
                        <i class="far fa-thumbs-up"></i>
                        <h5>High Quality treatments</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>
            </div>

        </div>

    </section>

    <section id="about_us" class="with-medical">
        <div class="container">
            <div class="row">
               <div class="col-lg-6 col-md-12">
               <img  style={{height:"570px",width:"600px"}}src={why}/>
                </div>
                <div class="col-lg-6 col-md-12 txtr">
                    <p style={{fontSize:"40px",textAlign:"center"}}>ABOUT US <br/><br/>
                    </p><br/>
                    <p style={{fontSize:"20px",paddingTop:"10px",paddingBottom:"10px",textJustify:"auto",wordSpacing:"10px",lineHeight:"30px"}}>We specialise in otthology and sports rehabilitation, which means that we treat a variety of conditions</p>
                    <p style={{fontSize:"20px",paddingTop:"10px",paddingBottom:"10px",textJustify:"auto",wordSpacing:"10px",lineHeight:"30px"}}>We provide a friendly and professional service and ensure that all treatments are personalised to the individual client based on what they wish to achieve. We will happily include family members/carers in our client's rehabilitation plans and can keep relatives updated on progress as required. Alongside the more traditional physiotherapy treatment we also pride ourselves on going the extra mile for our clients, whether this be supporting them to attend a social group, helping them access the local community, building their confidence on bus journeys or attending the gym and exercise classes.</p>
                </div>
                
            </div>
        </div>
    </section>

    <section  id="gallery" class="our-team">
        <div class="container">
            <div class="inner-title row">
                <p style={{fontSize:"40px",textAlign:"center"}}> Our Team</p>
            </div>
            <div class="row team-row">
                <div class="col-md-3 col-sm-6">
                    <div class="single-usr">
                        <img src="assets/images/team/team-memb1.jpg" alt=""/>
                        <div class="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-usr">
                        <img src="assets/images/team/team-memb2.jpg" alt=""/>
                        <div class="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-usr">
                        <img src="assets/images/team/team-memb3.jpg" alt=""/>
                        <div class="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-usr">
                        <img src="assets/images/team/team-memb4.jpg" alt=""/>
                        <div class="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>

    <section section id="contact_us">
        <div class="container">
            <div class="row">
               <div class="col-lg-6 col-md-12">
               <iframe style={{width:"800px",height:"600px",border:"0px"}}
//   width="600"
//   height="450"
//   style="border:0"
//   loading="lazy"
//   allowfullscreen
//   referrerpolicy="no-referrer-when-downgrade"
src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGs5rhpqWpP9VstMqmtYVFtXjohwdGivA&q=BhimradAlthanRdApchaNagarSurat,Seattle+WA">
 </iframe>
                </div>
                <div class="col-md-6 col-sm-6">
                <div class="key-features">
                    <div class="single-key" style={{marginLeft:"400px"}}>
                        <i class="fas fa-home"></i>
                        <h5>ADDRESS</h5>
                        <p style={{textAlign:"center"}}> B/502, Bhimrad-Althan Rd, Apcha Nagar, Surat, 395007</p>
                    </div>
                </div>
                </div>
                <div class="col-md-4 col-sm-6">
                <div class="key-features">
                    <div class="single-key" style={{marginLeft:"970px",marginTop:"-260px"}}>
                        <i class="fas fa-tty"></i>
                        <h5>Contact Via</h5>
                        <p style={{textAlign:"center"}}> Phone No: +91 9512044281</p>
                        <p style={{textAlign:"center"}}> Email : peoplecare@gmail.com</p>
                    </div>
                </div>
                </div>
               
                
            </div>
        </div>
    </section>

    <footer class="footer">
    <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <h2>About Us</h2>
                    <p>
                    We specialise in otthology and sports rehabilitation, which means that we treat a variety of conditions
                    </p>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h2>Useful Links</h2>
                    <ul class="list-unstyled link-list">
                        <li><a ui-sref="about" href="#/about">About us</a><i class="fa fa-angle-right"></i></li>
                        <li><a ui-sref="contact" href="#/contact">Contact us</a><i class="fa fa-angle-right"></i></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 map-img">
                    <h2>Contact Us</h2>
                    <address class="md-margin-bottom-40">
                    B/502 Bhimrad-Althan Rd   <br/>
                    Apcha Nagar, Surat<br/>
                    395007<br/>
                        Phone: +91 9512044281 <br/>
                        Email: <a href="mailto:info@anybiz.com" class="">info@bluedart.in</a><br/>
                        Web: <a href="smart-eye.html" class="">peoplecare@gmail.com</a>
                    </address>

                </div>
            </div>
        </div>

    </footer>


    <div class="copy">
            <div class="container">
                <a href="https://www.smarteyeapps.com/">2022 &copy; All Rights Reserved</a>
                
                <span>
                <a><i class="fab fa-github"></i></a>
                <a><i class="fab fa-google-plus-g"></i></a>
                <a><i class="fab fa-pinterest-p"></i></a>
                <a><i class="fab fa-twitter"></i></a>
                <a><i class="fab fa-facebook-f"></i></a>
        </span>
            </div>

        </div>
    </body>
    {/* <script src={ss}/>
<script src="assets/js/popper.min.js"/>
<script src="assets/js/bootstrap.min.js"/>
<script src="assets/plugins/scroll-fixed/jquery-scrolltofixed-min.js"></script>
<script src="assets/plugins/scroll-nav/js/jquery.easing.min.js"></script>    
<script src="assets/plugins/scroll-nav/js/scrolling-nav.js"></script>
<script src="assets/js/script.js"></script> */}


      </>
  )
}

export default Home