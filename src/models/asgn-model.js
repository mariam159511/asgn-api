let mongoose = require('mongoose')






var Schema = mongoose.Schema;

let AssignmentsSchema = new mongoose.Schema({
    courseName: {
        type: String,  
    },
     assignmentName: {
        type: String,
        required: true
    },
    dueDate: {
        type: Schema.Types.assignmentName,
        ref: 'Assignment', 
        type: Date,
    },
});




module.exports = mongoose.model('Assignments', AssignmentsSchema);
module.exports.get = function (callback, limit) {
    Assignments.find(callback).limit(limit)}