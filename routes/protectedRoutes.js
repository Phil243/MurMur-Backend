import { Router } from "express";
import { getUser } from "../controllers/usersControllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const protectedRoute = Router();

protectedRoute.route("/me").get(verifyToken, getUser)

export default protectedRoute;