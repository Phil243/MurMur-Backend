import { Router } from "express";
import {
    createNewUser, getUser,
} from "../controllers/usersControllers.js";

const usersRouter = Router();

usersRouter.route("/").post(createNewUser);

usersRouter.route("/:username").get(getUser);


export default usersRouter;