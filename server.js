const express = require('express')
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const app = express()
app.use(express.json());
const port = 3001

// Habilitar o CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

const dbConfig = 'mongodb://kinergy:kinergy@mongodb://127.0.0.1:27017/newsletter';

// Conexão com o banco de dados MongoDB
mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'admin'
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB', err));

const formularioSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  wantToBeYouTuber: Boolean,
  alreadyYouTuber: Boolean,
  pickVideos: Boolean,
  createTelevision: Boolean,
  participate: Boolean,
  receiveInformation: Boolean,
  nationality: String,
});

const Formulario = mongoose.model('Formulario', formularioSchema);

//const dotenv = require('dotenv');
//dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'mail.kine.network',
  port: 465,
  secure: true,
    auth: {
    user: 'no-reply@kinergy.network',
    pass: 'pZXwriALkZVMzkBy'
    //process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.post('/api/subscribe', async (req, res) => {
  const mailOptions = {
    from: 'no-reply@kinergy.network',
    to: req.body.email,
    subject: 'Confirmation of Subscription',
    text: `Dear ${req.body.name},\n\nThank you for subscribing to our newsletter. We look forward to keeping in touch with you.\n\nBest regards,\nThe Kinergy Team`,
  };
  transporter.sendMail(mailOptions).then(() => {
    const formulario = new Formulario(req.body);
    formulario.save().then(() => {
      res.status(201).send(`User successfully registered. A confirmation email has been sent.`);
    }).catch((err) => {

      res.status(500).send(`Error saving user: ${err}`);
    });

  }).catch((err) => {
    res.status(500).send(`Error sending email, possibly email does not exist: ${err}`);
  })
});

app.listen(port, () => {
  console.log(`Example Node app running at the address: http://localhost:${port}`)
});
