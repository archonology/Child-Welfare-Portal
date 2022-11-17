const router = require('express').Router();
//user and subscriber routes
const userRoutes = require('./user-routes')
const subscriberRoutes = require('./subscriber-routes');

//resource routes
const abuseRoutes = require('./abuse-routes')
const advoRoutes = require('./advocacy-routes')
const planningRoutes = require('./casePlanning-routes')
const courtRoutes = require('./court-routes')
const cplawRoutes = require('./cpLaw-routes')
const dataRoutes = require('./dataPrivacy-routes')
const diverseRoutes = require('./diversity-routes')
const edRoutes = require('./edNeglect-routes')
const ethicsRoutes = require('./ethics-routes')
const fosterRoutes = require('./fosterCare-routes')
const historyRoutes = require('./history-routes')
const incarRoutes = require('./incarceration-routes')
const mhRoutes = require('./mentalHealth-routes')
const parentingRoutes = require('./parenting-routes')
const ssisRoutes = require('./ssis-routes')
const substRoutes = require('./substanceAbuse-routes')

//set the url routes
router.use('/subscribers', subscriberRoutes);
router.use('/users', userRoutes);
//resource url routes
router.use('/abuse', abuseRoutes);
router.use('/advocacy', advoRoutes);
router.use('/planning', planningRoutes);
router.use('/court', courtRoutes);
router.use('/cplaw', cplawRoutes);
router.use('/dataprivacy', dataRoutes);
router.use('/diversity', diverseRoutes);
router.use('/edneglect', edRoutes);
router.use('/ethics', ethicsRoutes);
router.use('/fostercare', fosterRoutes);
router.use('/history', historyRoutes);
router.use('/incarceration', incarRoutes);
router.use('/mentalhealth', mhRoutes);
router.use('/parenting', parentingRoutes);
router.use('/ssis', ssisRoutes);
router.use('/substances', substRoutes);


module.exports = router;