const express = require('express');
const router = express.Router();
const pr11Controller = require('../controllers/pr11.js');

router.get('/', pr11Controller.getPr11);
router.get('/fetchAll', pr11Controller.fetchAll);
router.post('/insertName', pr11Controller.insertName);

module.exports = router;