import { Router } from "express";
import {
    createNewMurmur, getMurmurByCity, getMurmurById, upvoteMurMur,
} from "../controllers/murmurControllers.js";

const murmurRouter = Router();

murmurRouter.route("/").post(createNewMurmur);

murmurRouter.route("/:cityname").get(getMurmurByCity);

murmurRouter.route("/id/:id").get(getMurmurById);

murmurRouter.route("/upvote").put(upvoteMurMur);


export default murmurRouter;