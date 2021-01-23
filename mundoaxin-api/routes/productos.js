//Estructura del CRUD
const router = require('express').Router();
const {
    crearProducto,
    obtenerProducto,
    modificarProducto,
    eliminarProducto,
} = require('../controllers/productos')

router.get('/', obtenerProducto)
router.post('/', crearProducto)
router.put('/:nombreProducto', modificarProducto)
router.delete('/:nombreProducto', eliminarProducto)

module.exports = router;