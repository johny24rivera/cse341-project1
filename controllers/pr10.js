const jsonData = require('../data/pr10-data.json');

exports.getPr10 = (req, res, next) => {
    res.render('pages/pr10', {
        path: 'proveAssignments/10',
        title: 'Week 10 Prove Assignment',
    });
};

exports.fetchAll = (req, res, next) => {
    res.json(jsonData);
};

exports.insertName = (req, res, next) => {
    if (req.body.newName !== undefined) {
        const newName = req.body.newName
        if (
            jsonData.avengers.find(
                element => element.name === req.body.newName
            ) === undefined
        ) { // Make our submissions somewhat unique.
            jsonData.avengers.push({ name: newName }) // Push new object into the jsonData
            res.sendStatus(200)
        }
    } else {
        res.sendStatus(400) // Bad request error code
    }
    res.sendStatus(400)
};