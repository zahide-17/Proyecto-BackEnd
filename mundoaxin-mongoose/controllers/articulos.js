/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuarios
 *  en un futuro aquí se utilizarán los modelos
 */

const Articulo = require('../models/Articulo')

function crearArticulo(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase Sucursal
  var articulo = new Articulo(req.body)
  res.status(201).send(articulo)
}
// constructor(idProducto, nombreProd,marca,precio,descripcion,imagen,idTienda,idCategoria)
function obtenerArticulo(req, res) {
  // Simulando dos usuarios y respondiendolos
  var articulo1 = new Articulo('1','MINI LIPSTICK KIT','MAC','230.50','Labial rojo','https://picsum.photos/200','1','Labial')
  res.send([articulo1])
}

function modificarArticulo(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var articulo1 = new Articulo(req.params.idProducto,'MINI LIPSTICK KIT','MAC','230.50','Labial rojo','https://picsum.photos/200','1','Labial')
  var modificaciones = req.body
  articulo1 = { ...articulo1, ...modificaciones }
  res.send(articulo1)
}

function eliminarArticulo(req, res) {
  res.status(200).send(`Articulo ${req.params.idProducto} eliminado`);
}

module.exports = {
  crearArticulo,
  obtenerArticulo,
  modificarArticulo,
  eliminarArticulo
}