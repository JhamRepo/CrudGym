const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', usuarioRoutes);

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});
