const express = require('express');
const router = express.Router();
const { CommonController } = require('../controller/common.controller');

router.get('/welcome', CommonController.welcome);
router.post('/sum', CommonController.sum);

module.exports = router;