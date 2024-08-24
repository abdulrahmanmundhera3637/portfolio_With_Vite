require('dotenv').config(); 
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

/** Send mail from real Gmail account */
const sendMail = async (req, res) => {
    const { name, userEmail, message } = req.body;

    // Validate input
    if (!name || !userEmail || !message) {
        return res.status(400).json({ error: "Name, Email, and Message are required." });
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Mailgen",
            link: 'https://mailgen.js/'
        }
    });

    let response = {
        body: {
            name: name,
            intro: message,
            outro: "Looking forward to doing more Services"
        }
    };

    let mail = MailGenerator.generate(response);

    let messageOptions = {
        from: EMAIL,
        to: userEmail,
        subject: "Your Message of Portfolio Website",
        html: mail
    };

    try {
        await transporter.sendMail(messageOptions);
        return res.status(201).json({
            msg: "Your Message has been Sent Successfully"
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    sendMail
};
