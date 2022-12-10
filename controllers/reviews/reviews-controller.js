import * as reviewDao from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req,res) => {
        const newReview = req.body;
        const actualReview = await reviewDao.createReview(newReview)
        res.json(actualReview)
    }

    const deleteReview = async (req,res) => {
        const rid = req.params.rid;
        const status = await reviewDao.deleteReview(rid)
        res.json(status)

    }
    app.post('/api/reviews ', createReview)
    app.delete('/api/reviews/:rid', deleteReview())
}
export default ReviewsController;