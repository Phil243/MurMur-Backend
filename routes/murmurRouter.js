import { Router } from "express";
import {
    createNewMurmur, downvoteMurMur, getMurmurByCity, getMurmurById, upvoteMurMur,
} from "../controllers/murmurControllers.js";

const murmurRouter = Router();

murmurRouter.route("/").post(createNewMurmur);

murmurRouter.route("/:cityname").get(getMurmurByCity);

murmurRouter.route("/id/:id").get(getMurmurById);

murmurRouter.route("/upvote").put(upvoteMurMur);
murmurRouter.route("/downvote").put(downvoteMurMur);


export default murmurRouter;