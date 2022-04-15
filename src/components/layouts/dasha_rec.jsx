import React from 'react'
import logos from "./images/logo.jpg"
import { Link } from 'react-router-dom';
const Dasha_rec = () => {
  return (
    <>
    <button class="btn btn-success" style={{marginLeft:"800px",marginTop:"130px"}}>ADD</button>
    <div class="container-fluid pt-4 px-4 " style={{marginLeft:"30px",marginTop:"10px"}}>
                    <div class="col-12">
                        <div class="bg-light rounded h-100 p-4">
                            <div class="table table-hover">
                                <div class="table table-bordered">
                                <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">SR.NO</th>
                                            <th scope="col">RECEPTIONIST NAME</th>
                                            <th scope="col">ADDRESS</th>
                                            <th scope="col">GENDER</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">CONTACT NO</th>
                                            <th scope="col">QUALIFICATION</th>
                                            <th scope="col">D_O_J</th>
                                            <th scope="col">Action</th>
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
                                            <td>123</td>
                                            <td>123</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>mark@email.com</td>
                                            <td>UK</td>
                                            <td>456</td>
                                            <td>123</td>
                                            <td>123</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>jacob@email.com</td>
                                            <td>AU</td>
                                            <td>789</td>
                                            <td>123</td>
                                            <td>123</td>

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

export default Dasha_rec