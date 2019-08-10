const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  roles: [String],
  dateCreated: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
