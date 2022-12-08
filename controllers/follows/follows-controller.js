import * as dao from './follows-dao.js'
const FollowsController = (app) => {
    const followUser = async (req, res) => {
        const follow = req.body
        const currentUser = req.session['currentUser']
        follow.follower = currentUser._id
        const actualFollow = await dao.followUser(follow)
        res.json(actualFollow)
    }
    const findFollowers = async (req, res) => {
        const followed = req.params.followed
        const followers = await dao.findFollowers(followed)
        res.json(followers)
    }
    const findFollowing = async (req, res) => {
        const follower = req.params.follower
        const followed = await dao.findFollowing(follower)
        res.json(followed)
    }

    app.post('/api/follows', followUser)
    app.get('/api/users/:followed/followers', findFollowers)
    app.get('/api/users/:follower/following', findFollowing)
}

export default FollowsController