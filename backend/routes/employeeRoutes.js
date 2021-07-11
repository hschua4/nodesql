const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {
	getEmployees,
	getEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
} = require('../controllers/employeeController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, getEmployees);
router.get('/:id', protect, getEmployee);
router.post('/', protect, createEmployee);
router.put('/:id', protect, updateEmployee);
router.delete('/:id', protect, deleteEmployee);

module.exports = router;
