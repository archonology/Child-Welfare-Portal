const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/edneglectController');

// /api/edneglect
router.route('/').get(getResources).post(createResource);

// /api/edneglect/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/edneglect/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;