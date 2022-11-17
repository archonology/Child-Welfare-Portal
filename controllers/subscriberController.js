const { Subscriber } = require('../models');

// aggregate function to get subscriberCount
const subscriberCount = async () =>
    Subscriber.aggregate().count('subscriberCount')
        .then((numberOfSubscribers) => numberOfSubscribers);

module.exports = {
    // Get all Subscribers
    getSubscribers(req, res) {
        Subscriber.find()
            .then(async (subscribers) => {
                const subscriberObj = {
                    subscribers,
                    subscriberCount: await subscriberCount(),
                };
                return res.json(subscriberObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Get a single Subscriber
    getOneSubscriber(req, res) {
        Subscriber.findOne({ _id: req.params._id })
            .select('-__v')
            .lean()
            .then(async (subscriber) =>
                !subscriber
                    ? res.status(404).json({ message: 'No Subscriber with that ID' })
                    : res.json({
                        subscriber,
                        subscriberCount: await subscriberCount(),
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // create a new Subscriber
    createSubscriber(req, res) {
        Subscriber.create(req.body)
            .then((subscriber) => res.json(subscriber))
            .catch((err) => res.status(500).json(err));
    },

    // Update a Subscriber
    updateSubscriber(req, res) {
        console.log('You are updating a Subscriber');
        Subscriber.findOneAndUpdate(
            { _id: req.params._id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((subscriber) =>
                !subscriber
                    ? res.status(404).json({ message: 'No Subscriber with this id!' })
                    : res.json(subscriber)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a Subscriber and delete their thoughts
    deleteSubscriber(req, res) {
        console.log('You are deleting a Subscriber');
        Subscriber.findOneAndRemove({ _id: req.params._id })
            .then((subscriber) =>
                !subscriber
                    ? res.status(404).json({ message: 'No such Subscriber exists.' })
                    : res.json({ message: 'Subscriber successfully deleted.' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}