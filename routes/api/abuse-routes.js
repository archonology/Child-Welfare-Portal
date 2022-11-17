const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/abuseController');

// /api/abuse
router.route('/').get(getResources).post(createResource);

// /api/abuse/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/abuse/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;