import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),

  auth: {
    user: process.env.SMTP_USER,   // Brevo account email
    pass: process.env.SMTP_PASS,   // Brevo SMTP key
  },
});
console.log("SMTP HOST:", process.env.SMTP_HOST);
console.log("SMTP USER:", process.env.SMTP_USER);
console.log("SMTP PASS:", process.env.SMTP_PASS);

export default transporter;
