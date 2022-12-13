import * as likesDao from "./likes-dao.js";


const LikesController = (app) => {
    // const populate = (
    //     {
    //         rawResults, fieldToPopulate,
    //         sourceData, sourceField
    //     }) => {
    //     const populatedResults = rawResults.map((raw) => {
    //         const source = sourceData.find(source => source[sourceField] === raw[fieldToPopulate])
    //         return ({
    //             ...raw,
    //             [fieldToPopulate]: source
    //         })
    //     })
    //     return populatedResults
    // }
    const userLikesRecipe = async (req, res) => {
        const uid = req.params.uid
        const rid = req.params.rid
        console.log(rid);
        const newLike = await likesDao.userLikesRecipe(uid, rid)
        res.json(newLike)
    }

    const userUnlikesRecipe = async (req, res) => {
        const uid = req.params.uid
        const rid = req.params.rid
        const status = await likesDao.userUnlikesRecipe(uid, rid)
        res.send(status)
    }

    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes()
        res.json(likes)
    }

    const findRecipesLikedByUser = async (req, res) => {
        const uid = req.params.uid
        const recipes = await likesDao.findRecipesLikedByUser(uid)
        res.json(recipes)
    }

    const findUsersWhoLikedRecipe= async (req, res) => {
        const rid = req.params.rid
        const users = await likesDao.findUsersThatLikeRecipe(rid)
        res.json(users)
    }

    app.post('/api/users/:uid/likes/:rid', userLikesRecipe)
    app.delete('/api/users/:uid/unlikes/:rid', userUnlikesRecipe)
    app.get('/api/likes', findAllLikes)
    app.get('/api/users/:uid/likes', findRecipesLikedByUser)
    app.get('/api/recipes/:rid/likes', findUsersWhoLikedRecipe)
}

export default LikesController;