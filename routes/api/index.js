const router = require('express').Router();
const userRoutes = requiure('./user-routes')
const subscriberRoutes = require('./subscriber-routes');

router.use('/subscribers', subscriberRoutes);
router.use('/users', userRoutes);

module.exports = router;