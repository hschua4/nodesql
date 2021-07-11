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

		await queryInterface.bulkInsert('Companies', [
			{
				Name: 'Caption Net',
				Email: 'captionnet@captionnet.com',
				Logo: '/captionnet/logo.png',
				WebsiteURl: 'www.captionnet.com',
			},
			{
				Name: 'Armor Tech',
				Email: 'armortech@armortech.com',
				Logo: '/armortech/logo.png',
				WebsiteURl: 'www.armortech.com',
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

		await queryInterface.bulkDelete('Companies', null, {});
	},
};
