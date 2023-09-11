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
  email: {
    type: String,
    required: true,
  },
  tpeaccount_id: {
    type: Int32,
    required: true,
  },
});

module.exports = mongoose.model('Customeraccount', customeraccountSchema);
