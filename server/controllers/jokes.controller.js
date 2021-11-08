const Joke = require("../models/jokes.model")

module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allDaJokes => res.json({ message: "Prepare to Laugh 🤣", jokes: allDaJokes }))
            .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        },
        
        getOneJoke: (req, res) => {
            Joke.findOne({ _id: req.params.id})
                .then(oneJoke => res.json({ joke: oneJoke }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            
        createAJoke: (req, res) => {
            Joke.create(req.body)
            .then(newJoke => res.json({ joke: newJoke}))
            .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        },
        
        updateOldJoke: (req, res) => {
            Joke.findByIdAndUpdate(
                {_id: req.params.id}, 
                req.body,
                {new: true, runValidators: true}
                )
                .then(updateJoke=> res.json({ joke: updateJoke }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        },
            
            deleteJoke: (req, res) =>{
                Joke.findByIdAndDelete(req.params.id)
                .then(result => res.json({ result: result }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        }
            
}