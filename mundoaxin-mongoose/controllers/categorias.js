/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuarios
 *  en un futuro aquí se utilizarán los modelos
 */

const Categoria = require('../models/Categoria')

function crearCategoria(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase Sucursal
  var categoria = new Categoria(req.body)
  res.status(201).send(categoria)
}
//
function obtenerCategoria(req, res) {
  // Simulando dos usuarios y respondiendolos
  var categoria1 = new Categoria('1','Labial')
  var categoria2 = new Categoria('2','Sombras')
  var categoria3 = new Categoria('3','Delineador')
  res.send([categoria1,categoria2,categoria3])
}

function modificarCategoria(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var categoria1 = new Categoria(req.params.idCategoria,'Labial')
  var categoria2 = new Categoria(req.params.idCategoria,'Sombras')
  var categoria3 = new Categoria(req.params.idCategoria,'Delineador')
  var modificaciones = req.body
  categoria1 = { ...categoria1, ...modificaciones }
  res.send(categoria1)
  categoria2 = { ...categoria2, ...modificaciones }
  res.send(categoria2)
  categoria3 = { ...categoria3, ...modificaciones }
  res.send(categoria3)
}

function eliminarCategoria(req, res) {
  res.status(200).send(`Categoria ${req.params.idCategoria} eliminado`);
}

module.exports = {
  crearCategoria,
  obtenerCategoria,
  modificarCategoria,
  eliminarCategoria
}