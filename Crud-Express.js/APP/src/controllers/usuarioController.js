const usuarioRepository = require('../repositories/usuarioRepository.js');

// Obtener todos los usuarios
async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await usuarioRepository.obtenerUsuarios();
    res.status(200).json(usuarios);
    console.log(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al obtener los usuarios Controller' });
  }
}
/*async function obtenerUsuarios(req, res) {
    try {
      const usuarios = await usuarioRepository.obtenerUsuarios();
      console.log(usuarios); // <-- Agregar esta línea
      res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor en usuarioController' });
    }
  } */ 

// Obtener un usuario por ID
async function obtenerUsuarioPorId(req, res) {
  const id = req.params.id;
  try {
    const usuario = await usuarioRepository.obtenerUsuarioPorId(id);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ error: `No se encontró el usuario con ID ${id}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al obtener el usuario' });
  }
}

// Crear un nuevo usuario
/*async function crearUsuario(req, res) {
  const { Usuario, Correo, Contrasena } = req.body;
  try {
    const nuevoUsuario = await usuarioRepository.crearUsuario(Usuario, Correo, Contrasena);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al crear el usuario' });
  }
}*/
// Crear un nuevo usuario
async function crearUsuario(req, res) {
    const { Usuario, Correo, Contrasena } = req.body;
    const nuevoUsuario = { Usuario, Correo, Contrasena };
    try {
      const resultado = await usuarioRepository.crearUsuario(nuevoUsuario);
      res.status(201).json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un problema al crear el usuario' });
    }
  }
  

// Actualizar un usuario existente
async function actualizarUsuario(req, res) {
  const id = req.params.id;
  const { Usuario, Correo, Contrasena } = req.body;
  const nuevoUsuario = { Usuario, Correo, Contrasena };
  try {
    const usuarioActualizado = await usuarioRepository.actualizarUsuario(id, nuevoUsuario);
    if (usuarioActualizado) {
      res.status(200).json(usuarioActualizado);
    } else {
      res.status(404).json({ error: `No se encontró el usuario con ID ${id}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al actualizar el usuario' });
  }
}

// Eliminar un usuario existente
async function eliminarUsuario(req, res) {
  const id = req.params.id;
  try {
    const usuarioEliminado = await usuarioRepository.eliminarUsuario(id);
    if (usuarioEliminado) {
      res.status(200).json({ mensaje: `El usuario con ID ${id} ha sido eliminado` });
    } else {
      res.status(404).json({ error: `No se encontró el usuario con ID ${id}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al eliminar el usuario' });
  }
}

// Exportar las funciones para que puedan ser utilizadas en las rutas
module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
