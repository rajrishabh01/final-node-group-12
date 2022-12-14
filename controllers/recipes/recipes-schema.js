import mongoose from 'mongoose';

const recipesSchema = mongoose.Schema({
    title: { type: String, required: true },
    likes: { type: Number, default: 0 },
    liked: { type: Boolean, default: false },
    isApiCreated: {type:Boolean, default:false},
    dislikes: Number,
    disliked: { type: Boolean, default: false },
    rating: String,
    cuisine: { type: String, enum: ['MEXICAN', 'CHINESE', 'FRENCH', 'AMERICAN', 'INDIAN', 'THAI', 'ITALIAN'] },
    summary: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    dateCreated: Date,
      ingredients: {type: Array},
      categories: [
          {
              categoryName: String
          }
      ],
      reviews: [
          {
              reviewId: mongoose.Schema.Types.ObjectId
          }
      ],
    recipe_instructions: String,
    recipe_image: String,
    cost_per_serving: Number,
    calories: Number,
    preparation_time: Number,
    promotions: String,
    pro_address: String

}, { collection: 'recipes' });
export default recipesSchema;