import express from "express";
import cors from 'cors';
import session from 'express-session'
import RecipesController from "./controllers/recipes/recipes-controller.js";
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";
import SessionController from "./session-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import FollowsController from "./controllers/follows/follows-controller.js";
import LikesController from "./controllers/likes/likes-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";


//const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/whipup';
const CONNECTION_STRING = 'mongodb://localhost:27017/whipup';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}


mongoose.connect(CONNECTION_STRING, options);
console.log("Connected to MongoDB: " + CONNECTION_STRING);

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(express.json());
SessionController(app);
HelloController(app);
UsersController(app);
RecipesController(app);
FollowsController(app);
LikesController(app);
ReviewsController(app);


app.listen(process.env.PORT || 4000);
console.log("Server started, listening on port " + (process.env.PORT || 4000));