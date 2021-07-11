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
			{
				FirstName: 'John',
				LastName: 'Jones1',
				Company: '',
				Email: 'Jones1@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'John',
				LastName: 'Jones2',
				Company: '',
				Email: 'Jones2@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'John',
				LastName: 'Jones3',
				Company: '',
				Email: 'Jones3@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'John',
				LastName: 'Jones4',
				Company: '',
				Email: 'Jones4@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'John',
				LastName: 'Jones5',
				Company: '',
				Email: 'Jones5@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'John',
				LastName: 'Jones6',
				Company: '',
				Email: 'Jones6@armortech.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Carter',
				LastName: 'Stone1',
				Company: '',
				Email: 'Stone1@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Carter',
				LastName: 'Stone2',
				Company: '',
				Email: 'Stone2@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Carter',
				LastName: 'Stone3',
				Company: '',
				Email: 'Stone3@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Carter',
				LastName: 'Stone4',
				Company: '',
				Email: 'Stone4@captionnet.com',
				Phone: '123456789',
			},
			{
				FirstName: 'Carter',
				LastName: 'Stone5',
				Company: '',
				Email: 'Stone5@captionnet.com',
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
