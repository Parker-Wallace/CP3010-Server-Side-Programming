const Student = require ("../models/student.model")

const getStudents = async (req, res) => {
    try {
        const students = await Student.find ({});
        res.status(200).json(students);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getStudent = ('/api/students/id=:id', async (req, res) => {
    try {
        const student = await Student.findById (req.params.id);
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
})

const createStudent = ('/api/students', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
 });

 const updateStudent = ('/api/student/id=:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate (req.params.id, req.body);
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
});

const deleteStudent = ('/api/student/id=:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete (req.params.id);
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
});

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
};