"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_model_1 = __importDefault(require("../models/student_model"));
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getAllStudents");
    try {
        if (req.query.name) {
            const students = yield student_model_1.default.find({ name: req.query.name });
            res.send(students);
        }
        else {
            const students = yield student_model_1.default.find();
            res.send(students);
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getStudentById:" + req.params.id);
    try {
        const student = yield student_model_1.default.findById(req.params.id);
        res.send(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
const postStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("postStudent:" + req.body);
    const student = new student_model_1.default(req.body);
    try {
        yield student.save();
        res.status(201).send("OK");
    }
    catch (err) {
        console.log(err);
        res.status(406).send("fail: " + err.message);
    }
});
const putStudentById = (req, res) => {
    res.send("put student by id: " + req.params.id);
};
const deleteStudentById = (req, res) => {
    res.send("delete student by id: " + req.params.id);
};
//what is REST API?
//REST API is a way of accessing data from a server.
exports.default = {
    getAllStudents,
    getStudentById,
    postStudent,
    putStudentById,
    deleteStudentById,
};
//# sourceMappingURL=student_controller.js.map