/*  Archivo controllers/sucursales.js
 *  Simulando la respuesta de objetos Sucursal
 *  en un futuro aquí se utilizarán los modelos
 */

const Tienda = require('../models/Tienda')

function crearTienda(req, res) {
  // Instanciaremos una nueva sucursal utilizando la clase Sucursal
  var tienda = new Tienda(req.body)
  res.status(201).send(tienda)
}
//constructor(idTienda,nombre,ubicacion)
function obtenerTienda(req, res) {
  // Simulando dos usuarios y respondiendolos
  var tienda1 = new Tienda('1', 'Mac México','https://www.maccosmetics.com.mx/')
  res.send([tienda1])
}

function modificarTienda(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var tienda1 = new Usuario(req.params.idTienda, 'Mac México','https://www.maccosmetics.com.mx/')
  var modificaciones = req.body
  tienda1 = { ...tienda1, ...modificaciones }
  res.send(tienda1)
}

function eliminarTienda(req, res) {
  res.status(200).send(`Tienda ${req.params.idTienda} eliminado`);
}

module.exports = {
  crearTienda,
  obtenerTienda,
  modificarTienda,
  eliminarTienda
}