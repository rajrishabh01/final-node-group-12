import mongoose from "mongoose";

const followsSchema = mongoose.Schema({
    followed: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', unique:true},
    follower: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', unique:true},
}, {collection: 'follows'})

export default followsSchema