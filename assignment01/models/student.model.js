const mongoose = require('mongoose')

const EmergencyContactSubSchema = mongoose.Schema ({
    emergContactName : {
        type: String,
        required: true
    },
    emergContactPhone : {
        type: String,
        required: true
    },
    emergContactRelation : {
        type: String,
        required: true
    },
})

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
    DOB: {
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
    addressPostalCode: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    emergencyContact: [EmergencyContactSubSchema],
    program: {
        type: String,
        required: true,
    }
})

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;