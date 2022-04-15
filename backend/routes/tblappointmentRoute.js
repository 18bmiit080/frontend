const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const tblappointment = require('../models/tblappointment');
const tblpatient = require('../models/tblpatient');
//const tbldoctor = require('../models/tbldoctor');

router.post('/addAppointment',[
check('AppDate',"Appointment Date is required").not().isEmpty(),
check('Time',"Appointment Time is required").not().isEmpty(),
check('doctor',"doctor is required").not().isEmpty(),
check('status',"status is required").not().isEmpty(),
check('service',"service is required").not().isEmpty(),
check('chief_problem',"problem is required").not().isEmpty()
], async(req,res)=>{

const errors = validationResult(req);
if(!errors.isEmpty())
{
    console.log(errors.message);
    return res.send("Validation errors");
}

try{
    const {AppDate,Time,doctor,status,service,chief_problem,patient} = req.body;
    //const patientid = req.body.service;
    const Patient = await tblpatient.findById(patient);

    if(!Patient)
    {
        console.log(errors.message);
        return res.send("Patient does not exists..");
    }
    

    const appmt = new tblappointment({
        AppDate,Time,doctor,status,service,chief_problem,patient
    });

    appmt.AppDate = AppDate;
    appmt.Time = convertFromStringToDate("0000-00-00T"+Time);
    appmt.doctor = doctor;
    appmt.status = status;
    appmt.service = service;
    appmt.chief_problem = chief_problem;
    appmt.patient = patient;


    await appmt.save();

    console.log("Appointment has been saved");
    return res.status(200).send("Appointment has been saved");
}
catch(err)
{
    console.log(err.message);
    return res.send("Internal Server Error");
}
});


router.get("/getAppointment",[
check('appmtid',"Appointment id is Required!!").not().isEmpty()
],async(req,res)=>{
const errors = validationResult(req);
 if(!errors.isEmpty())
 {
     console.log("Validation error");
     return res.status(400).json({errors:errors.array()});
 }
try{

    const appmtid = req.body.appmtid;

    const Appmtmodel = await tblappointment.findById(appmtid);
    if(!Appmtmodel)
    {
        console.log("Appointment does not exists");
        return res.status(204).send("Appointment does not exists");
    }

    return res.status(200).send(Appmtmodel);

}catch(err)
{
    console.log("Something is wrong");
    return res.send(err.message);
}
});

router.get('/getAllAppointment',async (req,res)=>{
try{

    const allappmt = await tblappointment.find({}).populate('service'); 

    if(!allappmt)
    {
        console.log(errors.message);
        return res.status(200).send("No Appointment");
    }

    return res.status(200).send(allappmt);

}catch(err)
{
    console.log(err.message);
    return res.send("Internal Server Error");
}
});

function convertFromStringToDate(responseDate)
{
let dateComponents = responseDate.split('T');
let datepieces = dateComponents[0].split('-');
let timePieces = dateComponents[1].split(':');

return (new Date(datepieces[2],(datepieces[1]-1),datepieces[0],timePieces[0],timePieces[1],timePieces[2]))
}

module.exports = router;
