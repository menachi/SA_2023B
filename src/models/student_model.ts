import mongoose from "mongoose";

export interface IStudent {
  name: string;
  _id: string;
}

const studentSchema = new mongoose.Schema<IStudent>({
  name: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
  },
});

export default mongoose.model<IStudent>("Students", studentSchema);
