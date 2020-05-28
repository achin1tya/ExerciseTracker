
const router = require('express').Router();

let Player = require('../models/player.model');


// create Endpoints here 
// / 
// /add
// /find/:username


// get 
    // get all players 
    router.route('/').get((req,res)=>{
        Player.find()
        .then(players => res.json(players))
        .catch(err => res.status(400).json(`Error: `+ err));
    });

    // get player by username 
    router.route('/:username').get((req,res)=>{
        Player.find({username:req.params.username})
        .then(player => res.json(player))
        .catch(err => res.status(400).json(`Error `+ err));
    })
// delete 
    router.route('/:id').delete((req,res) => {
        Player.findByIdAndDelete({_id:req.params.id})
        .then( player => res.json('Player Deleted'))
        .catch(err => res.status(400).json(`Error `+ err));
    });

// post 
    //post request or add new player
    router.route('/add').post((req,res) => {
        const username = req.body.username;
        const newPlayer = new Player({
            username
        })

        newPlayer.save()
        .then(() =>{res.json('Player added!')})
        .catch(err => res.status(400).json(`Error: `+ err));
    });

module.exports = router;