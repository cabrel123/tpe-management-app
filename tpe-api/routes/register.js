// routes/users.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models/Users');

// Route pour créer un nouvel utilisateur
router.post('/', (req, res) => {
  const hashedPassword = bcrypt.hash(req.body.password, 10);
  const newUsers = new Users({
    accounttype: req.body.accounttype,
    username: req.body.username,
    password: hashedPassword,
  });

  newUsers
    .save()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

// Autres routes pour la mise à jour, la suppression et la récupération des comptes

module.exports = router;
