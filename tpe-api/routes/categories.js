// routes/categories.js

const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Route pour créer une nouvelle catégorie
router.post('/', (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
  });

  newCategory
    .save()
    .then((category) => res.json(category))
    .catch((err) => console.log(err));
});

// Autres routes pour la mise à jour, la suppression et la récupération des catégories

module.exports = router;
