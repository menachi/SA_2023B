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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const mongoose_1 = __importDefault(require("mongoose"));
const student_model_1 = __importDefault(require("../models/student_model"));
let app;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    app = yield (0, app_1.default)();
    console.log("beforeAll");
    yield student_model_1.default.deleteMany();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
}));
const student = {
    name: "John Doe",
    _id: "1234567890",
};
describe("Student tests", () => {
    const addStudent = (student) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).post("/student").send(student);
        expect(response.statusCode).toBe(201);
        expect(response.text).toBe("OK");
    });
    test("Test Get All Students - empty response", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/student");
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual([]);
    }));
    test("Test Post Student", () => __awaiter(void 0, void 0, void 0, function* () {
        addStudent(student);
    }));
    test("Test Get All Students with one student in DB", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/student");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        const st = response.body[0];
        expect(st.name).toBe(student.name);
        expect(st._id).toBe(student._id);
    }));
    test("Test Post duplicate Student", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).post("/student").send(student);
        expect(response.statusCode).toBe(406);
    }));
    // test("Test PUT /student/:id", async () => {
    //   const updatedStudent = { ...student, name: "Jane Doe 33" };
    //   const response = await request(app)
    //     .put(`/student/${student._id}`)
    //     .send(updatedStudent);
    //   expect(response.statusCode).toBe(200);
    //   expect(response.body.name).toBe(updatedStudent.name);
    // });
    // test("Test DELETE /student/:id", async () => {
    //   const response = await request(app).delete(`/student/${student._id}`);
    //   expect(response.statusCode).toBe(200);
    // });
});
//# sourceMappingURL=student.test.js.map