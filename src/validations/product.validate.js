const { body } = require('express-validator');

exports.createProductValidator = [
  body('name')
    .notEmpty().withMessage('ชื่อสินค้าห้ามว่าง')
    .isLength({ min: 3 }).withMessage('ชื่อสินค้าต้องมีอย่างน้อย 3 ตัวอักษร'),

  body('desc')
    .notEmpty().withMessage('คำอธิบายสินค้าห้ามว่าง'),
  
  body('price')
    .notEmpty().withMessage('ราคาห้ามว่าง')
    .isFloat({ gt: 0 }).withMessage('ราคาต้องมากกว่า 0'),
];