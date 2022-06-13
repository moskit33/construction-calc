const path = require("path");
const express = require("express");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.post("/send-email", async function (req, res) {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "moskit544@gmail.com",
      pass: "uzkwbiiqkvwnstdd",
    },
  });
  let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "moskit544@gmail.com, constructioncalculator97@mail.ru", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
});
app.listen(port, () => {
  console.log("Server is up!");
});
