import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    review: String,
    recipeID: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    isApiCreated: {type:Boolean, default:false}
}, {collection: 'reviews'})
export default reviewsSchema