"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"rates",
			[
				{
					numberRate: 1,
					userId: 1,
					passengerId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 4,
					userId: 1,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 3,
					userId: 2,
					passengerId: 5,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 4,
					userId: 3,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 2,
					userId: 1,
					passengerId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 3,
					userId: 3,
					passengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 5,
					userId: 1,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 2,
					userId: 1,
					passengerId: 4,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 5,
					userId: 2,
					passengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 2,
					userId: 3,
					passengerId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 3,
					userId: 4,
					passengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 2,
					userId: 3,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 3,
					userId: 2,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 2,
					userId: 1,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 2,
					userId: 1,
					passengerId: 4,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 5,
					userId: 2,
					passengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 2,
					userId: 3,
					passengerId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 3,
					userId: 4,
					passengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 2,
					userId: 3,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 3,
					userId: 2,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					numberRate: 4,
					userId: 4,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("rates", null, {});
	},
};
