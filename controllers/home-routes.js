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

//Get diversity
router.get('/diversity', async (req, res) => {
    try{
    res.render('diversity');
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get ethics ..etc.
router.get('/ethics', async (req, res) => {
    try{
    res.render('ethics');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/data-privacy', async (req, res) => {
    try{
    res.render('data-privacy');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/history', async (req, res) => {
    try{
    res.render('history');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/advocacy', async (req, res) => {
    try{
    res.render('advocacy');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/abuse', async (req, res) => {
    try{
    res.render('abuse');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/substance-use', async (req, res) => {
    try{
    res.render('substance-use');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/education-neglect', async (req, res) => {
    try{
    res.render('education-neglect');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/court', async (req, res) => {
    try{
    res.render('court');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/cp-laws', async (req, res) => {
    try{
    res.render('cp-laws');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/incarceration', async (req, res) => {
    try{
    res.render('incarceration');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/mental-health', async (req, res) => {
    try{
    res.render('mental-health');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/parent-resources', async (req, res) => {
    try{
    res.render('parent-resources');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/case-planning', async (req, res) => {
    try{
    res.render('case-planning');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/interviewing', async (req, res) => {
    try{
    res.render('interviewing');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/foster-care', async (req, res) => {
    try{
    res.render('foster-care');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/ssis', async (req, res) => {
    try{
    res.render('ssis');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/iv-e', async (req, res) => {
    try{
    res.render('iv-e');
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;