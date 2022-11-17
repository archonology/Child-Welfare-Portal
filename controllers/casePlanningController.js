const { CasePlanning } = require('../models');

// aggregate function to get casePlanningCount (count of resources)
const casePlanningCount = async () =>
CasePlanning.aggregate().count('casePlanningCount')
        .then((numberOfCasePlannings) => numberOfCasePlannings);

module.exports = {
    // Get all resources
    getResources(req, res) {
        CasePlanning.find()
            .then(async (CasePlannings) => {
                const planningObj = {
                    CasePlannings,
                    casePlanningCount: await casePlanningCount(),
                };
                return res.json(planningObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Get a single resource
    getOneResource(req, res) {
        CasePlanning.findOne({ _id: req.params._id })
            .select('-__v')
            .lean()
            .then(async (planning) =>
                !planning
                    ? res.status(404).json({ message: 'No entry with that ID' })
                    : res.json({
                        CasePlanning,
                        casePlanningCount: await casePlanningCount(),
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // create a new abuse resource
    createResource(req, res) {
        CasePlanning.create(req.body)
            .then((CasePlanning) => res.json(CasePlanning))
            .catch((err) => res.status(500).json(err));
    },

    // Update an abuse resource
    updateResource(req, res) {
        console.log('You are updating a resource');
        CasePlanning.findOneAndUpdate(
            { _id: req.params._id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((planning) =>
                !planning
                    ? res.status(404).json({ message: 'No resource with this id!' })
                    : res.json(Abuse)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete an abuse resource 
    deleteResource(req, res) {
        console.log('You are deleting a resource');
        CasePlanning.findOneAndRemove({ _id: req.params._id })
            .then((planning) =>
                !planning
                    ? res.status(404).json({ message: 'No such resource exists.' })
                    : res.json({ message: 'Resource successfully deleted.' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}