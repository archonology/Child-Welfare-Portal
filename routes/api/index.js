const router = require('express').Router();
//user and subscriber routes
const userRoutes = require('./user-routes')
const subscriberRoutes = require('./subscriber-routes');

//resource routes
const userRoutes = require('./abuse-routes')
const userRoutes = require('./advocacy-routes')
const userRoutes = require('./casePlanning-routes')
const userRoutes = require('./court-routes')
const userRoutes = require('./cpLaw-routes')
const userRoutes = require('./dataPrivacy-routes')
const userRoutes = require('./diversity-routes')
const userRoutes = require('./edNeglect-routes')
const userRoutes = require('./ethics-routes')
const userRoutes = require('./fosterCare-routes')
const userRoutes = require('./history-routes')
const userRoutes = require('./incarceration-routes')
const userRoutes = require('./mentalHealth-routes')
const userRoutes = require('./parenting-routes')
const userRoutes = require('./ssis-routes')
const userRoutes = require('./subscriber-routes')
const userRoutes = require('./substanceAbuse-routes')

//set the url routes
router.use('/subscribers', subscriberRoutes);
router.use('/users', userRoutes);
//resource url routes
router.use('/abuse', userRoutes);
router.use('/advocacy', userRoutes);
router.use('/planning', userRoutes);
router.use('/court', userRoutes);
router.use('/cplaw', userRoutes);
router.use('/dataprivacy', userRoutes);
router.use('/diversity', userRoutes);
router.use('/edneglect', userRoutes);
router.use('/ethics', userRoutes);
router.use('/fostercare', userRoutes);
router.use('/history', userRoutes);
router.use('/incarceration', userRoutes);
router.use('/mentalhealth', userRoutes);
router.use('/parenting', userRoutes);
router.use('/ssis', userRoutes);
router.use('/substances', userRoutes);


module.exports = router;