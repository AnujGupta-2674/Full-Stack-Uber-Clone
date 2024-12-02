const mongoose = require('mongoose');

const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true, // Prevent duplicate entries for the same token
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now, // Automatically set the creation time
    expires: 86400, // Token will automatically be removed after 24 hours (86400 seconds)
  },
});

const BlacklistedToken = mongoose.model('BlacklistedToken', blacklistedTokenSchema);

module.exports = BlacklistedToken;
