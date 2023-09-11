const express = require('express')
const getContact = require('../controllers/contacts')
const getCategories = require('../controllers/categories')
const Contact = require('../models/Contacts');
const TpeAccount = require('../models/Tpeaccount');
const Category = require('../models/Category');
const router = express.Router()
const app = express()

app.get('/contacts', function (req, res) {
	const contactData = getContact()
		if (!contactData) {
			res.status(400).send('Not found.')
		} else {
			res.send({ contactData })
		}
})
// app.get('/contacts', async (req, res) => {
// 	try {
// 	  const contacts = await Contact.find(); // Récupère tous les contacts
// 	  res.json({ contacts });
// 	} catch (erreur) {
// 	  res.status(500).json({ message: 'Erreur lors de la récupération des contacts', erreur: erreur.message });
// 	}
// });

// Route pour enregistrer une nouvelle catégorie
app.post('/categories', async (req, res) => {
  try {
    const nouvelleCategorie = new Category(req.body); // Crée une nouvelle catégorie avec les données de la requête
    const categorieEnregistree = await nouvelleCategorie.save(); // Enregistre la nouvelle catégorie dans la base de données
    res.status(201).json(categorieEnregistree); // Répond avec la catégorie enregistrée
  } catch (erreur) {
    res.status(400).json({ message: 'Erreur lors de l\'enregistrement de la catégorie', erreur: erreur.message });
  }
});

// Route pour récupérer toutes les catégories
app.get('/categories', async (req, res) => {
	try {
	  const categories = await Category.find(); // Récupère toutes les catégories depuis la base de données
	  res.json(categories); // Répond avec la liste des catégories
	} catch (erreur) {
	  res.status(500).json({ message: 'Erreur lors de la récupération des catégories', erreur: erreur.message });
	}
  });

app.post('/contacts', async (req, res) => {
	const { name, phone, profession, region } = req.body;
  
	try {
	  const nouveauContact = new Contact({ name, phone, profession, region });
	  const contactEnregistre = await nouveauContact.save();
	  res.json({ message: 'Contact enregistré avec succès', contact: contactEnregistre });
	} catch (erreur) {
	  res.status(500).json({ message: 'Erreur lors de l\'enregistrement du contact22', erreur: erreur.message });
	}
});

// Route pour enregistrer un nouveau TPE account
app.post('/tpeaccounts', async (req, res) => {
	try {
	  const nouveauTpeAccount = new TpeAccount(req.body); // Crée un nouvel objet TPE account avec les données de la requête
	  const tpeAccountEnregistre = await nouveauTpeAccount.save(); // Enregistre le nouvel objet dans la base de données
	  res.status(201).json(tpeAccountEnregistre); // Répond avec le TPE account enregistré
	} catch (erreur) {
	  res.status(400).json({ message: 'Erreur lors de l\'enregistrement du TPE account', erreur: erreur.message });
	}
  });

// Récupérer tous les TPE accounts depuis la base de données
app.get('/tpeaccounts', async (req, res) => {
  try {
    const tpeAccounts = await TpeAccount.find(); // Récupère tous les TPE accounts
    res.json({ tpeAccounts });
  } catch (erreur) {
    res.status(500).json({ message: 'Erreur lors de la récupération des TPE accounts', erreur: erreur.message });
  }
});


module.exports = router
