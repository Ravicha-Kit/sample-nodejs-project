const express = require('express');
const router = express.Router();
const { AuthController } = require('../controller/auth.controller');
const { registerValidator, loginValidator } = require('../validations/auth.validate');
const validate = require('../middleware/validate');

router.post('/register', registerValidator, validate, AuthController.register);
router.post('/login', loginValidator, validate, AuthController.login);

module.exports = router;