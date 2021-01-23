//Estructura del CRUD
const router = require('express').Router();
const {
    crearArticulo,
    obtenerArticulo,
    modificarArticulo,
    eliminarArticulo,
} = require('../controllers/articulos')

router.get('/', obtenerArticulo)
router.post('/', crearArticulo)
router.put('/:idProducto', modificarArticulo)
router.delete('/:idProducto', eliminarArticulo)

module.exports = router;