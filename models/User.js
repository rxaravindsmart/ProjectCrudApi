const mongoose = require("mongoose");

// Define a Mongoose Schema for the User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
});

// Export the User model
module.exports = mongoose.model("User", userSchema);
