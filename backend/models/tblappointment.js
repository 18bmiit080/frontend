const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    
    AppDate : {
        type : Date,
        required : true
       
    },
    Time : {
        type: Date,
        required : true
    },
    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'tbldoctor',
        required : true
    },
    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'tblpatient'
    },
    status : {
        type : String,
        required :true
    },
    service : {
        type : mongoose.Schema.Types.ObjectId,
        ref :'tblservice'
    },

    chief_problem : {
        type : String,
        required : true
    }

});

module.exports = tblappointment = mongoose.model('tblappointment',AppointmentSchema); 