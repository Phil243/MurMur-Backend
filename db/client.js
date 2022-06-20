import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(console.log("Connected"))
  .catch((err) => console.log(err));