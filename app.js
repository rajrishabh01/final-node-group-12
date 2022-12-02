import express from "express";
import cors from 'cors'

const app = express();
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 4000)