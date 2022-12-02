import express from "express";
import cors from 'cors'

const app = express();
app.get('/hello', (req, res) => {
    res.send('Life is good! This server works :)')});
app.get('/', (req, res) => {
    res.send('Welcome to the backend app for CS 5010 project of team 11')});

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 4000)