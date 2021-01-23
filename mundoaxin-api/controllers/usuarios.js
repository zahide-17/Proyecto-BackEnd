/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuarios
 *  en un futuro aquí se utilizarán los modelos
 */

const Usuario = require('../models/Usuario')

function crearUsuario(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase Sucursal
  var usuario = new Usuario(req.body)
  res.status(201).send(usuario)
}
//(email, nombre, fechaNac, ciudad, genero, password, razonSocial)
function obtenerUsuario(req, res) {
  // Simulando dos usuarios y respondiendolos
  var usuario1 = new Usuario('zahidy.17@gmail.com', 'Zahide Tellez','1990-06-17','Estado de México','F','holamundo','Mundo Axin SA')
  var usuario2 = new Usuario('alvaro.12@gmail.com', 'Alvaro Osornio','1988-07-12','Ciudad de México','M','adiosmundo','Mundo Axin SA')
  res.send([usuario1,usuario2])
}

function modificarUsuario(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var usuario1 = new Usuario(req.params.email,'Zahide Tellez','1990-06-17','Estado de México','F','holamundo','Mundo Axin SA')
  var modificaciones = req.body
  usuario1 = { ...usuario1, ...modificaciones }
  res.send(usuario1)
}

function eliminarUsuario(req, res) {
  res.status(200).send(`Usuario ${req.params.email} eliminado`);
}

module.exports = {
  crearUsuario,
  obtenerUsuario,
  modificarUsuario,
  eliminarUsuario
}