const { Product } = require("../db/products");

const getProducts = (req, res) => {
  Product.findALL()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send({
        error: "Could not find products.",
      });
    });
};

const postProducts = (req, res) => {
  let { name, brand, lprice, price } = req.body;

  name = name.toLowerCase();
  brand = brand.toLowerCase();

  Product.create({
    name,
    brand,
    lprice,
    price,
  })
    .then((products) => {
      res.status(201).send(products);
    })
    .catch((err) => {
      res.status(501).send({
        error: "Not able to add new product.",
      });
    });
};

module.exports = {
  getProducts,
  postProducts,
};
