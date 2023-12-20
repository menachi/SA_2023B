import mongoose from "mongoose";

export interface IUser {
  email: string;
  password: string;
  _id?: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

});

export default mongoose.model<IUser>("User", userSchema);
