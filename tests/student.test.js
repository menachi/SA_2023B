const request = require("supertest");
const initApp = require("../app");
const mongoose = require("mongoose");
const Student = require("../models/student_model");

let app;
beforeAll(async () => {
  app = await initApp();
  console.log("beforeAll");
  await Student.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

const student = {
  name: "John Doe",
  _id: "1234567890",
};

describe("Student tests", () => {
  const addStudent = async (student) => {
    const response = await request(app).post("/student").send(student);
    expect(response.statusCode).toBe(201);
    expect(response.text).toBe("OK");
  };
  test("Test Get All Students - empty response", async () => {
    const response = await request(app).get("/student");
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual([]);
  });

  test("Test Post Student", async () => {
    addStudent(student);
  });

  test("Test Get All Students with one student in DB", async () => {
    const response = await request(app).get("/student");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    const st = response.body[0];
    expect(st.name).toBe(student.name);
    expect(st._id).toBe(student._id);
  });

  test("Test Post duplicate Student", async () => {
    const response = await request(app).post("/student").send(student);
    expect(response.statusCode).toBe(406);
  });

  test("Test PUT /student/:id", async () => {
    const updatedStudent = { ...student, name: "Jane Doe 33" };
    const response = await request(app)
      .put(`/student/${student._id}`)
      .send(updatedStudent);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(updatedStudent.name);
  });

  test("Test DELETE /student/:id", async () => {
    const response = await request(app).delete(`/student/${student._id}`);
    expect(response.statusCode).toBe(200);
  });
});
