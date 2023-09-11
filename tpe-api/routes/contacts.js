// routes/contacts.js

const express = require('express');
const router = express.Router();
const Contacts = require('../models/Contacts');

// Route pour créer un nouveau contact
router.post('/contacts', (req, res) => {
  const newContact = new Contacts({
    name: req.body.name,
    phoneNumber: req.body.phone,
    profession: req.body.email,
    region: req.body.region
  });

  newContact
    .save()
    .then((tpeaccount) => res.json(tpeaccount))
    .catch((err) => console.log(err));
});

// Autres routes pour la mise à jour, la suppression et la récupération des contacts

module.exports = router;
