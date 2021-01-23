//Estructura del CRUD
const router = require('express').Router();
const {
    crearLista,
    obtenerLista,
    modificarLista,
    eliminarLista,
} = require('../controllers/listasDeseos')
const auth = require('./auth');

router.get('/', obtenerLista)
router.post('/', crearLista)
router.put('/:email', auth.requerido, modificarLista)
router.delete('/:email', auth.requerido, eliminarLista)

module.exports = router;