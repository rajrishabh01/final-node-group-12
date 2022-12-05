const HelloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is good! This server works :)')});
    app.get('/', (req, res) => {
        res.send('Welcome to the backend app for CS 5010 project of team 12')});
}

export default HelloController;

