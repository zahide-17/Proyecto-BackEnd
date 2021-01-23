//Estructura del CRUD
const router = require('express').Router();
const {
    crearLista,
    obtenerLista,
    modificarLista,
    eliminarLista,
} = require('../controllers/listasDeseos')

router.get('/', obtenerLista)
router.post('/', crearLista)
router.put('/:email', modificarLista)
router.delete('/:email', eliminarLista)

module.exports = router;