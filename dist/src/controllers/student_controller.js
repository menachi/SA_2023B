"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_model_1 = __importDefault(require("../models/student_model"));
const base_controller_1 = __importDefault(require("./base_controller"));
const studentController = (0, base_controller_1.default)(student_model_1.default);
exports.default = studentController;
//# sourceMappingURL=student_controller.js.map