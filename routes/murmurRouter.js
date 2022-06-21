import { Router } from "express";
import {
    createNewMurmur, getMurmurByCity, getMurmurById,
} from "../controllers/murmurControllers.js";

const murmurRouter = Router();

murmurRouter.route("/").post(createNewMurmur);

murmurRouter.route("/:cityname").get(getMurmurByCity);

murmurRouter.route("/id/:id").get(getMurmurById);


export default murmurRouter;