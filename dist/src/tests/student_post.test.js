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
const student_post_model_1 = __importDefault(require("../models/student_post_model"));
const user_model_1 = __importDefault(require("../models/user_model"));
let user = {
    email: "testStudent@test.com",
    password: "1234567890",
};
let accessToken;
let app;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    app = yield (0, app_1.default)();
    console.log("beforeAll");
    yield student_post_model_1.default.deleteMany();
    yield user_model_1.default.deleteMany({ 'email': user.email });
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
}));
const post1 = {
    title: "title1",
    message: "message1",
};
describe("Student post tests", () => {
    const addStudentPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .post("/studentpost")
            .set("Authorization", "JWT " + accessToken)
            .send(post);
        expect(response.statusCode).toBe(201);
        expect(response.text).toBe("OK");
    });
    test("Get token", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .post("/auth/register")
            .send(user);
        user._id = response.body._id;
        const response2 = yield (0, supertest_1.default)(app)
            .post("/auth/login")
            .send(user);
        accessToken = response2.body.accessToken;
        expect(accessToken).toBeDefined();
    }));
    test("Test Get All Student posts - empty response", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .get("/studentpost")
            .set("Authorization", "JWT " + accessToken);
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual([]);
    }));
    test("Test Post Student post", () => __awaiter(void 0, void 0, void 0, function* () {
        addStudentPost(post1);
    }));
    test("Test Get All Students posts with one post in DB", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/studentpost")
            .set("Authorization", "JWT " + accessToken);
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        const rc = response.body[0];
        expect(rc.title).toBe(post1.title);
        expect(rc.message).toBe(post1.message);
        expect(rc.owner).toBe(user._id);
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
//# sourceMappingURL=student_post.test.js.map