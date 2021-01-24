const express = require('express');
const router = express.Router();

const pr01Controller = require('../controllers/pr01');

router.get('/', pr01Controller.getPr01);

router.post('/prove01submit', pr01Controller.submitPr01);

module.exports = router;