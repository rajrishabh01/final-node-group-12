import * as recipesDao from './recipes-dao.js';

const createRecipe = async (req, res) => {
    const newRecipe = {
        ...req.body,
        ...templateRecipe
    };
    const insertedRecipe = await recipesDao
        .createRecipe(newRecipe);
    res.json(insertedRecipe);
}

const findRecipes  = async (req, res) => {
    const recipes = await recipesDao.findRecipes();
    res.json(recipes);
}

const updateRecipe = async (req, res) => {
    const recipeIdToUpdate = req.params.rid;
    const updates = req.body;
    const status = await recipesDao
        .updateRecipe(recipeIdToUpdate,
                    updates);
    res.json(status);
}

const deleteRecipe = async (req, res) => {
    const recipeIdToDelete = req.params.rid;
    const status = await recipesDao
        .deleteRecipe(recipeIdToDelete);
    res.json(status);
}

const RecipesController = (app) => {
    app.post('/api/recipes', createRecipe);
    app.get('/api/recipes', findRecipes);
    app.put('/api/recipes/:rid', updateRecipe);
    app.delete('/api/recipes/:rid', deleteRecipe);
}

export default RecipesController;