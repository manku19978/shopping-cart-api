const { DataTypes } = require("sequelize");
const { db } = require("./index");

const Product = db.define("product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lprice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  imgLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Product };
