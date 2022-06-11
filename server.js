const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
// const xoauth2 = require("xoauth2");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running"));

function sendMessage() {
  try {
    // mail options
    const mailOptions = {
      from: "https://mighty-caverns-90670.herokuapp.com/",
      to: "yarkony.rachel@gmail.com",
    };
    // here we actually send it
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log("Error sending message: " + err);
      } else {
        // no errors, it worked
        console.log("Message sent succesfully.");
      }
    });
  } catch (error) {
    console.log("Other error sending message: " + error);
  }
}

// thats the key part, without all these it didn't work for me
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    // type: "OAUTH2",
    user: process.env.GMAIL_USERNAME, //set these in your .env file
    clientId: process.env.OAUTH_CLIENT_ID,

    expires: 3599,
  },
});

// invoke sending function
sendMessage();
