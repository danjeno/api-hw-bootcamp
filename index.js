import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import studentRoute from "./routes/studentRoute.js";

const app = express();
const port = 3001;

dotenv.config();

app.use(express.json());

//Students collection

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection to mongoDB is successfull!");
  } catch (error) {
    console.error(error);
  }
};

app.use("/api", studentRoute);

app.listen(port, () => {
  connectionToDB();
  console.log(`server started on port ${port}`);
});
