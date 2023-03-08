const express = require('express')
  const mongoose = require('mongoose');
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

  const dbConfig = 'mongodb+srv://kinenewsletter:dRRJg4vw3GHT99PV@cluster0.yxygkgz.mongodb.net/formulario?retryWrites=true&w=majority';

  // Conexão com o banco de dados MongoDB
  mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/api/subscribe', async (req, res) => {
  console.log(req)
    const formulario = new Formulario(req.body);
    try {
      await formulario.save();
      
      res.send(formulario);
    } catch (err) {
      res.status(500).send(`Erro ao salvar formulário: ${err}`);
    }
  });

app.listen(port, () => {
  console.log(`Exemplo app node rodando no endereço http://localhost/:$%7Bport%7D`)
});