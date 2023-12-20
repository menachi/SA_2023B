"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_post_model_1 = __importDefault(require("../models/student_post_model"));
const base_controller_1 = require("./base_controller");
class StudentPostController extends base_controller_1.BaseConstroller {
    constructor() {
        super(student_post_model_1.default);
    }
}
exports.default = new StudentPostController();
//# sourceMappingURL=student_post_controller.js.map