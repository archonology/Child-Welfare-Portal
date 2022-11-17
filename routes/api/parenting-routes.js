const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/parentingController');

// /api/parenting
router.route('/').get(getResources).post(createResource);

// /api/parenting/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/parenting/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;