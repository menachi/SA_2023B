import express from "express";
const router = express.Router();
import studentPostController from "../controllers/student_post_controller";
import authMiddleware from "../common/auth_middleware";

router.get("/", studentPostController.get.bind(studentPostController));

router.get("/:id", studentPostController.getById.bind(studentPostController));

router.post("/", authMiddleware, studentPostController.post.bind(studentPostController));

router.put("/:id", authMiddleware, studentPostController.putById.bind(studentPostController));

router.delete("/:id", authMiddleware, studentPostController.deleteById.bind(studentPostController));

export default router;
