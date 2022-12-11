import mongoose from 'mongoose';

const recipesSchema = mongoose.Schema({
    title: { type: String, required: true },
    likes: { type: Number, default: 0 },
    liked: { type: Boolean, default: false },
    isApiCreated: {type:Boolean, default:false},
    dislikes: Number,
    rating: String,
    cateogory: { type: String, enum: ['MEXICAN', 'CHINESE', 'FRENCH'] },
    summary: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    dateCreated: Date,
    //   ingredients: Array[String],
    //   categories: Array[String],
    //   reviews: Array[String],
    recipe_instructions: String,
    recipe_image: String,
    cost_per_serving: Number
}, { collection: 'recipes' });
export default recipesSchema;