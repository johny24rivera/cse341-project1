//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const dat = 4;
=======
const data = 11;
>>>>>>> 31a0720744759ef3db1c1bb9250fedc1f1cd3c31

const TA02Controller = require('../controllers/ta02');

router.get('/', TA02Controller.getTA02);

router.post('/addUser', TA02Controller.addUser);

router.post('/deleteUser', TA02Controller.deleteUser);
// This is a comment

module.exports = router;
// This is also a comment
// lol