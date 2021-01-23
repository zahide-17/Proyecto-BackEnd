/*  Archivo controllers/sucursales.js
 *  Simulando la respuesta de objetos Sucursal
 *  en un futuro aquí se utilizarán los modelos
 */
const Producto = require('../models/Producto')

function crearProducto(req,res) {
    var producto = new Producto(req.body);
    res.status(201).send(producto)
}

//constructor(nombreProducto, marca, imagen, idCategoria, idProducto)
function obtenerProducto(req,res) {
    var producto1 = new Producto('MINI LIPSTICK KIT','MAC','https://picsum.photos/200','Labial','1')
    res.send([producto1])
}

function modificarProducto(req,res) {
    var producto1 = new Producto(req.params.nombreProducto,'MAC','https://picsum.photos/200','Labial','1')
    var modificaciones = req.body
    producto1 = { ...producto1, ...modificaciones }
    res.send(producto1)
}

function eliminarProducto(req,res) {
    res.status(200).send(`Producto ${req.params.nombreProducto} eliminado`)

}

module.exports = {
    crearProducto,
    obtenerProducto,
    modificarProducto,
    eliminarProducto
}