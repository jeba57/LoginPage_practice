import sendEmail from "./utils/sendEmail.js";

(async () => {
  try {
    await sendEmail("yourtestemail@gmail.com", "TestUser");
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
})();
