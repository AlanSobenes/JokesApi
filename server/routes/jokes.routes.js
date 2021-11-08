const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get('/api/jokes/', JokesController.getAllJokes),
    app.get('/api/jokes/:id', JokesController.getOneJoke),
    app.post('/api/jokes/', JokesController.createAJoke),
    app.put('/api/jokes/:id', JokesController.updateOldJoke),
    app.delete('/api/jokes/:id', JokesController.deleteJoke)
}