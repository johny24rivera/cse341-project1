//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const TA03Controller = require('../controllers/ta03');

router.get('/', TA03Controller.getTA03);

router.get('/:productName', TA03Controller.getProduct);

router.post('/', TA03Controller.getResults);

module.exports = router;