const router = require('express').Router();
const Player = require('../models/bsplayer');

router.post('/players/:id/:name/:lastName/:team', (req, res, next) => {
    const {id, name, lastName, team} = req.params;

    Player.create({id, name, lastName, team})
        .then((user) => {
            res.send({data: user})  
        })
        .catch(err => res.status(500).send("ERROR"))
});

router.get('/players', (req, res) => {
    Player.find({})
        .then((data) => res.send({data: data}))
        .catch(err => res.status(500).send("ERROR"))
})

module.exports = router;