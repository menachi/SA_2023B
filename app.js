const env = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const initApp = () => {
  const promise = new Promise((resolve, reject) => {
    const db = mongoose.connection;
    db.once("open", () => console.log("Connected to Database"));
    db.on("error", (error) => console.error(error));
    mongoose.connect(process.env.DB_URL).then(() => {
      const app = express();

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));

      const studentRoute = require("./routes/student_route");
      app.use("/student", studentRoute);
      resolve(app);
    });
  });
  return promise;
};

module.exports = initApp;
