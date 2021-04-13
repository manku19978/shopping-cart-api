const Sequelize = require("sequelize");

const db = new Sequelize("shopdb", "shopper", "password", {
  host: "localhost",
  dialect: "mysql",
});

db.sync({ alter: true })
  .then(() => console.log("DB sync complete"))
  .catch(() => console.log("DB sync failed"));

module.exports = { db };
