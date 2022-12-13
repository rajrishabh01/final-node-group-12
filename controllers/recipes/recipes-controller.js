import * as recipesDao from './recipes-dao.js';

export const getRecipes = () => recipes;

const createRecipe = async (req, res) => {
    const newRecipe = req.body
    console.log("In Create Recipe")
    console.log(req.session)
    console.log(req.body)
    //const currentUser = req.session['currentUser']
    //newRecipe.author = currentUser._id
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

const findRecipesById = async (req, res) => {
    const rid = req.params.rid
    const recipe = await recipesDao.findRecipesById(rid)
    if (recipe) {
        res.json(recipe)
        return
    }
    res.sendStatus(404)
}

const findRecipesByUserId = async (req, res) => {
    const uid = req.params.uid
    const recipes = await recipesDao.findRecipesByUserId(uid)
    if (recipes) {
        res.json(recipes)
        return
    }
    res.sendStatus(404)
}

const RecipesController = (app) => {
    app.post('/api/recipes', createRecipe);
    app.get('/api/recipes/:rid', findRecipesById);
    app.get('/api/recipes/:uid/user', findRecipesByUserId);
    app.get('/api/recipes', findAllRecipes);
    app.put('/api/recipes/:rid', updateRecipe);
    app.delete('/api/recipes/:rid', deleteRecipe);
}

export default RecipesController;