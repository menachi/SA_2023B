const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
  },
});

module.exports = mongoose.model("Students", studentSchema);
