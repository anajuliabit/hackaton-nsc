const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
  person: String,
  location: String,
  text: [String],
  message: String
});

module.exports = mongoose.model("message", MessagesSchema, "message");
