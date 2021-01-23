//Estructura del CRUD
const router = require('express').Router();
const {
    crearArticulo,
    obtenerArticulo,
    modificarArticulo,
    eliminarArticulo,
} = require('../controllers/articulos')
const auth = require('./auth');

router.get('/', obtenerArticulo)
router.post('/', crearArticulo)
router.put('/:idProducto', auth.requerido, modificarArticulo)
router.delete('/:idProducto', auth.requerido, eliminarArticulo)

module.exports = router;