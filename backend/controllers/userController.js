const { Users } = require('../models');
const generateToken = require('../myFunctions/generateToken');

// @desc    Login
// @route   POST /users/login
// @access  Public
const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
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
		console.error(error);
		return res.json(error.message);
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
