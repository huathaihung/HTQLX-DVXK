"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"points",
			[
				{
					name: "Văn Phòng Đà Nẵng",
					address: "75 Thanh Tịnh, Phường Hòa Minh, Liên Chiểu, Đà Nẵng",
					stationId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng chính",
					address: "201 Tôn Đức Thắng, Phường Hòa Minh, Liên Chiểu, Đà Nẵng",
					stationId: 1,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng phụ",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng 3 Bến Xe Miền Đông",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng 2 Bến Xe Miền Đông",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 2,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Dãy 8 quầy D1- Bến xe miền đông",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Văn Phòng Sài Gòn (có trung chuyển)",
					address: "08 Nguyễn Trãi, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh",
					stationId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Chợ Đầu Mối Thủ Đức",
					address: "141 QL1A, Tam Binh, Thành Phố Thủ Đức, Hồ Chí Minh",
					stationId: 3,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Huế (Dọc Quốc Lộ 1A)",
					address: "Quốc lộ 1A",
					stationId: 4,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Văn Phòng Huế",
					address: "46 Nguyễn Hữu Thọ",
					stationId: 4,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Bến xe phía Nam",
					address: "97 An Dương Vương",
					stationId: 4,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng Chính",
					address: "46 Nguyễn Hữu Đa",
					stationId: 5,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng Phụ",
					address: "46 Nguyễn Hữu Đa",
					stationId: 5,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Đường Quốc Lộ",
					address: "99 Nguyễn Hữu Cảnh",
					stationId: 5,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Chợ Lớn",
					address: "50 Nguyễn Nhạc",
					stationId: 5,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng Phụ",
					address: "500.Phạm Ngũ Lão",
					stationId: 6,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng Chính Bến Xe",
					address: "500.Phạm Ngũ Lão",
					stationId: 6,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Chợ Duyên Hải",
					address: "50 Nguyễn Nhạc",
					stationId: 6,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng Chính (có trung chuyển)",
					address: "Quốc lộ 1A, phường Hưng Thạnh, quận Cái Răng, TP. Cần Thơ",
					stationId: 7,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng Phụ Bến Xe Cần Thơ (có trung chuyển)",
					address: "Quốc lộ 1A, phường Hưng Thạnh, quận Cái Răng, TP. Cần Thơ",
					stationId: 7,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Chợ Cần Thơ",
					address: "999 Hai Bà Trưng",
					stationId: 7,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Ngã Ba Tây Ninh",
					address: "Đường Quốc Lộ 1A",
					stationId: 8,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Cổng Chính Bến Xe Tây Ninh",
					address: "113 Hứng Thái Hưa",
					stationId: 8,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
				{
					name: "Chợ Tây Ninh",
					address: "102 Hứng Thái Hưa",
					stationId: 8,
					createdAt: "2023-10-07 08:05:44",
					updatedAt: "2023-10-07 08:05:44",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("points", null, {});
	},
};
