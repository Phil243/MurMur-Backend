import { Router } from "express";
import {
    createNewUser,
} from "../controllers/usersControllers.js";

const usersRouter = Router();

usersRouter.route("/").post(createNewUser);


export default usersRouter;