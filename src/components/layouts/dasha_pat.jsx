import React, { Component, useEffect, useState } from "react";
import axios from "axios"
import logos from "./images/logo.jpg"
import { Link } from 'react-router-dom';
import $ from "jquery";
import "jquery/dist/jquery.min.js";
import { ModalBody } from "react-bootstrap";

const Dasha_pat = () => {
    const [user, setUser] = useState([])
    const [pname,setpName] = useState("");
    const [Id,setID] = useState("");
    
    function fillupdateform(id,pname){
       console.warn(pname)
       setpName(pname)
       setID(id)
    }

    const fetchData = () => {
      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };
  
      axios.get( "http://localhost:5000/frontend/api/user/getAllUser", config).then((res) => {
        setUser(res.data);
        console.log(res);
        console.log(res.data.data);
      });
    //   //initialize datatable
    //   $(document).ready(function () {
    //     setTimeout(function () {
    //       $("#exampledemos").DataTable();
    //     }, 1000);
    //   });
    };

    // const deleteContact = async(id) =>
    // { // <-- declare id parameter
    //     await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`) // <-- remove ;
    //     .then(res => {
    //        console.log(res);
    //        console.warn(res);
    //     });
    // };

    // function deleteContact (id) {
    //         alert(id)
    //         axios.delete(`http://localhost:5000/frontend/dash_pat/api/user/${id}`,{
    //             method:'DELETE'
    // }).then((result)=>{
    //     result.json().then((res)=>{
    //         console.warn(res)
    // })
    //         })
    // }

    // const deleteContact = (id ,e ) => {
    //     e.preventDefault()
    //     alert(id)
    //     axios.delete(`http://localhost:5000/frontend/api/user/${id}`)
    //     .then(res => {
    //         console.log('deleted!!',res)

    //     }).catch(err => console.log(err))
    // }


    
    const deleteContact = (id ,e ) => {
        e.preventDefault()
        alert(id)
        axios.post("http://localhost:5000/frontend/api/user/deleteone",{id})
        .then(res => {
            console.log('deleted!!',res)
            fetchData()

        }).catch(err => console.log(err))
    }


    // const updateUser = async (e) => {
    //     console.log("update button clicked!");
    //     const userId = Id
    //     console.log(userId);
    //     e.preventDefault();

    // const updateCompany = {
    // userId,
    //  pname
    // };

    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };

    //   const body = JSON.stringify(updateCompany);
    //   const res = await axios.put(
    //     "http://localhost:5000/frontend/api/user/updateone",{userId},
    //     body,
    //     config
    //   );
    //   console.log(res.data.data);
    // } catch (err) {
    //   console.log(err.response.data);
    // }
    // }


    const updateUser = async(e) => {
        e.preventDefault();
        let newid = Id
      let newname = pname
      try{
        const config = {
          header:{
            "Content-Type": "application/json"
          }
        }
        const dept = { "id": newid, "pname": newname };
        const res = await axios.post("http://localhost:5000/frontend/api/user/updateone", dept, config);
        console.log("updated!")
        if(res.status === 200){
            console.log("sucessfull")
            fetchData()
        }
      
      }
      catch(err){
       console.log(err.response.data);
      
      }
    }
    // const updateUser = (id,pname) => {
    //    const formData = new FormData();
    //     formData.append('pname',pname)
    //     axios.post("http://localhost:5000/frontend/api/user/updateone",{id})
    //     .then(res => {
    //         console.log('updated!!',res)

    //     }).catch(err => console.log(err))
    // }

    // const updateContact = (id ,e ) => {
    //     e.preventDefault()
    //     alert(id)
    //     axios.post("http://localhost:5000/frontend/api/user/viewone",{id})
    //     .then(res => {
    //         console.log('deleted!!',res)
    //         let item = pname(id)
    //     }).catch(err => console.log(err))
        
        
    //  }
    useEffect(() => {
      fetchData();
    //   deleteContact();
    }, []);

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
                                            <th>PATIENT NAME</th>
                                            <th>ADDRESS</th>
                                            {/* <th>GENDER</th> */}
                                            <th>EMAIL</th>
                                            <th>CONTACT NO</th>
                                            <th>Operation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {user.map((data,k) => {
              return (
                <tr key={data._id}>
                    <td>{k}</td>
                  <td>{data.pname}</td>
                  <td>{data.address}</td>
                  <td>{data.email}</td>
                <td>{data.contact_no}</td>
                 <td> <button onClick={(e)=>deleteContact(data._id,e)} >Remove</button></td>
                 <button onClick={()=>{fillupdateform(data._id,data.pname);}}>Update</button> 
                </tr>
              );
            })}

                                    </tbody>
                                </table>
                            </div>
                                </div>
                           
                            </div> 
                            
                           
                            
                            
                            
                           
                        </div>
                    </div>
                </div>
                <form onSubmit={e => updateUser(e)}
                        method="post">
                Id: <input type="hidden" value={Id} style={{display:"hidden"}}/>
                            <input type="text"   id="yu" name="pname" value={pname} style={{marginLeft:"10px"}} onChange={(e)=>{setpName(e.target.value)}} />
                            <input type="submit"/>
                            </form>
    </>
  )
}

export default Dasha_pat