const connection = require('../db.js');
const Usuario = require('../models/usuarioModel.js');

// Obtener todos los usuarios
async function obtenerUsuarios() {
  return await Usuario.findAll();
}

// Obtener un usuario por ID
async function obtenerUsuarioPorId(id) {
  return await Usuario.findByPk(id);
}

// Crear un usuario
async function crearUsuario(usuario) {
  console.log(usuario); 
  return await Usuario.create(usuario);
}

// Actualizar un usuario
async function actualizarUsuario(id, usuario) {
  await Usuario.update(usuario, { where: { id } });
  return await Usuario.findByPk(id);
}

// Eliminar un usuario
async function eliminarUsuario(id) {
  return await Usuario.destroy({ where: { id } });
}

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
};
