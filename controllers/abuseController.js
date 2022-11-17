const { Abuse } = require('../models');

// aggregate function to get abuseCount (count of resources)
const abuseCount = async () =>
    Abuse.aggregate().count('abuseCount')
        .then((numberOfAbuses) => numberOfAbuses);

module.exports = {
    // Get all resources
    getResources(req, res) {
        Abuse.find()
            .then(async (abuses) => {
                const abuseObj = {
                    abuses,
                    abuseCount: await abuseCount(),
                };
                return res.json(abuseObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Get a single resource
    getOneResource(req, res) {
        Abuse.findOne({ _id: req.params._id })
            .select('-__v')
            .lean()
            .then(async (Abuse) =>
                !Abuse
                    ? res.status(404).json({ message: 'No entry with that ID' })
                    : res.json({
                        Abuse,
                        abuseCount: await abuseCount(),
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // create a new abuse resource
    createResource(req, res) {
        Abuse.create(req.body)
            .then((Abuse) => res.json(Abuse))
            .catch((err) => res.status(500).json(err));
    },

    // Update an abuse resource
    updateResource(req, res) {
        console.log('You are updating a resource');
        Abuse.findOneAndUpdate(
            { _id: req.params._id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((Abuse) =>
                !Abuse
                    ? res.status(404).json({ message: 'No resource with this id!' })
                    : res.json(Abuse)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete an abuse resource 
    deleteResource(req, res) {
        console.log('You are deleting a resource');
        Abuse.findOneAndRemove({ _id: req.params._id })
            .then((Abuse) =>
                !Abuse
                    ? res.status(404).json({ message: 'No such resource exists.' })
                    : res.json({ message: 'Resource successfully deleted.' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}