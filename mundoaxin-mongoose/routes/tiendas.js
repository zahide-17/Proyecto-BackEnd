// Estructura del CRUD
const router = require('express').Router();
const {
  obtenerTienda,
  crearTienda,
  modificarTienda,
  eliminarTienda
} = require('../controllers/tiendas')
const auth = require('./auth');

router.get('/', auth.opcional, obtenerTienda)
router.post('/', auth.requerido, crearTienda)
router.put('/:idTienda', auth.requerido, modificarTienda)
router.delete('/:idTienda', auth.requerido, eliminarTienda)

module.exports = router;