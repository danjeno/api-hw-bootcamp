import studentModel from "../models/studentModel.js";
import bcrypt from "bcrypt";

export const addStudent = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newStudent = new studentModel({ ...req.body, password: hash });
    await newStudent.save();
    res.status(201).send("new student created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const allStudents = await studentModel.find({}, { password: 0 });
    res.status(202).json(allStudents);
  } catch (error) {
    console.error(error);
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id);
    const { password, ...remainingStudentData } = student._doc;
    res.status(200).json(remainingStudentData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteStudentById = async (req, res) => {
  try {
    await studentModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`student with id ${req.params.id} deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error(error);
  }
};

export const deleteByFinalMark = async (req, res) => {
  //delete all students with final mark from request
  try {
    await studentModel.deleteMany({ finalMark: req.params.finalMark });
    console.log(`final mark ${req.params.finalMark} deleted`); //debugging
    res
      .status(200)
      .send(`students with final mark ${req.params.finalMark} deleted`);
  } catch (error) {
    console.error(error);
  }
};
