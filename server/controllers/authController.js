const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

exports.signIn = async (req, res) => {
  const { instituteId, password } = req.body;

  try {
    const user = await User.findOne({ instituteId });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid institute ID or password' });
    }

    const token = jwt.sign(
      { id: user._id, instituteId: user.instituteId },
      JWT_SECRET,
      { expiresIn: '1d' } // Token expires in 1 day
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.signOut = (req, res) => {
  // Handle sign-out logic (e.g., invalidating tokens, etc.)
  res.json({ message: 'Signed out successfully' });
};
