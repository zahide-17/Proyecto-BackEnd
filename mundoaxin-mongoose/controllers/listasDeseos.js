/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuarios
 *  en un futuro aquí se utilizarán los modelos
 */

const ListaDeseos = require('../models/ListaDeseos')

function crearLista(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase Sucursal
  var listaDeseo = new ListaDeseos(req.body)
  res.status(201).send(listaDeseo)
}
//constructor (email,idProducto)
function obtenerLista(req, res) {
  // Simulando dos usuarios y respondiendolos
  var listaDeseo1 = new ListaDeseos('zahidy.17@gmail.com','1')
  res.send([listaDeseo1])
}

function modificarLista(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var listaDeseo1 = new ListaDeseos(req.params.email,'1')
  var modificaciones = req.body
  listaDeseo1 = { ...listaDeseo1, ...modificaciones }
  res.send(listaDeseo1)
}

function eliminarLista(req, res) {
  res.status(200).send(`Lista Deseos ${req.params.email} eliminado`);
}

module.exports = {
  crearLista,
  obtenerLista,
  modificarLista,
  eliminarLista
}