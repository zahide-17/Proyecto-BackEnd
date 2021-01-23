// Estructura del CRUD
const router = require('express').Router();
const {
  obtenerUsuario,
  crearUsuario,
  modificarUsuario,
  eliminarUsuario
} = require('../controllers/usuarios')

router.get('/', obtenerUsuario)
router.post('/', crearUsuario)
router.put('/:email', modificarUsuario)
router.delete('/:email', eliminarUsuario)

module.exports = router;