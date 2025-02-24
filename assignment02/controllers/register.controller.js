const Course = require("../models/course.model.js");
const Student = require("../models/student.model.js");

const registerStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.sId);
        const course = await Course.findById(req.params.cId);

        if (!student || !course) {
            return res.status(404).json({ error: "Student or course not found" });
        }

        // Ensure student.courseIds is an array
        if (!Array.isArray(student.courseIds)) {
            student.courseIds = [];
        }

        // Check for scheduling conflict
        const enrolledCourses = await Course.find({ _id: { $in: student.registeredCourses } });
        
        for (const enrolledCourse of enrolledCourses) {
            for (const enrolledSession of enrolledCourse.sessions) {
                for (const newSession of course.sessions) {
                    // Check for scheduling conflicts based on day and time
                    if (enrolledSession.day === newSession.day) {
                        // Check for time overlap
                        const enrolledEndTime = enrolledSession.startTime + enrolledSession.duration;
                        const newEndTime = newSession.startTime + newSession.duration;
                        const isTimeConflict = (enrolledSession.startTime < newEndTime) && (newSession.startTime < enrolledEndTime);

                        if (isTimeConflict) {
                            return res.status(400).json({ error: "Scheduling conflict detected" });
                        }
                    }
                }
            }
        }
        student.registeredCourses.push(course._id.toString());
        course.registeredStudents.push(student._id.toString());
        await student.save();
        await course.save()

        res.json({ message: "Enrollment successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = registerStudent;
