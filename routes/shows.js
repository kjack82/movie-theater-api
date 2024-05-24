const express = require("express")
const { Show, User } = require('../models/index.js')
const router = express.Router()
const { check, validationResult } = require("express-validator")

//get all shows
router.get('/', async function (req, res) {
    const shows = await Show.findAll()
    res.send(users);
})

//GET one show
router.get('/:showId', async function (req, res) {
    const show = await Show.findByPk(req.params.showId);
    if (show) {
        res.send(user);
    } else {
        res.status(404).send({})
    }

router.get('/genres/:genre', async function (req, res) {
    // get shows of a particular genre
})

router.put(':showId/watched', async function (req, res) {
    //PUT update ratings of a show
})

router.put('/showId/updates', async function (req, res) {
    //PUT update the show stored with a key of available 
})

route.delete('/:showId', async function (req, res) {
    // delete a show 
})
})
module.exports = router