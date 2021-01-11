const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/prove01/form', {
        title: 'Prove Assignment 1',
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/prove01submit', (req, res, next) => {
    res.render('pages/prove01/display', {
        title: 'Prove Assignment 1',
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.i1,
        input2: req.body.i2
    });
});

module.exports = router;