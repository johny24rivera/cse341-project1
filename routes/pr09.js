const express = require('express');
const router = express.Router();
var pr09Controller = require('../controllers/pr09.js');

router.get('/', pr09Controller.getPr09);

module.exports = router;