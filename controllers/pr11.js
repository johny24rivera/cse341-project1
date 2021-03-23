const filename = '../data/pr10-data.json';
const jsonData = require(filename);
const names = [];

jsonData.avengers.forEach(name => {
    names.push(name.name);
});

exports.fetchAll = (req, res, next) => {
    res.json(JSON.stringify(names));
};

exports.insertName = (req, res, next) => {
    if (req.body.newName !== undefined) {
        const newName = req.body.newName
        names.push(newName);
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
};

exports.getPr11 = (req, res, next) => {
    res.render('pages/pr11', {
        path: 'proveAssignments/11',
        title: 'Week 11 Prove Assignment'
    });
};