//Estructura del CRUD
const router = require('express').Router();
const {
    crearCategoria,
    obtenerCategoria,
    modificarCategoria,
    eliminarCategoria,
} = require('../controllers/categorias')

router.get('/', obtenerCategoria)
router.post('/', crearCategoria)
router.put('/:idCategoria', modificarCategoria)
router.delete('/:idCategoria', eliminarCategoria)

module.exports = router;