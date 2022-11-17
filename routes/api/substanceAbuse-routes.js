const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/substancesController');

// /api/substances
router.route('/').get(getResources).post(createResource);

// /api/substances/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/substances/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;