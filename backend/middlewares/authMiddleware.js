const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const protect = async (req, res, next) => {
	let token;

	try {
		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')
		) {
			try {
				token = req.headers.authorization.split(' ')[1];

				const decoded = jwt.verify(token, 'secret123');

				req.user = await Users.findOne({
					where: { id: decoded.id },
					attributes: ['Email', 'id'],
				});

				next();
			} catch (error) {
				console.error(error);
				res.status(401);
				throw new Error('Not authorized, token invalid');
			}
		}

		if (!token) {
			res.status(401);
			throw new Error('Not authorized, no token');
		}
	} catch (error) {
		res.json(error.message);
	}
};

module.exports = { protect };
