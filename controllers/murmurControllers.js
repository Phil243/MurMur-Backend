import Murmur from "../models/Murmur.js";
import murmurRouter from "../routes/murmurRouter.js";

export const createNewMurmur = async (req, res) => {
    try {
      const { user_id, city, tip, picture, address, date, tags } = req.body;
      const newMurmur = await Murmur.create({ user_id, city, tip, picture, address, date, tags });
      res.status(201).json(newMurmur);
    } catch (error) {
      res.status(500).json(error);
    }
  };

export const getMurmurByCity = async (req, res) => {
  try {
    const {cityname} = req.params;
    const murMurList = await Murmur.find({city: cityname}).exec();
    res.status(200).json(murMurList);
  } catch (error) {
    res.status(404).json(error);
  }
  
};

