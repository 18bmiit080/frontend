const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const tblfeedback = require('../models/tblfeedback');
const tblpatient = require('../models/tblpatient');


router.post('/addfeedback',[
check('feedback',"Feedback is required").not().isEmpty()
], async(req,res)=>{

const errors = validationResult(req);
if(!errors.isEmpty())
{
    console.log(errors.message);
    return res.send("Validation errors");
}

try{
    const {comment,patient} = req.body;
    //const pid = req.body.comment;
    const Patient = await tblpatient.findById(patient);

    if(!Patient)
    {
        console.log(errors.message);
        return res.send("Patient does not exists..");
    }
    

    const feedback = new tblfeedback({
        comment,patient
    });

    feedback.comment = comment;
    feedback.patient = patient;


    await feedback.save();

    console.log("Feedback has been saved");
    return res.status(200).send("Feedback has been saved");
}
catch(err)
{
    console.log(err.message);
    return res.send("Internal Server Error");
}
});


router.get("/getfeedback",[
check('fid',"Feedback id is Required!!").not().isEmpty()
],async(req,res)=>{
const errors = validationResult(req);
 if(!errors.isEmpty())
 {
     console.log("Validation error");
     return res.status(400).json({errors:errors.array()});
 }
try{

    const fid = req.body.fid;

    const fmodel = await tblfeedback.findById(fid);
    if(!fmodel)
    {
        console.log("Feedback does not exists");
        return res.status(204).send("Feedback does not exists");
    }

    return res.status(200).send(fmodel);

}catch(err)
{
    console.log("Something is wrong");
    return res.send(err.message);
}
});

router.get('/getAllfeedback',async (req,res)=>{
try{

    const allfd = await tblfeedback.find({}).populate('comment'); 

    if(!allfd)
    {
        console.log(errors.message);
        return res.status(200).send("No Feedback has been given");
    }

    return res.status(200).send(allfd);

}catch(err)
{
    console.log(err.message);
    return res.send("Internal Server Error");
}
});

router.delete("/deletefeedback",[
    check('fid',"Feedback ID is required").not().isEmpty()
],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors.message);
        return res.status(400).json({errors:errors.array()});
    }

    try{
        const deletedfid = req.body.fid;

        const deletedfd = await tblfeedback.findById(deletedfid);
        if(!deletedfd)
        {
            console.log("Feedback has been deleted");
            return res.status(400).send("Feedback has been deleted");
        }

        await tblfeedback.findByIdAndRemove(deletedfd._id);
        
    }
    catch(err)
    {
        console.log("Something is wrong");
        return res.send(err.message);
    }
});


module.exports = router;
