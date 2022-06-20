import { Router } from "express";
import {
    createNewMurmur,
} from "../controllers/murmurControllers.js";

const murmurRouter = Router();

murmurRouter.route("/").post(createNewMurmur);


export default murmurRouter;