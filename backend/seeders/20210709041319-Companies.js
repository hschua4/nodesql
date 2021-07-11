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
				Logo: '/images/cap.png',
				WebsiteURl: 'www.captionnet.com',
			},
			{
				Name: 'Armor Tech',
				Email: 'armortech@armortech.com',
				Logo: '/images/iron.png',
				WebsiteURl: 'www.armortech.com',
			},
			{
				Name: 'Company2',
				Email: 'Company2@Company2.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company2.com',
			},
			{
				Name: 'Company3',
				Email: 'Company3@Company3.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company3.com',
			},
			{
				Name: 'Company4',
				Email: 'Company4@Company4.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company4.com',
			},
			{
				Name: 'Company5',
				Email: 'Company5@Company5.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company5.com',
			},
			{
				Name: 'Company6',
				Email: 'Company6@Company6.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company6.com',
			},
			{
				Name: 'Company7',
				Email: 'Company7@Company7.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company7.com',
			},
			{
				Name: 'Company8',
				Email: 'Company8@Company8.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company8.com',
			},
			{
				Name: 'Company9',
				Email: 'Company9@Company9.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company9.com',
			},
			{
				Name: 'Company10',
				Email: 'Company10@Company10.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company10.com',
			},
			{
				Name: 'Company11',
				Email: 'Company11@Company11.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company11.com',
			},
			{
				Name: 'Company12',
				Email: 'Company12@Company12.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company12.com',
			},
			{
				Name: 'Company13',
				Email: 'Company13@Company13.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company13.com',
			},
			{
				Name: 'Company14',
				Email: 'Company14@Company14.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company14.com',
			},
			{
				Name: 'Company15',
				Email: 'Company15@Company15.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company15.com',
			},
			{
				Name: 'Company16',
				Email: 'Company16@Company16.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company16.com',
			},
			{
				Name: 'Company17',
				Email: 'Company17@Company17.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company17.com',
			},
			{
				Name: 'Company18',
				Email: 'Company18@Company18.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company18.com',
			},
			{
				Name: 'Company19',
				Email: 'Company19@Company19.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company19.com',
			},
			{
				Name: 'Company20',
				Email: 'Company20@Company20.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company20.com',
			},
			{
				Name: 'Company21',
				Email: 'Company21@Company21.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company21.com',
			},
			{
				Name: 'Company22',
				Email: 'Company22@Company22.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company22.com',
			},
			{
				Name: 'Company23',
				Email: 'Company23@Company23.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company23.com',
			},
			{
				Name: 'Company24',
				Email: 'Company24@Company24.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company24.com',
			},
			{
				Name: 'Company25',
				Email: 'Company25@Company25.com',
				Logo: '/images/fire.png',
				WebsiteURl: 'www.Company25.com',
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
