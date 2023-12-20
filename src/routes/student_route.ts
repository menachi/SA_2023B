import express from "express";
const router = express.Router();
import studentController from "../controllers/student_controller";
import authMiddleware from "../common/auth_middleware";

router.get("/", authMiddleware, studentController.get.bind(studentController));

router.get("/:id", authMiddleware, studentController.getById.bind(studentController));

router.post("/", authMiddleware, studentController.post.bind(studentController));

router.put("/:id", authMiddleware, studentController.putById.bind(studentController));

router.delete("/:id", authMiddleware, studentController.deleteById.bind(studentController));

export default router;
