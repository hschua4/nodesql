'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert('Employees', [
			{
				FirstName: 'Tony',
				LastName: 'Stark',
				Company: '',
				Email: 'tonystark@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Steve',
				LastName: 'Rogers',
				Company: '',
				Email: 'steverogers@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Natasha',
				LastName: 'Romanoff',
				Company: '',
				Email: 'natasharomanoff@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Bucky',
				LastName: 'Barnes',
				Company: '',
				Email: 'buckybarnes@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Sam',
				LastName: 'Wilson',
				Company: '',
				Email: 'samwilson@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'James',
				LastName: 'Rhodes',
				Company: '',
				Email: 'jamesrhodes@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Clint',
				LastName: 'Barton',
				Company: '',
				Email: 'samwilson@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Chadwick',
				LastName: 'Boseman',
				Company: '',
				Email: 'samwilson@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Wanda',
				LastName: 'Maximoff',
				Company: '',
				Email: 'samwilson@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Scott',
				LastName: 'Lang',
				Company: '',
				Email: 'samwilson@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Peter',
				LastName: 'Parker',
				Company: '',
				Email: 'samwilson@armortech.com',
				Phone: '123456789',
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
