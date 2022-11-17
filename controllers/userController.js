const { User } = require('../models');

// aggregate function to get userCount
const userCount = async () =>
    User.aggregate().count('userCount')
        .then((numberOfUsers) => numberOfUsers);

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userObj = {
                    users,
                    userCount: await userCount(),
                };
                return res.json(userObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Get a single user
    getOneUser(req, res) {
        User.findOne({ _id: req.params._id })
            .select('-__v')
            .lean()
            .then(async (user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json({
                        user,
                        userCount: await userCount(),
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // Update a user
    updateUser(req, res) {
        console.log('You are updating a user');
        User.findOneAndUpdate(
            { _id: req.params._id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a user and delete their thoughts
    deleteUser(req, res) {
        console.log('You are deleting a user');
        User.findOneAndRemove({ _id: req.params._id })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No such user exists.' })
                    : res.json({ message: 'User successfully deleted.' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}