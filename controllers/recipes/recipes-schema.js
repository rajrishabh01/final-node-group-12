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
      ingredients: [
          {
              ingredientId: mongoose.Schema.Types.ObjectId
          }
      ],
      categories: [
          {
              categoryId: mongoose.Schema.Types.ObjectId
          }
      ],
      reviews: [
          {
              reviewId: mongoose.Schema.Types.ObjectId
          }
      ],
    recipe_instructions: String,
    recipe_image: String,
    cost_per_serving: Number
}, { collection: 'recipes' });
export default recipesSchema;