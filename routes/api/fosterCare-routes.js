const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/fosterCareController');

// /api/fostercare
router.route('/').get(getResources).post(createResource);

// /api/fostercare/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/fostercare/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;