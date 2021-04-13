const route = require("express").Router();
const { getUsers, postUsers } = require("../controllers/user");

route
  .get("/", getUsers)
  .post("/", postUsers);

module.exports = { route };
