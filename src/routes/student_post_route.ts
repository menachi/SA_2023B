import express from "express";
const router = express.Router();
import studentPostController from "../controllers/student_post_controller";

router.get("/", studentPostController.get.bind(studentPostController));

router.get("/:id", studentPostController.getById.bind(studentPostController));

router.post("/", studentPostController.post.bind(studentPostController));

router.put("/:id", studentPostController.putById.bind(studentPostController));

router.delete("/:id", studentPostController.deleteById.bind(studentPostController));

export default router;
