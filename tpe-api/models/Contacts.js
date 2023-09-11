// models/Customeraccount.js

const mongoose = require('mongoose');

const customeraccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: false,
  },
  region: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Customeraccount', customeraccountSchema);
