const router = require("express").Router();
const Subscribers = require("../models/Subscriber");

//Get the homepage
router.get('/', async (req, res) => {
    try{
    res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;