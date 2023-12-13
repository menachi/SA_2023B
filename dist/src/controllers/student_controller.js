"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_model_1 = __importDefault(require("../models/student_model"));
const base_controller_1 = __importDefault(require("./base_controller"));
// const studentController = new BaseController<IStudent>(StudentModel);
class StudentController extends base_controller_1.default {
    constructor() {
        super(student_model_1.default);
    }
}
exports.default = new StudentController();
//# sourceMappingURL=student_controller.js.map