import { Router } from "express";
import {
    createNewMurmur, getMurmurByCity,
} from "../controllers/murmurControllers.js";

const murmurRouter = Router();

murmurRouter.route("/").post(createNewMurmur);

murmurRouter.route("/:cityname").get(getMurmurByCity);


export default murmurRouter;