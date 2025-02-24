const Course = require("../models/course.model.js");
const Student = require("../models/student.model.js");

const registerStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.sId);
        const course = await Course.findById(req.params.cId);

        if (!student || !course) {
            return res.status(404).json({ error: "Student or course not found" });
        }

        // Check for scheduling conflict
        const enrolledCourses = await Course.find({ _id: { $in: student.registeredCourses } });
        for (const enrolledCourse of enrolledCourses) {
            if (enrolledCourse.timeSlot === course.timeSlot) {
                return res.status(400).json({ error: "Scheduling conflict detected" });
            }
        }

        // ✅ Push the course ID (as a string)
        student.registeredCourses.push(course._id.toString());
        course.registeredStudents.push(student._id.toString());
        await student.save();

        res.json({ message: "Enrollment successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = registerStudent;
