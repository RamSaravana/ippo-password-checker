// Import Module
const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  password: {
    type: String,
  },
  username: {
    type: String,
  },
});

module.exports = mongoose.model("Auth", AuthSchema);
