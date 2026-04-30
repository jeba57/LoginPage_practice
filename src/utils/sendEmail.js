import transporter from "./nodemailer.js";

const sendEmail = async (email, username) => {

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: "Registration Successful",
    html: `
      <h2>Hello ${username}</h2>
      <p>Your registration was successful.</p>
      <p>Welcome to our platform.</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;