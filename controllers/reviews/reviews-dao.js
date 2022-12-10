import reviewsModel from "./reviews-model.js";

export const createReview = async (review) =>
        await reviewsModel.create(review)

export const deleteReview = async (rid) =>
    await reviewsModel.deleteOne({_id:rid})
