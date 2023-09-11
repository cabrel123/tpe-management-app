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
    type: Int32,
    required: true,
  },
  balance: {
    type: Int32,
    required: false,
  },
});

module.exports = mongoose.model('Tpeaccount', tpeaccountSchema);
