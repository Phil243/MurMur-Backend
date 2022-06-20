import User from "../models/User.js";

export const createNewUser = async (req, res) => {
    try {
      const { username, email, password, picture, accountlikes } = req.body;
      const newUser = await User.create({ username, email, password, picture, accountlikes });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  };