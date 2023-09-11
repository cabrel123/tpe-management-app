// routes/tpeAccounts.js

const express = require('express');
const router = express.Router();
const TpeAccount = require('../models/Tpeaccount');

// Route pour créer une nouvelle catégorie
router.post('/', (req, res) => {
  const newTpeaccount = new Tpeaccount({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    categoryId: req.body.categoryId,
    balance: req.body.balance,
  });

  newTpeaccount
    .save()
    .then((tpeaccount) => res.json(tpeaccount))
    .catch((err) => console.log(err));
});

// Autres routes pour la mise à jour, la suppression et la récupération des comptes

module.exports = router;
