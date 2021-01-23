//Estructura del CRUD
const router = require('express').Router();
const {
    crearProducto,
    obtenerProducto,
    modificarProducto,
    eliminarProducto,
} = require('../controllers/productos')
const auth = require('./auth');

router.get('/', obtenerProducto)
router.post('/', crearProducto)
router.put('/:nombreProducto', auth.requerido, modificarProducto)
router.delete('/:nombreProducto', auth.requerido, eliminarProducto)

module.exports = router;