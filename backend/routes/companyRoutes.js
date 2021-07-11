const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {
	getCompanies,
	getCompany,
	createCompany,
	updateCompany,
	deleteCompany,
} = require('../controllers/companyController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, getCompanies);
router.get('/:id', protect, getCompany);
router.post(
	'/',
	[
		check('name', 'Name is required.').not().isEmpty(),
		check('email', 'Please include a valid email.').isEmail(),
		check('logo', 'Logo is required.').not().isEmpty(),
		check('websiteURL', 'Website url is required.').not().isEmpty(),
	],
	protect,
	createCompany
);
router.put(
	'/:id',
	[
		check('name', 'Name is required.').not().isEmpty(),
		check('email', 'Please include a valid email.').isEmail(),
		check('logo', 'Logo is required.').not().isEmpty(),
		check('websiteURL', 'Website url is required.').not().isEmpty(),
	],
	protect,
	updateCompany
);
router.delete('/:id', protect, deleteCompany);

module.exports = router;
