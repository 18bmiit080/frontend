import React, { Fragment }  from 'react';
import { Routes,Route } from 'react-router-dom';
// import logo from './components/layouts/images/logo';
import './components/layouts/assets/css/bootstrap.min.css';
import './components/layouts/assets/css/fontawsom-all.min.css';
import './components/layouts/assets/plugins/slider/css/owl.carousel.min.css';
import './components/layouts/assets/plugins/slider/css/owl.theme.default.css';
import './components/layouts/css/style.css';
import Add_ser from './components/layouts/add_ser';
import Admin_dashboard from './components/layouts/admin_dashboard';
import Frontend from './components/layouts/frontend';
import Dasha from './components/layouts/dasha';
import Dasha_pat from './components/layouts/dasha_pat';
import Dasha_doc from './components/layouts/dasha_doc';
import Dasha_rec from './components/layouts/dasha_rec';
import Dasha_pro from './components/layouts/dasha_pro';
import Dasha_rep from './components/layouts/dasha_rep';
import Login from './components/layouts/login';
import Receptionist_dashboard from './components/layouts/receptionist_dashboard';
import Dashr from './components/layouts/dashr';
import Dashr_pat from './components/layouts/dashr_pat';
import Dashr_doc from './components/layouts/dashr_doc';
import Dashr_not from './components/layouts/dashr_not';
import Dashr_pro from './components/layouts/dashr_pro';
import Receptionist_frontend from './components/layouts/receptionist_frontend';
import Dashd from './components/layouts/dashd';
import Dashd_pat from './components/layouts/dashd_pat';
import Home from './components/layouts';
import Register from './components/layouts/register';
import Patient_dashboard from './components/layouts/patient_dashboard';
import Otp from './components/layouts/otp';
import Add_rec from './components/layouts/add_rec';
import Notify_pat from './components/layouts/notify_pat';
import Doc_shed from './components/layouts/doc_shed';
const App = () => {
  return (
   <>

   {/* <Dashr_doc/> */}


   {/* <Notify_pat/> */}
   {/* <Home/> */}
  
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
     </Routes> 

      <Routes>
   <Route path="/login" />
   <Route path="/index"  />
   <Route path="/register" />
  <Route path="/otp" element={<Otp/>} />
     </Routes> 

      <Routes>
   <Route path="/register" />
   <Route path="/index" element={<Home/>} />
   <Route path="/login"/>
   <Route path="/patient_dashboard" element={<Patient_dashboard/>}/>
     </Routes>
     <Routes>
   <Route path="/otp" />
   <Route path="/index" />
     </Routes>


   <Routes>
     <Route path="/frontend" element={<Frontend/>}>
     <Route index element={<Dasha/>} />
     <Route path="/frontend/dasha_pat" element={<Dasha_pat/>} />
     <Route path="/frontend/dasha_doc" element={<Dasha_doc/>} />
     <Route path="/frontend/dasha_rec" element={<Dasha_rec/>} />
     <Route path="/frontend/dasha_pro" element={<Dasha_pro/>} />
     <Route path="/frontend/dasha_rep" element={<Dasha_rep/>} />
     <Route path="/frontend/login" element={<Login/>} />
     <Route path="/frontend/dasha_rep/add_rec" element={<Add_rec/>} />
     </Route>
     </Routes>  
     
     <Routes>
     <Route path="/receptionist_frontend" element={<Receptionist_frontend/>}>
     <Route index element={<Dashr/>} />
     <Route path="/receptionist_frontend/dashr_pat" element={<Dashr_pat/>} />
     <Route path="/receptionist_frontend/dashr_doc" element={<Dashr_doc/>} />
     <Route path="/receptionist_frontend/dashr_not" element={<Dashr_not/>} />
     <Route path="/receptionist_frontend/dashr_pro" element={<Dashr_pro/>} />
     <Route path="/receptionist_frontend/add_ser" element={<Add_ser/>} />
     <Route path="/receptionist_frontend/dashr_doc/doc_shed" element={<Doc_shed/>} />
     <Route path="/receptionist_frontend/Login" element={<Login/>} />
     </Route>
     </Routes>    
     
     
     
      {/* <Ad
  d_ser/> */}
   {/* < Login/>   */}
   {/* <Admin_dashboard/> */}
     {/* <Home/>   */}
    {/* <Login/> */}
  {/* <Register/>   */}
      {/* <Test/>  */}
   {/* <OTP/> */}
      {/* <Forget/> */}
{/* admin dashboard pages  */}
      {/* <Dasha_pat/> */}
      {/* <Dasha_doc/> */}
      {/* <Dasha_rec/> */}
      {/* <Dasha_rep/> */}
      {/* <Dasha_pro/> */}
      {/* <Add_rec/> */}
{/* receptionist dashboard pages  */}
       {/* <Dashr/> */}
       {/* < Dashr_pat/> */}
       {/* <Dashr_doc/> */}
       {/* <Dashr_not/>  */}
       {/* <Dashr_pro/> */}
      {/* <Dashr_resetp/> */}
{/* customer dashboard pages */}
       {/* <Book_appoint/> */}

    {/* <Fragment>
      <Route exact path="/Landing" component={Landing}/>
    </Fragment> */}
   </>
  );
}

export default App;
