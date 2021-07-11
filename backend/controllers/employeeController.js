const { Employees } = require('../models');
const { validationResult } = require('express-validator');

// @desc    Get all employees
// @route   GET /employee
// @access  Private
const getEmployees = async (req, res) => {
	try {
		const pageSize = 10;
		const page = Number(req.query.pageNumber) || 1;

		const employees = await Employees.findAll({
			limit: pageSize,
			offset: pageSize * (page - 1),
		});

		const count = await Employees.count();
		res.json({ employees, pageSize, pages: Math.ceil(count / pageSize) });
	} catch (error) {
		res.json(error.message);
	}
};

// @desc    Get one employee
// @route   GET /employee/:id
// @access  Private
const getEmployee = async (req, res) => {
	const employee = await Employees.findOne({ where: { id: req.params.id } });
	res.json(employee);
};

// @desc    Create an employee
// @route   POST /employee
// @access  Private
const createEmployee = async (req, res) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorItem = '';
			errors.errors.forEach((error) => {
				errorItem = errorItem + ' ' + error.msg;
			});
			throw new Error(errorItem);
		}

		const { firstName, lastName, company, phone, email } = req.body;

		const createdEmployee = await Employees.create({
			FirstName: firstName,
			LastName: lastName,
			Company: company,
			Phone: phone,
			Email: email,
		});
		res.status(201).json(createdEmployee);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// @desc    Update an employee
// @route   PUT /employee/:id
// @access  Private
const updateEmployee = async (req, res) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorItem = '';
			errors.errors.forEach((error) => {
				errorItem = errorItem + ' ' + error.msg;
			});
			throw new Error(errorItem);
		}

		const { firstName, lastName, company, phone, email } = req.body;

		const employee = await Employees.findOne({ id: req.params.id });

		if (employee) {
			const updatedEmployee = await Employees.update(
				{
					FirstName: firstName,
					LastName: lastName,
					Company: company,
					Phone: phone,
					Email: email,
				},
				{ where: { id: req.params.id } }
			);

			res.status(201).json(updatedEmployee);
		} else {
			res.status(404);
			throw new Error('Employee not found');
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// @desc    Delete an employee
// @route   DELETE /employee/:id
// @access  Private
const deleteEmployee = async (req, res) => {
	const employee = await Employees.findOne({ id: req.params.id });

	try {
		if (employee) {
			await Employees.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.json('Employee removed');
		} else {
			res.status(404);
			throw new Error('Employee not found');
		}
	} catch (error) {
		res.json(error.message);
	}
};

module.exports = {
	getEmployees,
	getEmployee,
	createEmployee,
	updateEmployee,
	deleteEmployee,
};
