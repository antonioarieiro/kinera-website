import nodemailer from 'nodemailer';

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "YOUR_EMAIL_ADDRESS", // replace with your email address
    pass: "YOUR_EMAIL_PASSWORD", // replace with your email password
  },
});

export default transporter;