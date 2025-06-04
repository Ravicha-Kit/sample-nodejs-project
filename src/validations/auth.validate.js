const { body } = require('express-validator');

exports.registerValidator = [
  body('email')
    .notEmpty().withMessage('อีเมลห้ามว่าง')
    .isEmail().withMessage('กรุณากรอกอีเมลที่ถูกต้อง'),
  
  body('password')
    .notEmpty().withMessage('รหัสผ่านห้ามว่าง')
    .isLength({ min: 6 }).withMessage('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
];

exports.loginValidator = [
  body('email')
    .notEmpty().withMessage('อีเมลห้ามว่าง'),
  
  body('password')
    .notEmpty().withMessage('รหัสผ่านห้ามว่าง')
];