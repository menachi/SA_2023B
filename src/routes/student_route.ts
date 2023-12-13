import express from "express";
const router = express.Router();
import studentController from "../controllers/student_controller";

router.get("/", studentController.get.bind(studentController));

router.get("/:id", studentController.getById.bind(studentController));

router.post("/", studentController.post.bind(studentController));

router.put("/:id", studentController.putById.bind(studentController));

router.delete("/:id", studentController.deleteById.bind(studentController));

export default router;
