const express = require('express');
const router = express.Router();
const { sendMail } = require('../Controller/appController');
const { subscribeEmail } = require('../Controller/subcribeEmail');

router.post('/send-email', sendMail);
router.post("/subcribe-email",subscribeEmail);

module.exports = router;
