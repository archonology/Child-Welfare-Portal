const { Advocacy } = require('../models');

// aggregate function to get advocacyCount (count of resources)
const advocacyCount = async () =>
Advocacy.aggregate().count('advocacyCount')
        .then((numberOfAdvocacys) => numberOfAdvocacys);

module.exports = {
    // Get all resources
    getResources(req, res) {
        Advocacy.find()
            .then(async (advocacys) => {
                const abuseObj = {
                    advocacys,
                    advocacyCount: await advocacyCount(),
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
        Advocacy.findOne({ _id: req.params._id })
            .select('-__v')
            .lean()
            .then(async (Advocacy) =>
                !Advocacy
                    ? res.status(404).json({ message: 'No entry with that ID' })
                    : res.json({
                        Advocacy,
                        advocacyCount: await advocacyCount(),
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // create a new abuse resource
    createResource(req, res) {
        Advocacy.create(req.body)
            .then((Advocacy) => res.json(Advocacy))
            .catch((err) => res.status(500).json(err));
    },

    // Update an abuse resource
    updateResource(req, res) {
        console.log('You are updating a resource');
        Advocacy.findOneAndUpdate(
            { _id: req.params._id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((Advocacy) =>
                !Advocacy
                    ? res.status(404).json({ message: 'No resource with this id!' })
                    : res.json(Abuse)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete an abuse resource 
    deleteResource(req, res) {
        console.log('You are deleting a resource');
        Advocacy.findOneAndRemove({ _id: req.params._id })
            .then((Advocacy) =>
                !Advocacy
                    ? res.status(404).json({ message: 'No such resource exists.' })
                    : res.json({ message: 'Resource successfully deleted.' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}