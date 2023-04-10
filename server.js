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

const dbConfig = 'mongodb://kinergy:kinergy@localhost:27017/newsletter';

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

const transporter = nodemailer.createTransport({
  host: 'mail.kine.network',
  port: 465,
  secure: true,
  auth: {
    user: 'no-reply@kinergy.network',
    pass: 'pZXwriALkZVMzkBy',
  },
});

app.post('/api/subscribe', async (req, res) => {
  const formulario = new Formulario(req.body);
  try {
    await formulario.save();
    // Send confirmation email to the user
    const mailOptions = {
      from: 'no-reply@kinergy.network',
      to: formulario.email,
      subject: 'Confirmation of Subscription',
      text: `Dear ${formulario.name},\n\nThank you for subscribing to our newsletter. We look forward to keeping in touch with you.\n\nBest regards,\nThe Kinergy Team`,
    };
    await transporter.sendMail(mailOptions);
    res.send(formulario);
  } catch (err) {
    res.status(500).send(`Erro ao salvar formulário: ${err}`);
  }
});

app.listen(port, () => {
  console.log(`Exemplo app node rodando no endereço http://localhost/:$%7Bport%7D`)
});
