import recipesModel from './recipes-model.js';

export const findAllRecipes = async () => {
    const recipes = await recipesModel.find()
    return recipes
}
export const createRecipe = async (recipe) => {
    const actualInsertedRecipe = await recipesModel.create(recipe)
    return actualInsertedRecipe
}
export const deleteRecipe = async (rid) => {
    const status = await recipesModel.deleteOne({_id: rid})
    return status
}
export const updateRecipe = async (rid, recipe) => {
    await recipesModel.updateOne({_id: rid}, {$set: recipe})
}