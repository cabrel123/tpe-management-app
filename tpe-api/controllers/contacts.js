const contactData = require('../models/Contacts')

function getContact() {
	return contactData.map(({ name, phoneNumber, profession, region }) => ({
		name,
		phoneNumber, 
		profession, 
		region
	}))
}

module.exports = getContact