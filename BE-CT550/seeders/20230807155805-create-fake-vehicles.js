"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "vehicles",
      [
        {
          name: "10B 123.45",
          description: "Xe có 21 chỗ, Có WC , Wifi",
          type: "limouse",
          passengerCarId: 1,
          numberFloors: 2,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 002.32",
          description: "Xe bình dân tiện nghi",
          type: "normal",
          passengerCarId: 2,
          numberFloors: 2,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 014.12",
          description: "Xe có 15 chỗ, Có WC , Wifi",
          type: "limouse",
          numberFloors: 2,
          passengerCarId: 1,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 102.99",
          description: "Xe bình dân tiện nghi",
          type: "normal",
          numberFloors: 2,
          passengerCarId: 3,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 303.30",
          description: "Xe bình dân tiện nghi",
          type: "normal",
          numberFloors: 2,
          passengerCarId: 4,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 000.84",
          description: "Xe có 21 chỗ, Có WC , Wifi",
          type: "limouse",
          numberFloors: 2,
          passengerCarId: 5,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 872.00",
          description: "Xe có 21 chỗ, Có WC , Wifi",
          type: "limouse",
          numberFloors: 2,
          passengerCarId: 4,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 318.90",
          description: "Xe có 21 chỗ, Có WC , Wifi",
          type: "limouse",
          numberFloors: 2,
          passengerCarId: 2,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 007.11",
          description: "Xe có 8 chỗ, Có WC , Wifi",
          type: "normal",
          numberFloors: 1,
          passengerCarId: 5,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 666.66",
          description: "Xe có 15 chỗ, Có WC , Wifi",
          type: "normal",
          numberFloors: 1,
          passengerCarId: 2,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
        {
          name: "10B 543.95",
          description: "Xe bình dân tiện nghi",
          type: "normal",
          numberFloors: 1,
          passengerCarId: 3,
          createdAt: "2023-10-07 08:05:44",
          updatedAt: "2023-10-07 08:05:44",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("vehicles", null, {});
  },
};
