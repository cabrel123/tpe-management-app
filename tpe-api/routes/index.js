const express = require('express')
const getContact = require('../controllers/contacts')
const getCategories = require('../controllers/categories')
const router = express.Router()

router.get('/contacts', function (req, res) {
	const contactData = getContact()
		if (!contactData) {
			res.status(400).send('Not found.')
		} else {
			res.send({ contactData })
		}
})

router.get('/categories', function (req, res) {
	const categoryData = getCategories()
		if (!categoryData) {
			res.status(400).send('Not found.')
		} else {
			res.send({ categoryData })
		}
})

// Routes
 app.use('/categories', require('./routes/categories'));
// app.use('/tpe-accounts', require('./routes/tpeAccounts'));
 app.use('/contacts', require('./routes/contacts'));

router.get('/', function (req, res, next) {
	res.render('index', { title: 'API - React intermédiaire' })
})

module.exports = router
