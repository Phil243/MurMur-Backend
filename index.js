import "dotenv/config.js";
import "./db/client.js";
import express from "express";
import usersRouter from "./routes/usersRouter.js";
import murmurRouter from "./routes/murmurRouter.js";
import protectedRoute from "./routes/protectedRoutes.js";
import cors from "cors";
import path from "path";


const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  exposedHeaders: 'Authorization',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.resolve("./public")));
app.use("/api/users", usersRouter);
app.use("/api/protected", protectedRoute);
app.use("/api/murmur", murmurRouter);

app.get("/", (req, res) =>{
  res.write("<h1># MurMur - API</p>")
  res.write("<h3>Welcome to MurMur - API, our request-handler connecting the MurMur-Travel Guide to our database.</h3>")
  res.write("<p>Find a proper documentation at our github @ https://github.com/Phil243/MurMur-Backend</p>")
  res.send()
});

app.listen(port, () => console.log(`Server running in port ${port}`));