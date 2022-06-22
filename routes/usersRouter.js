import { Router } from "express";
import {
    createNewUser, getUser, logIn, verifySession,
} from "../controllers/usersControllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const usersRouter = Router();

usersRouter.route("/register").post(createNewUser);
usersRouter.route("/login").post(logIn);
usersRouter.route("/verify").get(verifyToken, verifySession);

export default usersRouter;