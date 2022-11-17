const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/ethicsController');

// /api/ethics
router.route('/').get(getResources).post(createResource);

// /api/ethics/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/ethics/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;