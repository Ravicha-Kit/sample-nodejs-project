const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware');
const { ProductController } = require('../controller/product.controller');
const { createProductValidator } = require('../validations/product.validate');
const validate = require('../middleware/validate');


router.use(verifyToken);
router.post('/create', createProductValidator, validate, ProductController.createProduct);
router.get('/list', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;