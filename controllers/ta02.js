const TA02Model = require('../models/ta02');



exports.getTA02 = (req, res, next) => {
    users = TA02Model.getUsers();
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: users,
    });
};

exports.addUser = (req, res, next) => {
    TA02Model.addUser(req.body.fname, req.body.surname);
    res.redirect('/ta02')
};

exports.deleteUser = (req, res, next) => {
    let name = req.body.fname + req.body.surname;
    TA02Model.deleteUser(name);
    res.redirect('/ta02')
};