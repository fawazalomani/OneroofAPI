const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "Fa@1234567890",
  database: "oneroof.db",
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

module.exports = db;
