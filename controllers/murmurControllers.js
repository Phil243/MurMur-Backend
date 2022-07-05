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

export const getMurmurById = async (req, res) => {
  try {
    const {id} = req.params;
    const murMur = await Murmur.findById(id).exec();
    res.status(200).json(murMur);
  } catch (error) {
    res.status(404).json(error);
  }
  
};

export const upvoteMurMur = async (req, res) => {
  try {
    const upvotes = await Murmur.find({ "_id": req.body.id, "upvotes.username" : req.body.username}).exec();
    const downvotes = await Murmur.find({ "_id": req.body.id, "downvotes.username" : req.body.username}).exec();

    console.log(upvotes.length);
    if(upvotes.length <= 0)
    {
      if (downvotes.length >= 0)
      {
        const deleteDownvote = await Murmur.findOneAndUpdate({"_id": req.body.id}, { $pull: {"downvotes" : {"username": req.body.username}}},
        {new : true}).exec();
      }
      const murMur = await Murmur.findOneAndUpdate({"_id": req.body.id}, { $push: {"upvotes": {"username": req.body.username}}});
      res.status(200).json(murMur);
    }
    else {
      const murMur = await Murmur.findOneAndUpdate({"_id": req.body.id}, { $pull: {"upvotes" : {"username": req.body.username}}},
      {new : true})
      res.status(200).json(murMur);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

export const downvoteMurMur = async (req, res) => {
  try {
    const downvotes = await Murmur.find({ "_id": req.body.id, "downvotes.username" : req.body.username}).exec();
    const upvotes = await Murmur.find({ "_id": req.body.id, "upvotes.username" : req.body.username}).exec();

    if(downvotes.length <= 0)
    {
      if (upvotes.length >= 0)
      {
        const deleteUpvote = await Murmur.findOneAndUpdate({"_id": req.body.id}, { $pull: {"upvotes" : {"username": req.body.username}}},
        {new : true}).exec();
      }

      const murMur = await Murmur.findOneAndUpdate({"_id": req.body.id}, { $push: {"downvotes": {"username": req.body.username}}});
      res.status(200).json(murMur);
    }
    else {
      const murMur = await Murmur.findOneAndUpdate({"_id": req.body.id}, { $pull: {"downvotes" : {"username": req.body.username}}},
      {new : true})
      res.status(200).json(murMur);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createComment = async (req, res) => {
  try {
    const {id} = req.params;
    const murMur = await Murmur.findOneAndUpdate({"_id": id}, {$push: {"comments": {"username": req.body.username, "body": req.body.comment, "date": req.body.date}}})
    res.status(200).json(murMur);
  } catch (error) {
    res.status(404).json(error);
  }
}