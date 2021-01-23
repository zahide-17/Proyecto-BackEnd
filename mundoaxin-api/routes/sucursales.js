// Estructura del CRUD
const router = require('express').Router();
const {
  obtenerSucursal,
  crearSucursal,
  modificarSucursal,
  eliminarSucursal
} = require('../controllers/sucursales')

router.get('/', obtenerSucursal)
router.post('/', crearSucursal)
router.put('/:razonSocial', modificarSucursal)
router.delete('/:razonSocial', eliminarSucursal)

module.exports = router;