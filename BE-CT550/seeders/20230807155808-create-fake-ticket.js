"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"tickets",
			[
				{
					//id=1
					totalAmount: 400000,
					user_id: 1,
					tripPassengerId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					//id=2
					totalAmount: 500000,
					user_id: 2,
					tripPassengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					//id=3
					totalAmount: 800000,
					user_id: 3,
					tripPassengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					//id=4
					totalAmount: 700000,
					user_id: 4,
					tripPassengerId: 5,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("tickets", null, {});
	},
};
