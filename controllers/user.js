const { User } = require("../db/user");

const getUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        error: "Could not find any users.",
      });
    });
};

const postUsers = (req, res) => {
  let { firstName, lastName, email, password } = req.body;

  firstName = firstName.toLowerCase();
  lastName = lastName.toLowerCase();

  User.create({
    firstName,
    lastName,
    email,
    password,
  })
    .then((users) => {
      res.status(201).send(users);
    })
    .catch((err) => {
      res.status(501).send({
        error: "Not able to add new user.",
      });
    });
};

module.exports = {
  getUsers,
  postUsers,
};
