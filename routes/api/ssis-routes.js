const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/ssisController');

// /api/ssis
router.route('/').get(getResources).post(createResource);

// /api/ssis/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/ssis/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;