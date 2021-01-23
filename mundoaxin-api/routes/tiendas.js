// Estructura del CRUD
const router = require('express').Router();
const {
  obtenerTienda,
  crearTienda,
  modificarTienda,
  eliminarTienda
} = require('../controllers/tiendas')

router.get('/', obtenerTienda)
router.post('/', crearTienda)
router.put('/:idTienda', modificarTienda)
router.delete('/:idTienda', eliminarTienda)

module.exports = router;