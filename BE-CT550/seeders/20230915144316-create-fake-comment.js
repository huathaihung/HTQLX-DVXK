"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"comments",
			[
				{
					content: "Nhà xe ổn sẽ ủng hộ!",
					userId: 1,
					passengerId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Tuyệt vời ông mặt trời!",
					userId: 2,
					passengerId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Nhà xe bình thường!",
					userId: 3,
					passengerId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Phục vụ rất tốt",
					userId: 4,
					passengerId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Nhà xe ổn sẽ ủng hộ!",
					userId: 1,
					passengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Tuyệt vời ông mặt trời!",
					userId: 2,
					passengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Nhà xe bình thường!",
					userId: 3,
					passengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Phục vụ rất tốt",
					userId: 4,
					passengerId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Nhà xe bẩn!",
					userId: 1,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Phục vụ chu đáo quan tâm khách hàng!",
					userId: 2,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Nhà xe tốt!",
					userId: 3,
					passengerId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					content: "Phục vụ rất tốt",
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
		await queryInterface.bulkDelete("comments", null, {});
	},
};
