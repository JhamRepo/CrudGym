const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gimnasio', 'root', 'soporte', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Conexión establecida correctamente.'))
  .catch(error => console.error('Error de conexión:', error));

module.exports = sequelize;
