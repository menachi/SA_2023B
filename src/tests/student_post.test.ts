import { Express } from "express";
import request from "supertest";
import initApp from "../app";
import mongoose from "mongoose";
import StudentPost, { IStudentPost } from "../models/student_post_model";

let app: Express;
beforeAll(async () => {
  app = await initApp();
  console.log("beforeAll");
  await StudentPost.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

const post1: IStudentPost = {
  title: "title1",
  message: "message1",
  owner: "1234567890",
};

describe("Student post tests", () => {
  const addStudentPost = async (post: IStudentPost) => {
    const response = await request(app).post("/studentpost").send(post);
    expect(response.statusCode).toBe(201);
    expect(response.text).toBe("OK");
  };

  test("Test Get All Student posts - empty response", async () => {
    const response = await request(app).get("/studentpost");
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual([]);
  });

  test("Test Post Student post", async () => {
    addStudentPost(post1);
  });

  test("Test Get All Students posts with one post in DB", async () => {
    const response = await request(app).get("/studentpost");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    const rc = response.body[0];
    expect(rc.title).toBe(post1.title);
    expect(rc.message).toBe(post1.message);
    expect(rc.owner).toBe(post1.owner);
  });


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
