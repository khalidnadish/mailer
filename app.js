const express = require("express");
var nodemailer = require("nodemailer");
var cors = require("cors");
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("contact");
});

const hostData="smtp.hostinger.com"
const portData=465
const authUser= "nadish@nadish.online"
const authPass= "Leno_1972"
const fromMail= "<nadish@nadish.online>"
const toMail ="nadish@nadish.online"
const mailSubject= "Mail From Website"
const mailBody= "mail Body khalid from mailer"


/* ---------------------------------------------------------- */
app.post("/sendMail", (req, res) => {
  let transporter = nodemailer.createTransport({
    host: hostData,
    port: portData,
    auth: {
      user: authUser, // generated ethereal user
      pass: authPass, // generated ethereal password
    },
  });

  let mailOptions = {
    from: `Mail From Website ${fromMail}`, // sender address
    to: toMail, // list of receivers
    subject: mailSubject, // Subject line
    text: mailBody, // plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.send("ok");
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server started..."));
