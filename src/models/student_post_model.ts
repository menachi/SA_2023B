import mongoose from "mongoose";

export interface IStudentPost {
  title: string;
  message: string;
  owner: string;
}

const studentPostSchema = new mongoose.Schema<IStudentPost>({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IStudentPost>("StudentPost", studentPostSchema);
