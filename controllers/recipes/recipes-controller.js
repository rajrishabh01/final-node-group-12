import * as recipesDao from './recipes-dao.js';

export const getRecipes = () => recipes;

const createRecipe = async (req, res) => {
    const newRecipe = req.body
    const insertedRecipe = await recipesDao
        .createRecipe(newRecipe);
    res.json(insertedRecipe);
}

const findAllRecipes  = async (req, res) => {
    const recipes = await recipesDao.findAllRecipes();
    res.json(recipes);
}

const updateRecipe = async (req, res) => {
    const recipeIdToUpdate = req.params['rid'];
    const recipeUpdates = req.body;
    const recipeIndex = recipes.findIndex(
        (r) => r._id === recipeIdToUpdate)
    recipes[recipeIndex] = {
        ...recipes[recipeIndex],
        ...recipeUpdates
    }
    res.json(200);
}

const deleteRecipe = async (req, res) => {
    const recipeIdToDelete = req.params['rid'];
    const status = await recipesDao
        .deleteRecipe(recipeIdToDelete);
    res.json(status);
}

const RecipesController = (app) => {
    app.post('/api/recipes', createRecipe);
    app.get('/api/recipes', findAllRecipes);
    app.put('/api/recipes/:rid', updateRecipe);
    app.delete('/api/recipes/:rid', deleteRecipe);
}

export default RecipesController;