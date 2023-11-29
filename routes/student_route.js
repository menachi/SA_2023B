const express = require("express");
const router = express.Router();
const Student = require("../controllers/student_controller");

router.get("/", Student.getAllStudents);

router.get("/:id", Student.getStudentById);

router.post("/", Student.postStudent);

router.put("/:id", Student.putStudentById);

router.delete("/:id", Student.deleteStudentById);

module.exports = router;
