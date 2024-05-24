const express = require("express")
const { Show, User } = require('../models/index.js')
const router = express.Router()


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
})

// GET shows of a particular genre
router.get('/genres/:genre', async function (req, res) {  //as looking for all can define route as genre
        const genre = req.params.genre;   //genre parameter taken using req.params
        const show = await Show.findAll({    //find all 
            where: { genre: genre }  //when find the genre
        })
    if (show.length > 0) {  // if there are shows
        res.json(show)   //return response
    } else {
        res.status(404).json({ error: "No shows for this genre"})  ///else return error 
    }
})

//PUT update a rating of a show 
router.put('/:id', async function (req, res) {  //find by primary key of id
    const showId = req.params.id;  //find show by primary key of id 
    const show = await Show.findByPk //same 
    if (show) {   //if find show
        await show.update({
            rating: req.body.rating   //update rating of the show 
        })
        res.send(show)  //issue response
    } else {
        res.status(404).send({})  // otherwise send 404 error 
    }
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

module.exports = router