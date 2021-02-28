const express = require('express');
const router = express.Router();
var pr08Controller = require('../controllers/pr08.js');

router.get('/', pr08Controller.getPr08);
router.post('/', pr08Controller.postPr08);

module.exports = router;