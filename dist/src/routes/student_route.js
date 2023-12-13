"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const student_controller_1 = __importDefault(require("../controllers/student_controller"));
router.get("/", student_controller_1.default.getAllStudents);
router.get("/:id", student_controller_1.default.getStudentById);
router.post("/", student_controller_1.default.postStudent);
router.put("/:id", student_controller_1.default.putStudentById);
router.delete("/:id", student_controller_1.default.deleteStudentById);
exports.default = router;
//# sourceMappingURL=student_route.js.map