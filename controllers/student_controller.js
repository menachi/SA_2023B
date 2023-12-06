const Student = require("../models/student_model");

const getAllStudents = async (req, res) => {
  console.log("getAllStudents");
  try {
    let students = "";
    if (req.query.name) {
      students = await Student.find({ name: req.query.name });
    } else {
      students = await Student.find();
    }
    res.send(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStudentById = async (req, res) => {
  console.log("getStudentById:" + req.params.id);
  try {
    const student = await Student.findById(req.params.id);
    res.send(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postStudent = async (req, res) => {
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

const putStudentById = (req, res) => {
  res.send("put student by id: " + req.params.id);
};

const deleteStudentById = (req, res) => {
  res.send("delete student by id: " + req.params.id);
};

//what is REST API?
//REST API is a way of accessing data from a server.

module.exports = {
  getAllStudents,
  getStudentById,
  postStudent,
  putStudentById,
  deleteStudentById,
};
