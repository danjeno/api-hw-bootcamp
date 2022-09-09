import express from "express";
import {
  addStudent,
  getAllStudents,
  getStudentById,
  deleteStudentById,
  updateStudent,
  deleteByFinalMark,
} from "../controller/studentController.js";

const router = express.Router();

router.post("/create", addStudent);

router.get("/get", getAllStudents);

router.get("/get/:id", getStudentById);

router.delete("/delete/:id", deleteStudentById);

router.put("/update/:id", updateStudent);

router.delete("/deleteByFinalMark/:finalMark", deleteByFinalMark);

export default router;
