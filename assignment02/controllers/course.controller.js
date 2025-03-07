const Course = require ("../models/course.model.js")

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find ({});
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCourse = async (req, res) => {
    try {
        const courses = await Course.find ({});
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const createCourse = ('/api/courses', async (req, res) => {
    try {
        const sched = await Course.create(req.body);
        res.status(200).json(sched);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
 });

const updateCourse = ('/api/course/id=:id', async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate (req.params.id, req.body);
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
});

const deleteCourse = ('/api/course/id=:id', async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete (req.params.id);
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
});

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
};