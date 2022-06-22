import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createNewUser = async (req, res) => {
  try {
    const { username, email, password, picture } = req.body;

    const emailExists = await User.findOne({ email: req.body.email });

    if (emailExists) {
      res.status(400).send("Email already in use, please log in.");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        picture,
      });
      const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      if (token && newUser) {
        res
          .status(201)
          .set("Authorization", token)
          .send("User successfully created");
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const findUser = await User.findOne({ email }).select('+password');
    
    const isPasswordCorrect = await bcrypt.compare(
      password,
      findUser.password
    );
    
    if (isPasswordCorrect) {
      const token = jwt.sign(
        { email: findUser.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res
        .status(200)
        .set("Authorization", token)
        .send("Login successful");
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username: username }).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const verifySession = (req, res) => {
  res.status(200).send("Token successfully verified");
};
