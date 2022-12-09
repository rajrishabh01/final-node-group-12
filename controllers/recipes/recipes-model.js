import mongoose from 'mongoose';
import recipesSchema from "./recipes-schema.js";

const recipesModel = mongoose
    .model('RecipeModel', recipesSchema);
export default recipesModel;