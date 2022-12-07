import * as dao from './users-dao.js'
import {findUserByCredentials, findUserByUsername} from "./users-dao.js";

let currentUser = null

const UsersController2 = (app) => {
    const createUser = async (req, res) => {
        const user = req.body
        const actualUser = await dao.createUser(user)
        res.json(actualUser)
    }
    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers()
        res.json(users)
    }
    const deleteUser = async (req, res) => {
        const uid = req.params.uid
        const status = await dao.deleteUser(uid)
        res.json(status)
    }
    const updateUser = async (req, res) => {
        const uid = req.params.uid
        const updates = req.body
        const status = await dao.updateUser(uid,  updates)
        res.json(status)
    }

    const register = async (req, res) => {
        const user = req.body
        const existingUser = await findUserByUsername(user.username)
        if (existingUser) {
            res.sendStatus(403)
            return
        }
        const actualUser = await dao.createUser(user)
        currentUser = actualUser
        res.json(actualUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await findUserByCredentials(credentials.username, credentials.password)
        if (!existingUser) {
            res.sendStatus(403)
            return
        }
        currentUser = existingUser
        res.json(existingUser)
    }

    const profile = async (req, res) => {
        if (currentUser) {
            res.json(currentUser)
            return
        }
        res.sendStatus(403)
    }

    const logout = (req, res) => {
        currentUser = null
        res.sendStatus(200)
    }

    app.post('/api/users', createUser)
    app.get('/api/users', findAllUsers)
    app.delete('/api/users/:uid', deleteUser)
    app.put('/api/users/:uid', updateUser)

    app.post('/api/register', register)
    app.post('/api/login', login)
    app.post('/api/profile', profile)
    app.post('/api/logout', logout)
}

export default UsersController2