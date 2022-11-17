const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/courtController');

// /api/court
router.route('/').get(getResources).post(createResource);

// /api/court/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/court/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;