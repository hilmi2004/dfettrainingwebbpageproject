require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post("/send-email", async (req, res) => {
    const {  email, message } = req.body;

    const mailOptionsToBusiness = {
        from: process.env.EMAIL_USER,
        to: process.env.BUSINESS_EMAIL, // Your business email
        subject: "New Course Registration",
        html: `
            <h2>New Registration Details</h2>
            <p> <strong>Email : </strong> ${email} </p>
            <p> <strong>Message : </strong> ${message} </p>
            
        `
    };

    const mailOptionsToUser = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Registration Confirmation",
        html: `
            <h1>Thank you for reaching out and i will get back to you ASAP</h1>
        `
    };

    try {
        await transporter.sendMail(mailOptionsToBusiness);
        await transporter.sendMail(mailOptionsToUser);
        res.status(200).json({ success: true, message: "Emails sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
