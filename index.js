import "dotenv/config.js";
import "./db/client.js";
import express from "express";
import usersRouter from "./routes/usersRouter.js";
import murmurRouter from "./routes/murmurRouter.js";
import protectedRoute from "./routes/protectedRoutes.js";
import cors from "cors";


const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  exposedHeaders: 'Authorization',
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/users", usersRouter);
app.use("/api/protected", protectedRoute);
app.use("/api/murmur", murmurRouter);

app.get("/", (req, res) =>
  res.send("<h1>This is our MurMur Api!</h1>")
);

app.listen(port, () => console.log(`Server running in port ${port}`));