import mongoose from "mongoose";

//simple schema for students collection in some imaginary course

const studentSchema = new mongoose.Schema(
  {
    studentFullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    finalMark: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("student", studentSchema);
