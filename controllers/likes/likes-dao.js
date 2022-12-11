import likesModel from "./likes-model.js";

export const userLikesRecipe = async (uid, rid) => {
    return await likesModel.create({user: uid, recipe: rid})
}
export const userUnlikesRecipe = async(uid, rid) => {
    return await likesModel.deleteOne({user: uid, recipe: rid})
}
export const findRecipesLikedByUser = async(uid) => {
    return await likesModel
        .find({user: uid}, {user: false})
        .populate('recipe', 'title')
        .exec()
}
export const findUsersThatLikeRecipe = async(rid) => {
    return await likesModel.find({recipe: rid})
        .populate('user', 'username')
        .exec()
}
export const findAllLikes = async () =>
    await likesModel.find()
