const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Contact = require('../models/Contacts');
const TpeAccount = require('../models/Tpeaccount');
const Category = require('../models/Category');
const User = require('../models/Users');
const router = express.Router();
const app = express();


router.get('/contacts', async (req, res) => {
 	try {
 	  const contacts = await Contact.find(); // Récupère tous les contacts
	  console.log(contacts);
 	  res.json({ contacts });
 	} catch (erreur) {
 	  res.status(500).json({ message: 'Erreur lors de la récupération des contacts1', erreur: erreur.message });
 	}
 });

// Route pour enregistrer une nouvelle catégorie
router.post('/categories', async (req, res) => {
  try {
    const nouvelleCategorie = new Category(req.body); // Crée une nouvelle catégorie avec les données de la requête
    console.log(req.body);
	const categorieEnregistree = await nouvelleCategorie.save(); // Enregistre la nouvelle catégorie dans la base de données
    res.status(201).json(categorieEnregistree); // Répond avec la catégorie enregistrée
  } catch (erreur) {
    res.status(400).json({ message: 'Erreur lors de l\'enregistrement de la catégorie', erreur: erreur.message });
  }
});

// Route pour récupérer toutes les catégories
router.get('/categories', async (req, res) => {
	try {
	  const categories = await Category.find(); // Récupère toutes les catégories depuis la base de données
	  res.json(categories); // Répond avec la liste des catégories
	} catch (erreur) {
	  res.status(500).json({ message: 'Erreur lors de la récupération des catégories', erreur: erreur.message });
	}
  });

  router.post('/contacts', async (req, res) => {
	const { name, phone, profession, region } = req.body;
	console.log(req.body);
	try {
	  const nouveauContact = new Contact({ name, phone, profession, region });
	  const contactEnregistre = await nouveauContact.save();
	  res.json({ message: 'Contact enregistré avec succès', contact: contactEnregistre });
	} catch (erreur) {
	  res.status(500).json({ message: 'Erreur lors de l\'enregistrement du contact22', erreur: erreur.message });
	}
});

// Route pour enregistrer un nouveau TPE account
router.post('/tpeaccounts', async (req, res) => {
	try {
	  const nouveauTpeAccount = new TpeAccount(req.body); // Crée un nouvel objet TPE account avec les données de la requête
	  console.log(req.body); 
	  const tpeAccountEnregistre = await nouveauTpeAccount.save(); // Enregistre le nouvel objet dans la base de données
	  res.status(201).json(tpeAccountEnregistre); // Répond avec le TPE account enregistré
	} catch (erreur) {
	  res.status(400).json({ message: 'Erreur lors de l\'enregistrement du TPE account', erreur: erreur.message });
	}
  });

// Récupérer tous les TPE accounts depuis la base de données
router.get('/tpeaccounts', async (req, res) => {
  try {
    const tpeAccounts = await TpeAccount.find(); // Récupère tous les TPE accounts
    res.json({ tpeAccounts });
  } catch (erreur) {
    res.status(500).json({ message: 'Erreur lors de la récupération des TPE accounts', erreur: erreur.message });
  }
});


// Route pour enregistrer un nouveau Tcompte
router.post('/register', async (req, res) => {
	try {
	  const nouveauUser = new User(req.body); // Crée un nouvel objet user account avec les données de la requête
	  console.log(req.body.username); 
	  const userEnregistre = await nouveauUser.save(); // Enregistre le nouvel objet dans la base de données
	  res.status(201).json(userEnregistre); // Répond avec le TPE account enregistré
	} catch (erreur) {
	  res.status(400).json({ message: 'Erreur lors de l\'enregistrement du compte', erreur: erreur.message });
	}
  });

// Clé secrète pour signer les tokens JWT (gardez ceci secret en production)
const secretKey = 'TpeApp2023';
// Route de connexion utilisateur
router.post('/login', async (req, res) => {
	try {
	  const { username, password } = req.body;
  
	  // Recherche de l'utilisateur dans la base de données
	  const user = await User.findOne({ username });
  
	  if (!user) {
		return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
	  }
  
	  // Vérification du mot de passe
	  //const isPasswordValid = await bcrypt.compare(password, user.password);
  
	  if (password !== user.password) {
		return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect'+password+'-'+user.password });
	  }
  
	  // Création d'un token JWT
	  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  
	  res.json({ token });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Erreur lors de la connexion' });
	}
  });
  
  // Middleware pour vérifier l'authentification JWT
  function verifyToken(req, res, next) {
	const token = req.headers.authorization;
	console.log(token);
  
	if (!token) {
	  return res.status(403).json({ message: 'Token manquant' });
	}
  
	// Vérifie le token JWT
	jwt.verify(token, secretKey, (err, decoded) => {
	  if (err) {
		return res.status(401).json({ message: 'Token invalide'+token });
	  }
  
	  req.username = decoded.username;
	  next();
	});
  }

router.get('/', function (req, res, next) {
	res.render('index', { title: 'API - React intermédiaire' })
})

module.exports = router
