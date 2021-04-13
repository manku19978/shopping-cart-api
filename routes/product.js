const route = require("express").Router();
const { getProducts, postProducts } = require("../controllers/product");

route
  .get("/", getProducts)
  .post("/", postProducts);

module.exports = { route };
