const HelloController = (app) => {

    
    app.get('/hello', (req, res) => {
        console.log("In hello")
        console.log(req.session)
        console.log(req.body)
        console.log(req.session['currentUser'])
        res.send('Life is good! This server works :)')});
    app.get('/', (req, res) => {
        res.send('Welcome to the backend app for CS 5010 project of team 12')});
}

export default HelloController;

