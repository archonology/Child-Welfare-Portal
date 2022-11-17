const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/cplawController');

// /api/cplaw
router.route('/').get(getResources).post(createResource);

// /api/cplaw/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/cplaw/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;