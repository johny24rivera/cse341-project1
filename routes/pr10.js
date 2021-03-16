const express = require('express');
const router = express.Router();
var pr10Controller = require('../controllers/pr10.js');

router.get('/', pr10Controller.getPr10);
router.get('/fetchAll', pr10Controller.fetchAll);
router.post('/insertName', pr10Controller.insertName);

module.exports = router;