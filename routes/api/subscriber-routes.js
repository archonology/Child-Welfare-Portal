const router = require('express').Router();
const {
    getSubscribers,
    getOneSubscriber,
    createSubscriber,
    updateSubscriber,
    deleteSubscriber,
} = require('../../controllers/subscriberController');

// /api/subscribers
router.route('/').get(getSubscribers).post(createSubscriber);

// /api/subscribers/:_id
router.route('/:_id').get(getOneSubscriber).put(updateSubscriber);

// /api/subscribers/:_id
router.route('/:_id').get(getOneSubscriber).delete(deleteSubscriber);

module.exports = router;