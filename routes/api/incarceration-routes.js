const router = require('express').Router();
const {
    getResources,
    getOneResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../../controllers/incarcerationController');

// /api/incarceration
router.route('/').get(getResources).post(createResource);

// /api/incarceration/:_id
router.route('/:_id').get(getOneResource).put(updateResource);

// /api/incarceration/:_id
router.route('/:_id').get(getOneResource).delete(deleteResource);

module.exports = router;