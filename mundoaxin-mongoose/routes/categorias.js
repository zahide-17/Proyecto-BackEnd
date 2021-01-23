//Estructura del CRUD
const router = require('express').Router();
const {
    crearCategoria,
    obtenerCategoria,
    modificarCategoria,
    eliminarCategoria,
} = require('../controllers/categorias')
const auth = require('./auth');

router.get('/', obtenerCategoria)
router.post('/', crearCategoria)
router.put('/:idCategoria', auth.requerido, modificarCategoria)
router.delete('/:idCategoria', auth.requerido, eliminarCategoria)

module.exports = router;