const router = require('express').Router();
const subscriberRoutes = require('./subscriber-routes');

router.use('/subscribers', subscriberRoutes);

module.exports = router;