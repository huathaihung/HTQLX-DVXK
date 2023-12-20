"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		/**
     * Add seed commands here.
     *
      Example:
      
    */
		await queryInterface.bulkInsert(
			"stations",
			[
				{
					name: "Bến xe Đà Nẵng",
					address: "Tôn Đức Thắng, Hoà Minh, Liên Chiểu",
					province: "Đà Nẵng",
					createdAt: "2023-07-07 08:05:44",
					updatedAt: "2023-07-07 08:05:44",
				},
				{
					name: "Bến Xe Miền Đông",
					address: "Phường 26, Bình Thạnh",
					province: "Hồ Chí Minh",
					createdAt: "2023-07-07 08:05:44",
					updatedAt: "2023-07-07 08:05:44",
				},
				{
					name: "Bến Xe Miền Tây",
					address: "395 Kinh Dương Vương, An Lạc, Bình Tân",
					province: "Hồ Chí Minh",
					createdAt: "2023-07-07 08:05:44",
					updatedAt: "2023-07-07 08:05:44",
				},
				{
					name: "Bến Xe Miền Bắc",
					address: "132 Lý Thái Tổ, An Hòa, Thừa Thiên Huế",
					province: "Huế",
					createdAt: "2023-07-07 08:05:44",
					updatedAt: "2023-07-07 08:05:44",
				},
				{
					name: "Bến xe Trà Vinh",
					address: " 392.Phạm Cự Lượng",
					province: "Trà Vinh",
					createdAt: "2023-07-07 08:05:44",
					updatedAt: "2023-07-07 08:05:44",
				},
				{
					name: "Bến xe Duyên Hải",
					address: " Thị xã Duyên Hải",
					province: "Trà Vinh",
					createdAt: "2023-07-07 08:05:44",
					updatedAt: "2023-07-07 08:05:44",
				},
				{
					name: "Bến xe Cần Thơ",
					address: "Trung tâm thành phố",
					province: "Cần Thơ",
					createdAt: "2023-07-07 08:05:44",
					updatedAt: "2023-07-07 08:05:44",
				},
				{
					name: "Bến xe Tây Ninh",
					address: "500 Nguyễn Sinh Sắc",
					province: "Tây Ninh",
					createdAt: "2023-07-07 08:05:44",
					updatedAt: "2023-07-07 08:05:44",
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
		await queryInterface.bulkDelete("stations", null, {});
	},
};
