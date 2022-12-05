import express from "express";
import cors from 'cors';
import RecipesController from "./controllers/recipes/recipes-controller.js";
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/recipe';
mongoose.connect(CONNECTION_STRING);
console.log("Connected to MongoDB: " + CONNECTION_STRING);

const app = express();

app.use(express.json());
app.use(cors());
HelloController(app);
RecipesController(app);

app.listen(process.env.PORT || 4000);
console.log("Server started, listening on port " + (process.env.PORT || 4000));