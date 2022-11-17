const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/dataPrivacyController');

// /api/dataprivacy
router.route('/').get(getResources).post(createResource);

// /api/dataprivacy/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/dataprivacy/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;