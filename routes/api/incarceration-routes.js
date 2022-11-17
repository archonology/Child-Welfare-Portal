const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/diversityController');

// /api/diversity
router.route('/').get(getResources).post(createResource);

// /api/diversity/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/diversity/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;