/*  Archivo controllers/sucursales.js
 *  Simulando la respuesta de objetos Sucursal
 *  en un futuro aquí se utilizarán los modelos
 */
const mongoose = require('mongoose')
const Sucursal = mongoose.model('Sucursal')

function crearSucursal(req, res, next) {
  // Instanciaremos una nueva sucursal utilizando la clase Sucursal
  var sucursal = new Sucursal(req.body)
  sucursal.save().then(sucursal => {
    res.status(201).send(sucursal)
  }).catch(next)
}

function obtenerSucursal(req, res, next) {
  Sucursal.find().then(sucursal=> {
    res.send(sucursal)
  }).catch(next)
}

function modificarSucursal(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var modificaciones = req.body
  sucursal = { ...sucursal, ...modificaciones }
  res.send(sucursal)
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