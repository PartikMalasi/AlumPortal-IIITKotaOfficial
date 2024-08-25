const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instituteId: { type: String, required: true },
  branch: { type: String, required: true },
  personalEmail: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  graduationYear: { type: String, required: true },
  pastCompanies: { type: String, required: true },
  currentCompany: { type: String, required: true },
  role: { type: String, required: true },
  linkedin: { type: String },
  achievements: { type: String },
  password: { type: String, required: true },
  profilePicture: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
