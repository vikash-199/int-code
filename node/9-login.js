const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
      });
    }

    // 2. Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // 4. Generate token
    const token = generateToken(user);

    // 5. Send response
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = loginUser;

const logi = async (req, res) => {
  try {
    //get email and pass from body
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: 'Invalid credential' });
    }

    //check user in db
    const user = await User.find({ email });

    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    //compare password
    const comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass) {
      return;
    }

    //create token
    const token = await jwt.sign({ id: user._id }, 'secretkey', {
      expiresIn: '15d',
    });
  } catch (err) {
    console.log(err);
  }
};
