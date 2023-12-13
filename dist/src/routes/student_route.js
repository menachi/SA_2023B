"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const student_controller_1 = __importDefault(require("../controllers/student_controller"));
router.get("/", student_controller_1.default.get.bind(student_controller_1.default));
router.get("/:id", student_controller_1.default.getById.bind(student_controller_1.default));
router.post("/", student_controller_1.default.post.bind(student_controller_1.default));
router.put("/:id", student_controller_1.default.putById.bind(student_controller_1.default));
router.delete("/:id", student_controller_1.default.deleteById.bind(student_controller_1.default));
exports.default = router;
//# sourceMappingURL=student_route.js.map