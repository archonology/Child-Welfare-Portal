const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/mentalhealthController');

// /api/mentalhealth
router.route('/').get(getResources).post(createResource);

// /api/mentalhealth/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/mentalhealth/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;