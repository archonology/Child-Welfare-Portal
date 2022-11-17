const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/historyController');

// /api/history
router.route('/').get(getResources).post(createResource);

// /api/history/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/history/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;