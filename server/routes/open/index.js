const router = require('express').Router(),
  { sendWelcomeEmail, forgotPasswordEmail } = require('../../emails/'),
  jwt = require('jsonwebtoken'),
  User = require('../../db/models/user');

// **********************************************//
// Create a user
// **********************************************//
router.post('/api/users/', async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  try {
    if (user)
      throw new Error('an account already exists associated with that email');
    user = new User({
      name,
      email,
      password
    });

    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    sendWelcomeEmail(user.email, user.name);
    res.status(201).json(user);
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

// ***********************************************//
// Login a user
// ***********************************************//
router.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

// ******************************
// Password Reset Request
// This route sends an email that the
// user must click within 10 minutes
// to reset their password.
// ******************************
router.get('/api/password', async (req, res) => {
  try {
    const { email } = req.query,
      user = await User.findOne({ email });
    if (!user) throw new Error("account doesn't exist");
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: '10m'
      }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// ******************************
// Redirect to password reset page
// ******************************
router.get('/api/password/:token', (req, res) => {
  console.log('81')
  const { token } = req.params; console.log('82')
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error(err.message);
    }); console.log('86')
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    console.log('92')
    res.redirect(process.env.URL + '/update-password');
    console.log(process.env.URL + '/update-password')
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

module.exports = router;
