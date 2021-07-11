const { Companies } = require('../models');
const { validationResult } = require('express-validator');

// @desc    Get all companies
// @route   GET /company/:pageNumber
// @access  Private
const getCompanies = async (req, res) => {
	try {
		const pageSize = 10;
		const page = Number(req.query.pageNumber) || 1;

		const companies = await Companies.findAll({
			limit: pageSize,
			offset: pageSize * (page - 1),
		});

		const count = await Companies.count();
		res.json({ companies, pageSize, pages: Math.ceil(count / pageSize) });
	} catch (error) {
		res.json(error.message);
	}
};

// @desc    Get one company
// @route   GET /company/:id
// @access  Private
const getCompany = async (req, res) => {
	const company = await Companies.findOne({ where: { id: req.params.id } });
	res.json(company);
};

// @desc    Create a company
// @route   POST /company
// @access  Private
const createCompany = async (req, res) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorItem = '';
			errors.errors.forEach((error) => {
				errorItem = errorItem + ' ' + error.msg;
			});
			throw new Error(errorItem);
		}

		const { name, email, logo, websiteURL } = req.body;

		const createdCompany = await Companies.create({
			Name: name,
			Email: email,
			Logo: logo,
			WebsiteURL: websiteURL,
		});
		res.status(201).json(createdCompany);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// @desc    Update a company
// @route   PUT /company/:id
// @access  Private
const updateCompany = async (req, res) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorItem = '';
			errors.errors.forEach((error) => {
				errorItem = errorItem + ' ' + error.msg;
			});
			throw new Error(errorItem);
		}

		const { name, email, logo, websiteURL } = req.body;

		const company = await Companies.findOne({ id: req.params.id });

		if (company) {
			const updatedCompany = await Companies.update(
				{
					Name: name,
					Email: email,
					Logo: logo,
					WebsiteURL: websiteURL,
				},
				{ where: { id: req.params.id } }
			);

			res.status(201).json(updatedCompany);
		} else {
			res.status(404);
			throw new Error('Company not found');
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// @desc    Delete a company
// @route   DELETE /company/:id
// @access  Private
const deleteCompany = async (req, res) => {
	const company = await Companies.findOne({ id: req.params.id });

	try {
		if (company) {
			await Companies.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.json('Product removed');
		} else {
			res.status(404);
			throw new Error('Product not found');
		}
	} catch (error) {
		res.json(error.message);
	}
};

module.exports = {
	getCompanies,
	getCompany,
	createCompany,
	updateCompany,
	deleteCompany,
};
