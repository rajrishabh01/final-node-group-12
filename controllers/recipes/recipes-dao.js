import recipesModel from './recipes-model.js';

export const findRecipes = async () => await recipesModel.find();
export const createRecipe = async (recipe) => await recipesModel.create(recipe);
export const deleteRecipe = async (rid) => await recipesModel.deleteOne({_id: rid});
export const updateRecipe = async (rid, recipe) => await recipesModel.updateOne({_id: rid}, {$set: recipe});