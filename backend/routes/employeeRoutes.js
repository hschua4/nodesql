const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
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
router.post(
	'/',
	[
		check('firstName', 'First Name is required.').not().isEmpty(),
		check('lastName', 'Last Name is required.').not().isEmpty(),
		check('company', 'Company is required.').not().isEmpty(),
		check('phone', 'Phone is required.').not().isEmpty(),
		check('email', 'Please include a valid email.').isEmail(),
	],
	protect,
	createEmployee
);
router.put(
	'/:id',
	[
		check('firstName', 'First Name is required.').not().isEmpty(),
		check('lastName', 'Last Name is required.').not().isEmpty(),
		check('company', 'Company is required.').not().isEmpty(),
		check('phone', 'Phone is required.').not().isEmpty(),
		check('email', 'Please include a valid email.').isEmail(),
	],
	protect,
	updateEmployee
);
router.delete('/:id', protect, deleteEmployee);

module.exports = router;
