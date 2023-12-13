import Student from "../models/student_model";
import { Request, Response } from "express";

const getAllStudents = async (req: Request, res: Response) => {
  console.log("getAllStudents");
  try {
    if (req.query.name) {
      const students = await Student.find({ name: req.query.name });
      res.send(students);
    } else {
      const students = await Student.find();
      res.send(students);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStudentById = async (req: Request, res: Response) => {
  console.log("getStudentById:" + req.params.id);
  try {
    const student = await Student.findById(req.params.id);
    res.send(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postStudent = async (req: Request, res: Response) => {
  console.log("postStudent:" + req.body);
  const student = new Student(req.body);
  try {
    await student.save();
    res.status(201).send("OK");
  } catch (err) {
    console.log(err);
    res.status(406).send("fail: " + err.message);
  }
};

const putStudentById = (req: Request, res: Response) => {
  res.send("put student by id: " + req.params.id);
};

const deleteStudentById = (req: Request, res: Response) => {
  res.send("delete student by id: " + req.params.id);
};

//what is REST API?
//REST API is a way of accessing data from a server.

export default {
  getAllStudents,
  getStudentById,
  postStudent,
  putStudentById,
  deleteStudentById,
};
