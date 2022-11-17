const router = require('express').Router();
const { parseWithoutProcessing } = require('handlebars');
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:_id
router.route('/:_id').get(getOneUser).put(updateUser);

// /api/users/:_id
router.route('/:_id').get(getOneUser).delete(deleteUser);

module.exports = router;

