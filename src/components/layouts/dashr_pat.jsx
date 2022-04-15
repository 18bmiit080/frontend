import React from 'react'
import logos from "./images/logo.jpg"
import pat from "./images/pat1.png"
import addd from "./images/add.jpg"
import nott from "./images/notify.jpg"
const Dashr_pat = () => {
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
    
        <div class="row" style={{marginTop:"50px",marginLeft:"200px"}}>
            <div class="col-md-3">
                <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <img style={{height:"70px"}} src={pat}/>
                        <span class="font-weight-bold small text-uppercase" style={{fontSize:"20px",marginLeft:"20px"}} >PATIENT DETAIL</span></a>

                    <a class="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <img style={{height:"70px"}} src={addd}/>
                        <span class="font-weight-bold small text-uppercase" style={{fontSize:"20px",marginLeft:"20px"}} >ADD PATIENT</span></a>

                    <a class="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <img style={{height:"70px"}} src={nott}/>
                        <span class="font-weight-bold small text-uppercase" style={{fontSize:"20px",marginLeft:"20px"}} >NOTIFY PATIENT</span></a>

                    </div>
            </div>


            <div class="col-md-9">
                <div class="tab-content" id="v-pills-tabContent" >
                    <div class="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" style={{width:"80%",height:"500px",marginTop:"30px"}}>
                    <div class="table table-hover">
                                <div class="table table-bordered">
                                <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">PATIENT_ID</th>
                                            <th scope="col">PATIENT NAME</th>
                                            <th scope="col">ADDRESS</th>
                                            <th scope="col">GENDER</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">CONTACT NO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>jhon@email.com</td>
                                            <td>USA</td>
                                            <td>123</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>mark@email.com</td>
                                            <td>UK</td>
                                            <td>456</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>jacob@email.com</td>
                                            <td>AU</td>
                                            <td>789</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                                </div>
                           
                            </div> 
                    </div>
                    
                    <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" style={{width:"80%",height:"500px",marginTop:"30px"}}>
                      <form>

                      <div class="row mt-2">
                    <div class="col-md-6"><label style={{color:"black"}}>Patient Name </label><input  id="user" type="text" class="input" style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/></div>
                    <div class="col-md-6"><label style={{color:"black"}}>Address </label><input  id="user" type="text" class="input" style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/></div>
                </div>

                <div class="row mt-2">
					<label style={{color:"black"}}>Gender</label>
               <div><label style={{textAlign:"left",fontSize:"15px",color:"black"}}>Male</label> <input type="radio" id="Male" name="Gender" value="M"  style={{color:"black",display:"block",background:"rgba(255,255,255,.1)",marginLeft:"50px",marginTop:"-20px"}}/> <br/><label  style={{textAlign:"left",fontSize:"15px",color:"black"}}>Female</label> <input type="radio" id="Female" name="Gender" value="F" style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)",marginLeft:"30px",marginTop:"-5px"}} /> </div>
                   
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label style={{color:"black"}}>Email </label><input  id="user" type="email" class="input" style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/></div>
                    <div class="col-md-6"><label style={{color:"black"}}>Password </label><input  id="user" type="password" data-type="password" class="input" style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/></div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label style={{color:"black"}}>Contact No </label><input  id="user" type="tel" class="input" style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/></div>
                    <div class="group" style={{padding:"0px 16px",background:"00ab9f",display:"block"}}>
					<label style={{color:"black"}}>Reference By</label>
                    <select style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}} name="color" id="ddlSuggestion" onChange={GetSelectedTextValue}> 
                    <option style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}>---SELECT---</option>  
                    <option  style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}value="od"   >Other Doctor</option>
                    <option  style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}value="relative">Relatives</option>
                    <option style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}} value="social">Social Media</option>
                    <option   style={{width:"100%",color:"black",display:"block",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}value="social">Other</option>
  </select>
				</div>
                </div>
                <div class="row mt-2">
                <div class="col-md-6"><label style={{color:"black"}}>Doctor Name </label><input   id="txtComments" type="text" class="input" style={{width:"100%",color:"black",display:"none",padding:"12px 16px",background:"rgba(255,255,255,.1)"}}/></div>
                </div>
                <div class="row mt-2">
                <input type="submit" style={{border:"1px solid #00ab9f",fontSize: "25px", padding:"12px 16px",textAlign: "center", color: "#ffffff",backgroundColor: "#00ab9f",marginLeft:"350px"}} value="ADD"/>
                </div>
                      </form>
                   
                
  
                    </div>

                    <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"  style={{width:"80%",height:"500px",marginTop:"30px"}}>
                    <div class="table table-hover">
                                <div class="table table-bordered">
                                <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">PATIENT_ID</th>
                                            <th scope="col">PATIENT NAME</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">DOCTOR</th>
                                            <th scope="col">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>jhon@email.com</td>
                                            <td>USA</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>mark@email.com</td>
                                            <td>UK</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>jacob@email.com</td>
                                            <td>AU</td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default Dashr_pat