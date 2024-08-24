const nodemailer = require('nodemailer');
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

subscribeEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ msg: 'Email is required.' });
  }

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: 'Subscription Confirmation',
    text: 'Thank you for subscribing to our news letter!',
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: 'Subscription successful. Please check your email for confirmation.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ msg: 'Failed to subscribe. Please try again later.' });
  }
};

module.exports = {
    subscribeEmail
};
