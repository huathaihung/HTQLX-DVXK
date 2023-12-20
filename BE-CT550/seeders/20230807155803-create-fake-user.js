"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      
    */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "nhan vien",
          email: "nhanvien@gmail.com",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
          password: "123456",
          numberPhone: "0909123457",
          type: "ADMIN",
          createdAt: "2023-02-07 07:57:23",
          updatedAt: "2023-02-07 07:57:23",
        },
        {
          name: "ad",
          email: "ad@gmail.com",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
          password: "$2a$10$Wgt.ppNrKGlhaQFnmVvAJ./B8HGxijuJy6UkRigEFB/u8aytEe.zi",
          numberPhone: "0123456788",
          type: "ADMIN",
          createdAt: "2023-02-07 07:57:23",
          updatedAt: "2023-02-07 07:57:23",
        },
        {
          name: "Nguyễn Văn An",
          email: "nva@gmail.com",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
          password: "123456",
          numberPhone: "0909123455",
          type: "ADMIN",
          createdAt: "2023-02-07 07:57:23",
          updatedAt: "2023-02-07 07:57:23",
        },
        {
          name: "Nguyễn Văn Bình",
          email: "nvb@gmail.com",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
          password: "123456",
          numberPhone: "0909123456",
          type: "CLIENT",
          createdAt: "2023-02-07 07:57:23",
          updatedAt: "2023-02-07 07:57:23",
        },
        {
          name: "Nguyễn Văn Cường",
          email: "nvc@gmail.com",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
          password: "123456",
          numberPhone: "0909123450",
          type: "CLIENT",
          createdAt: "2023-02-07 07:57:23",
          updatedAt: "2023-02-07 07:57:23",
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
