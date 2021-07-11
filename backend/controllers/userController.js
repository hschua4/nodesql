const { Users } = require('../models');
const generateToken = require('../myFunctions/generateToken');
const { validationResult } = require('express-validator');

// @desc    Login
// @route   POST /users/login
// @access  Public
const loginUser = async (req, res) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorItem = '';
			errors.errors.forEach((error) => {
				errorItem = errorItem + ' ' + error.msg;
			});
			throw new Error(errorItem);
		}

		const { email, password } = req.body;

		const user = await Users.findOne({ Email: email });

		if (user && password === user.Password) {
			res.json({
				email: user.Email,
				token: generateToken(user.id),
			});
		} else {
			res.status(401);
			throw new Error('Invalid email or password');
		}
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

// @desc    Get all users
// @route   GET /users
// @access  Public
const getUsers = async (req, res) => {
	const user = await Users.findAll({});
	res.json(user);
};

module.exports = { loginUser, getUsers };
