const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({

comment : {
    type : String,
    required : true
},
patient : {
    type : mongoose.Schema.Types.ObjectId,
    ref :'tblpatient'
}
});

module.exports = tblfeedback = mongoose.model('tblfeedback',FeedbackSchema); 