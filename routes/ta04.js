//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

const ta04Controller = require('../controllers/ta04');

router.get('/', ta04Controller.getTA04);

module.exports = router;