import mongoose from "mongoose";
const { Schema, model } = mongoose;

const murmurSchema = new Schema({   
    user_id: String,
    city: {type:String, required: true},
    tip: {type:String, required: true},
    picture: String,
    address: String,
    date: {type: Date, default: Date.now},
    tags: [{type:String, required: true}],
    comments: [{username: String, body: String, date: Date}],
    upvotes: [{username: String}], 
    downvotes:[{username: String}],
    uploadedPicture: {type:String}
    });

export default model("Murmur", murmurSchema);