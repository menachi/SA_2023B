import express from "express";
const router = express.Router();
import Student from "../controllers/student_controller";

router.get("/", Student.getAllStudents);

router.get("/:id", Student.getStudentById);

router.post("/", Student.postStudent);

router.put("/:id", Student.putStudentById);

router.delete("/:id", Student.deleteStudentById);

export default router;
