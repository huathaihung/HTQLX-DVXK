"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "passengercarcompanies",
      [
        {
          name: "Xuân Mai",
          description: "Xe khách bình dân giá rẻ",
          imageIntro:
            "https://static.vexere.com/production/images/1601697902998.jpeg?w=250&h=250",
          confirmType: "Xác nhận tức thì",
          price: "80000 ~ 120000",
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "Hùng Cường",
          description: "Xe khách bình dân giá rẻ",
          imageIntro:
            "https://static.vexere.com/production/images/1601697902998.jpeg?w=250&h=250",
          confirmType: "Xác nhận tức thì",
          price: "100000",
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "Việt Đang",
          description: "Limousine Ghế Vip Massage 8 chỗ",
          imageIntro:
            "https://static.vexere.com/production/images/1610522448264.jpeg?w=250&h=250",
          confirmType: "Xác nhận tức thì",
          price: "500000 ~ 550000",
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "Hải Hoàng",
          description: "Limousine giường phòng 10 chỗ",
          imageIntro:
            "https://static.vexere.com/production/images/1576836788562.jpeg?w=250&h=250",
          confirmType: "Xác nhận tức thì",
          price: "400000",
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "Thái Hưng",
          description: "Xe Du lịch 16 chỗ đời mới",
          imageIntro:
            "https://static.vexere.com/production/images/1590571040223.jpeg?w=250&h=250",
          confirmType: "Xác nhận tức thì",
          price: "200000 ~ 300000",
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("passengercarcompanies", null, {});
  },
};
