import React from 'react'

const Dashd_app = () => {
  return (
    <>
        <div  class="table-responsive">
    <div class="wrap" style={{marginTop:"40px",marginLeft:"20px",width: "30%",
  position: "absolute",
  top: "8.5%",
  left: "100%",
  width: "100%",
  transform: "translate(-50%, -50%)"}}>
   <div style={{width: "100%",
  position: "relative",
  display: "flex"}}>
      <input type="text" style={{width: "20%",
  border: "3px solid #00B4CC",
  borderRight: "none",
  padding: "5px",
  height: "40px",
  borderRadius: "5px 0 0 5px",
  outline: "none",
  color: "#00ab9f"}}  placeholder="What are you looking for?"/>
      <button type="submit" style={{ width: "40px",
  height: "40px",
  border: "1px solid #00ab9f",
  background: "#00ab9f",
  textAlign: "center",
  color: "#fff",
  borderRadius: "0 5px 5px 0",
  cursor: "pointer",
  fontSize: "20px"}}>
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
</div>


    <div class="container-fluid pt-4 px-4" style={{marginLeft:"30px",marginTop:"130px"}}>
                    <div class="col-12">
                        <div class="bg-light rounded h-100 p-4">
                            <div class="table table-hover">
                                <div class="table table-bordered">
                                <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">SR.NO</th>
                                            <th scope="col">PATIENT NAME</th>
                                            <th scope="col">APPOINTMENT TIME</th>
                                            <th scope="col">APPOINTMENT DATE</th>
                                            <th scope="col">ACTION</th>
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
                    </div>
                </div>
       


    </>
  )
}

export default Dashd_app