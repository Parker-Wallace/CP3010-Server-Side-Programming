const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema ({
    schoolId: {
        type: Number,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true,
    },
    addressUnit: {
        type: String,
        required: true
    },
    addressStreet: {
        type: String,
        required: true
    },
    addressCity: {
        type: String,
        required: true
    },
    addressStateProv: {
        type: String,
        required: true
    },
    addressCountry: {
        type: String,
        required: true
    },
    addressPostCode: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true,
    },
    registeredCourses:{
        type:[String]
    },
    emergContactName : {
        type: String,
        required: true
    },
    emergContactPhone : {
        type: String,
        required: true
    },
    emergContactRel : {
        type: String,
        required: true
    }
})

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;