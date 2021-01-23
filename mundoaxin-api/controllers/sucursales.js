/*  Archivo controllers/sucursales.js
 *  Simulando la respuesta de objetos Sucursal
 *  en un futuro aquí se utilizarán los modelos
 */

const Sucursal = require('../models/Sucursal')

function crearSucursal(req, res) {
  // Instanciaremos una nueva sucursal utilizando la clase Sucursal
  var sucursal = new Sucursal(req.body)
  res.status(201).send(sucursal)
}
//constructor(nombre, email, razonSocial) {
function obtenerSucursal(req, res) {
  // Simulando dos usuarios y respondiendolos
  var sucursal1 = new Sucursal('Mundo Axin SA' ,'Mundo Axin', 'mundo_axin@gmail.com')
  res.send([sucursal1])
}

function modificarSucursal(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var sucursal1 = new Usuario(req.params.razonSocial, 'Mundo Axin', 'mundo_Axin@gmail.com')
  var modificaciones = req.body
  sucursal1 = { ...sucursal1, ...modificaciones }
  res.send(sucursal1)
}

function eliminarSucursal(req, res) {
  res.status(200).send(`Sucursal ${req.params.razonSocial} eliminado`);
}

module.exports = {
  crearSucursal,
  obtenerSucursal,
  modificarSucursal,
  eliminarSucursal
}