import Murmur from "../models/Murmur.js";

export const createNewMurmur = async (req, res) => {
    try {
      const { user_id, city, tip, picture, address, date, tags } = req.body;
      const newMurmur = await Murmur.create({ user_id, city, tip, picture, address, date, tags });
      res.status(201).json(newMurmur);
    } catch (error) {
      res.status(500).json(error);
    }
  };

