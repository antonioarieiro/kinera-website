const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const app = express();
app.use(express.json());

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb+srv://kinenewsletter:dRRJg4vw3GHT99PV-jxdoe1b-shard-00-02.yxygkgz.mongodb.net/formulario?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})  
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB', err));

// Configurações do servidor de e-mail
const transporter = nodemailer.createTransport(smtpTransport({
  host: 'smtp.seudominio.com',
  port: 587,
  auth: {
    user: 'seuemail@seudominio.com',
    pass: 'suasenha',
  },
  tls: {
    rejectUnauthorized: false,
  },
}));

// Criação do modelo do documento do formulário
const formularioSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  wantToBeYouTuber: Boolean,
  alreadyYouTuber: Boolean,
  pickVideos: Boolean,
  createTelevision: Boolean,
  participate: Boolean,
  receiveInformation: Boolean,
});

const Formulario = mongoose.model('Formulario', formularioSchema);

// Rota para receber as informações do formulário
app.post('/api/subscribe', async (req, res) => {
  const formulario = new Formulario(req.body);
  try {
    await formulario.save();
    // Envio de e-mail de confirmação
    await transporter.sendMail({
      from: 'seuemail@seudominio.com',
      to: formulario.email,
      subject: 'Confirmação de inscrição',
      html: 'Sua inscrição foi confirmada.',
    });
    res.send(formulario);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Inicialização do servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});


/* 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/json
app.use(bodyParser.json());

app.post('/api/subscribe', (req, res) => {
  const { email, wantToBeYouTuber, alreadyYouTuber, pickVideos, createTelevision, participate, receiveInformation } = req.body;
  // TODO: save data to your database or email service provider
  console.log(`New subscriber: ${email}, ${wantToBeYouTuber}, ${alreadyYouTuber}, ${pickVideos}, ${createTelevision}, ${participate}, ${receiveInformation}`);
  res.send('Successfully subscribed');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// create connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

// connect to database
connection.connect((err) => {
  if (err) {
    console.error('error connecting to database:', err);
    return;
  }
  console.log('connected to database');
});

// parse application/json
app.use(bodyParser.json());

app.post('/api/subscribe', (req, res) => {
  const { email, wantToBeYouTuber, alreadyYouTuber, pickVideos, createTelevision, participate, receiveInformation } = req.body;
  
  // save data to database
  const sql = `INSERT INTO subscribers (email, wantToBeYouTuber, alreadyYouTuber, pickVideos, createTelevision, participate, receiveInformation) 
               VALUES ('${email}', '${wantToBeYouTuber}', '${alreadyYouTuber}', '${pickVideos}', '${createTelevision}', '${participate}', '${receiveInformation}')`;
  connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('error saving subscriber to database:', error);
      res.status(500).send('Error saving subscriber to database');
      return;
    }
    console.log('new subscriber saved to database');
    res.send('Successfully subscribed');
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

*/=