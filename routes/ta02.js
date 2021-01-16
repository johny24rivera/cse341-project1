//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

let users = []

router.get('/', (req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: users,
    });
});

router.post('/addUser', (req, res, next) => {
    let name = req.body.fname + req.body.surname;
    const userExists = users.filter((user) => {
        console.log('in func' + user.firstName + user.lastName)
        return user.firstName + user.lastName === name;
    });

    if (userExists == undefined || userExists.length == 0) {
        users.push({
            firstName: req.body.fname,
            lastName: req.body.surname,
        });
    };

    console.log(users)
    res.redirect('/ta02')
});

router.post('/deleteUser', (req, res, next) => {
    let name = req.body.fname + req.body.surname;
    let size = users.length;

    users = users.filter((user) => {
        console.log('in func' + user.firstName + user.lastName)
        return user.firstName + user.lastName != name;
    });

    console.log(users)
    res.redirect('/ta02')
});

module.exports = router;