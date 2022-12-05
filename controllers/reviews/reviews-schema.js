import mongoose from 'mongoose';

const reviewsSchema = mongoose.Schema({
                                          recipeId: String,
                                          userID: String,
                                          likes: Number,
                                          dislikes: Number,
                                          comments: Array[String],
                                          rating: Number
                                      }, {collection: 'reviews'});
export default reviewsSchema;