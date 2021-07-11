const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {
	getEmployees,
	createEmployee,
	updateEmployee,
	deleteEmployee,
} = require('../controllers/employeeController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, getEmployees);
router.post('/', protect, createEmployee);
router.put('/:id', protect, updateEmployee);
router.delete('/:id', protect, deleteEmployee);

module.exports = router;
