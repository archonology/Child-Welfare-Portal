const { EdNeglect } = require('../models');

// aggregate function to get resourceCount (count of resources)
const resourceCount = async () =>
EdNeglect.aggregate().count('resourceCount')
        .then((numberOfResources) => numberOfResources);

module.exports = {
    // Get all resources
    getResources(req, res) {
        EdNeglect.find()
            .then(async (resources) => {
                const resourceObj = {
                    resources,
                    edNeglectResourceCount: await resourceCount(),
                };
                return res.json(resourceObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Get a single resource
    getOneResource(req, res) {
        EdNeglect.findOne({ _id: req.params._id })
            .select('-__v')
            .lean()
            .then(async (resource) =>
                !resource
                    ? res.status(404).json({ message: 'No entry with that ID' })
                    : res.json({
                        resource,
                        resourceCount: await resourceCount(),
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // create a new resource
    createResource(req, res) {
        EdNeglect.create(req.body)
            .then((resource) => res.json(resource))
            .catch((err) => res.status(500).json(err));
    },

    // Update a resource
    updateResource(req, res) {
        console.log('You are updating a resource');
        EdNeglect.findOneAndUpdate(
            { _id: req.params._id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((resource) =>
                !resource
                    ? res.status(404).json({ message: 'No resource with this id!' })
                    : res.json(resource)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a resource 
    deleteResource(req, res) {
        console.log('You are deleting a resource');
        EdNeglect.findOneAndRemove({ _id: req.params._id })
            .then((resource) =>
                !resource
                    ? res.status(404).json({ message: 'No such resource exists.' })
                    : res.json({ message: 'Resource successfully deleted.' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}