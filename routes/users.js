const express = require("express")

const router = express.Router()
const { check, validationResult } = require("express-validator")

//GET all users
router.get('/', async function (req, res) {
    const users = await User.findAll()
    res.send(users);
})

//GET one user
router.get('/:userId', async function (req, res) {
    const user = await User.findByPk(req.params.userId);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({})
    }
})

router.get('/:userId/shows', async function (req, res) {
    //get all shows watched by a user
})

router.put('/userId/shows/:showId', async function (req, res) {
    //update and add a show if a user has watched it 
})

//// NEED TO DO FOLLOWING STILL 
//GET all shows watched by a user (user id in req.params)
//PUT update and add a show if a user has watched it

module.exports = router