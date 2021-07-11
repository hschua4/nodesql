const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { loginUser, getUsers } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.post(
	'/login',
	[
		check('email', 'Please include a valid email.').isEmail(),
		check('password', 'Password is required.').not().isEmpty(),
	],
	loginUser
);
router.get('/', protect, getUsers);

module.exports = router;
