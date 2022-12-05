import mongoose from 'mongoose';

const recipesSchema = mongoose.Schema({
                                          title: String,
                                          summary: String,
                                          createdBy: String,
                                          date_created: Date,
                                          ingredients: Array[String],
                                          categories: Array[String],
                                          reviews: Array[String],
                                          recipe_instructions: String,
                                          recipe_image: String,
                                          cost_per_serving: Number,
                                          likes: Number,
                                          dislikes: Number
                                      }, {collection: 'recipes'});
export default recipesSchema;