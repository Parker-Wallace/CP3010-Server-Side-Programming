const express = require("express");
const studentRouter = express.Router ();

const {getStudents,getStudent,createStudent,updateStudent,deleteStudent} =
  require ("../controllers/student.controller.js");

  studentRouter.get ('/', getStudents);
  studentRouter.get ('/id=:id', getStudent);
  studentRouter.post ('/', createStudent);
  studentRouter.put ('/id=:id', updateStudent);
  studentRouter.delete ('/id=:id', deleteStudent);

  module.exports = studentRouter;