const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/advocacyController');

// /api/advocacy
router.route('/').get(getResources).post(createResource);

// /api/advocacy/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/advocacy/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;