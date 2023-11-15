const Sequelize = require("sequelize");

const sequelize = new Sequelize("online-shop", "root", "MySQL23%", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;


