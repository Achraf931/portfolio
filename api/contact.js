const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())

app.post('/', function (req, res) {

  let emailInfo = req.body.emailInfo
  sendMail(emailInfo)
  res.status(200).json({ 'message': 'Your mail send successfully' })

})
module.exports = {
  path: '/api/contact',
  handler: app
}
const sendMail = (emailInfo ) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ce8e49ab72aeb2",
      pass: "b87d183376fb96"
    }
  })
  setTimeout(() => {
    transporter.sendMail({
      from: emailInfo.email,
      to: emailInfo.email,
      subject: emailInfo.name,
      html: `<b><h1>${emailInfo.message}</h1></b>`
    })
  },100)
}
