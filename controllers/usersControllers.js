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

export const getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username: username}).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};