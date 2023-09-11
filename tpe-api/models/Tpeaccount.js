// models/TpeAccount.js

const mongoose = require('mongoose');

const tpeaccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Tpeaccount', tpeaccountSchema);
