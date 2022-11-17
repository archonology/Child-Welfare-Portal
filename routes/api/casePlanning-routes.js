const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/casePlanningController');

// /api/planning
router.route('/').get(getResources).post(createResource);

// /api/planning/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/planning/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;